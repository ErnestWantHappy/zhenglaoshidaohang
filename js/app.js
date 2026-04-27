document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryFilters = document.getElementById('categoryFilters');
    const searchInput = document.getElementById('searchInput');
    const emptyState = document.getElementById('emptyState');

    let currentCategory = '全部';
    let currentSearchTerm = '';
    const projects = window.PROJECT_DATA || [];

    // 初始化
    init();

    function init() {
        renderFilters();
        renderProjects();
        
        // 绑定搜索事件
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            renderProjects();
        });
    }

    // 提取所有唯一的分类
    function getCategories() {
        const categories = new Set();
        projects.forEach(p => {
            if (p.categories && Array.isArray(p.categories)) {
                p.categories.forEach(c => categories.add(c));
            }
        });
        return ['全部', ...Array.from(categories)];
    }

    // 渲染分类按钮
    function renderFilters() {
        const categories = getCategories();
        categoryFilters.innerHTML = '';
        
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${category === currentCategory ? 'active' : ''}`;
            btn.textContent = category;
            btn.addEventListener('click', () => {
                // 更新高亮状态
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentCategory = category;
                renderProjects();
            });
            categoryFilters.appendChild(btn);
        });
    }

    // 过滤并渲染项目卡片
    function renderProjects() {
        const filteredProjects = projects.filter(p => {
            // 分类匹配
            const matchCategory = currentCategory === '全部' || p.categories.includes(currentCategory);
            // 搜索词匹配
            const matchSearch = p.title.toLowerCase().includes(currentSearchTerm) || 
                                p.desc.toLowerCase().includes(currentSearchTerm);
            
            return matchCategory && matchSearch;
        });

        projectsGrid.innerHTML = '';

        if (filteredProjects.length === 0) {
            projectsGrid.classList.add('hidden');
            emptyState.classList.remove('hidden');
        } else {
            projectsGrid.classList.remove('hidden');
            emptyState.classList.add('hidden');
            
            filteredProjects.forEach((p, index) => {
                const card = createProjectCard(p, index + 1);
                projectsGrid.appendChild(card);
            });
        }
    }

    // 创建单个卡片的 DOM
    function createProjectCard(project, displayIndex) {
        const div = document.createElement('div');
        div.className = 'project-card';
        
        // 标签 HTML
        const tagsHtml = project.categories.map(c => `<span class="tag">${c}</span>`).join('');
        
        // 按钮逻辑：如果链接为空，则显示为灰色不可点击
        const createBtn = (url, text, type) => {
            if (url && url.trim() !== '') {
                return `<a href="${url}" target="_blank" class="action-btn ${type}">${text}</a>`;
            } else {
                return `<span class="action-btn btn-disabled">${text} (整理中)</span>`;
            }
        };

        const demoBtn = createBtn(project.links.demo, '查看演示', 'btn-secondary');
        const downloadBtn = createBtn(project.links.download, '获取工具', 'btn-primary');

        // 环境和端口的动态渲染逻辑
        let envHtml = '';
        if (project.environment && project.environment.trim() !== '') {
            envHtml = `
                <div class="meta-item">
                    <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    <span>环境要求：${project.environment}</span>
                </div>
            `;
        }

        let portHtml = '';
        if (project.port && project.port.trim() !== '') {
            portHtml = `
                <div class="meta-item">
                    <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <span>默认端口：${project.port}</span>
                </div>
            `;
        }

        div.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${displayIndex}. ${project.title}</h3>
            </div>
            
            <p class="card-desc">${project.desc}</p>
            
            <div class="card-meta">
                <div class="meta-item">
                    <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>适用对象：${project.target}</span>
                </div>
                <div class="meta-item">
                    <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    <span>学科/年级：${project.subject}</span>
                </div>
                ${envHtml}
                ${portHtml}
            </div>
            
            <div class="card-tags">
                ${tagsHtml}
            </div>
            
            <div class="card-actions">
                ${demoBtn}
                ${downloadBtn}
            </div>
        `;
        
        return div;
    }
});
