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
    title: "班级电子宠物养成系统",
    desc: "一键双击bat即可启动！超萌班级专属电子宠物，低年级孩子的最爱，陪伴孩子们快乐成长每一天！",
    categories: ["班主任工具", "班级管理"],
    target: "班主任",
    subject: "通用",
    environment: "Win7 / Win10 通用",
    port: "无",
    links: {
      demo: "https://www.douyin.com/video/7633419000180922601",
      download: "https://www.alipan.com/s/TWmwzXGEpgR"
    }
  },
  {
  id: 4,
  title: "错题刷题系统",
  desc: "双击 EXE 即可启动，老师上传 Excel 题库，学生在线刷题，错题自动进入错题本，后台可导出答题统计",
  categories: ["课堂工具", "刷题工具", "学业评价"],
  target: "任课教师、信息科技教师、班主任",
  subject: "通用",
  environment: "Win10 / Win11",
  port: "5003",
  links: {
    demo: "https://www.douyin.com/video/7635133651470086390",
    download: "https://www.alipan.com/s/M42fZnw2rgZ"
  }
}
  
];

// 将数据暴露给全局作用域，供 app.js 使用
window.PROJECT_DATA = projects;
