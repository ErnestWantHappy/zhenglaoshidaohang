document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryFilters = document.getElementById('categoryFilters');
    const searchInput = document.getElementById('searchInput');
    const emptyState = document.getElementById('emptyState');
    const modalElements = createPrivateModal();

    let currentCategory = '全部';
    let currentSearchTerm = '';
    let lastModalTrigger = null;
    const projects = window.PROJECT_DATA || [];

    init();

    function init() {
        document.body.appendChild(modalElements.overlay);
        bindModalEvents();
        renderFilters();
        renderProjects();

        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            renderProjects();
        });
    }

    function bindModalEvents() {
        modalElements.closeButton.addEventListener('click', closePrivateModal);

        modalElements.overlay.addEventListener('click', (event) => {
            if (event.target === modalElements.overlay) {
                closePrivateModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !modalElements.overlay.classList.contains('hidden')) {
                closePrivateModal();
            }
        });
    }

    function openPrivateModal(triggerButton) {
        lastModalTrigger = triggerButton || document.activeElement;
        modalElements.overlay.classList.remove('hidden');
        modalElements.overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        modalElements.closeButton.focus();
    }

    function closePrivateModal() {
        modalElements.overlay.classList.add('hidden');
        modalElements.overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
            lastModalTrigger.focus();
        }
    }

    function createPrivateModal() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay hidden';
        overlay.setAttribute('aria-hidden', 'true');

        overlay.innerHTML = `
            <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="privateToolModalTitle">
                <button type="button" class="modal-close-btn" aria-label="关闭提示框">×</button>
                <p class="modal-eyebrow">粉丝定制案例</p>
                <h2 class="modal-title" id="privateToolModalTitle">暂不共享</h2>
                <p class="modal-text">通用工具继续免费</p>
                <p class="modal-text modal-text-accent">个性化可抖音联系低价定制</p>
            </div>
        `;

        return {
            overlay,
            closeButton: overlay.querySelector('.modal-close-btn')
        };
    }

    function getCategories() {
        const categories = new Set();
        projects.forEach((project) => {
            if (project.categories && Array.isArray(project.categories)) {
                project.categories.forEach((category) => categories.add(category));
            }
        });
        return ['全部', ...Array.from(categories)];
    }

    function renderFilters() {
        const categories = getCategories();
        categoryFilters.innerHTML = '';

        categories.forEach((category) => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${category === currentCategory ? 'active' : ''}`;
            btn.textContent = category;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach((button) => button.classList.remove('active'));
                btn.classList.add('active');

                currentCategory = category;
                renderProjects();
            });
            categoryFilters.appendChild(btn);
        });
    }

    function renderProjects() {
        const filteredProjects = projects.filter((project) => {
            const matchCategory = currentCategory === '全部' || project.categories.includes(currentCategory);
            const matchSearch = project.title.toLowerCase().includes(currentSearchTerm)
                || project.desc.toLowerCase().includes(currentSearchTerm);

            return matchCategory && matchSearch;
        });

        projectsGrid.innerHTML = '';

        if (filteredProjects.length === 0) {
            projectsGrid.classList.add('hidden');
            emptyState.classList.remove('hidden');
            return;
        }

        projectsGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');

        filteredProjects.forEach((project, index) => {
            const card = createProjectCard(project, index + 1);
            projectsGrid.appendChild(card);
        });
    }

    function createActionButton(project, type) {
        const links = project.links || {};
        const shareStatus = project.shareStatus || 'public';

        if (type === 'demo') {
            if (links.demo && links.demo.trim() !== '') {
                return `<a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="action-btn btn-secondary">查看演示</a>`;
            }

            return '<span class="action-btn btn-disabled">查看演示 (整理中)</span>';
        }

        if (shareStatus === 'private') {
            return '<button type="button" class="action-btn btn-private" data-action="open-private-modal">暂不共享</button>';
        }

        if (links.download && links.download.trim() !== '') {
            return `<a href="${links.download}" target="_blank" rel="noopener noreferrer" class="action-btn btn-primary">获取工具</a>`;
        }

        return '<span class="action-btn btn-disabled">获取工具 (整理中)</span>';
    }

    function createProjectCard(project, displayIndex) {
        const div = document.createElement('div');
        div.className = 'project-card';

        const tagsHtml = project.categories.map((category) => `<span class="tag">${category}</span>`).join('');
        const demoBtn = createActionButton(project, 'demo');
        const downloadBtn = createActionButton(project, 'download');

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

        const privateButton = div.querySelector('[data-action="open-private-modal"]');
        if (privateButton) {
            privateButton.addEventListener('click', () => openPrivateModal(privateButton));
        }

        return div;
    }
});
