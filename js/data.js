// 此文件用于配置网站上展示的所有项目。
// 每次修改保存后，刷新网页即可看到效果。

const projects = [
  {
    id: 1,
    title: "课堂随机点名系统",
    desc: "双击 EXE 即可启动，支持导入名单、随机点名、已抽中记录和抽选速度调整",
    categories: ["班主任工具", "课堂工具"],
    target: "班主任、任课教师",
    subject: "通用",
    environment: "Win10 / Win11",
    port: "5002",
    links: {
      demo: "https://www.douyin.com/video/7631928428840684840", // 填入您的抖音视频链接
      download: "https://www.alipan.com/s/F1SXTVpMHbQ"
    }
  },
  {
    id: 2,
    title: "小型网络搭建仿真网页",
    desc: "支持拖动设备搭建网络，网线、光纤、无线连接可切换，并用不同线条区分",
    categories: ["信息科技", "课堂工具"],
    target: "七年级信息科技教师",
    subject: "信息科技-七上-10",
    environment: "Win10 / Win11",
    port: "3000",
    links: {
      demo: "https://www.douyin.com/video/7632643593961964139",
      download: "https://www.alipan.com/s/CK899Q3h2Jb"
    }
  },
  {
    id: 3,
    title: "语音合成实验探究工具",
    desc: "支持学生端实验探究、教师端流程切换、数据收集与词云展示",
    categories: ["信息科技", "AI工具", "公开课支持"],
    target: "八年级信息科技教师",
    subject: "信息科技（八年级）",
    environment: "Win10 及以上",
    port: "8080",
    links: {
      demo: "",
      download: ""
    }
  },
  {
    id: 4,
    title: "图像识别课堂工具",
    desc: "用于图像识别教学演示和学生实验操作",
    categories: ["信息科技", "AI工具"],
    target: "八年级信息科技教师",
    subject: "信息科技（八年级）",
    environment: "Win10 及以上",
    port: "3000",
    links: {
      demo: "",
      download: ""
    }
  }
];

// 将数据暴露给全局作用域，供 app.js 使用
window.PROJECT_DATA = projects;
