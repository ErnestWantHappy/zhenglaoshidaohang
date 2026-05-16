// 此文件用于配置网站上展示的所有项目。
// 每次修改保存后，刷新网页即可看到效果。
// shareStatus 支持 public（正常共享）和 private（私人工具，显示暂不共享弹窗）。

const projects = [
  {
    id: 1,
    title: "课堂随机点名系统",
    desc: "双击 EXE 即可启动，支持导入名单、随机点名、已抽中记录和抽选速度调整",
    shareStatus: "public",
    categories: ["班主任工具", "课堂工具"],
    target: "班主任、任课教师",
    subject: "通用",
    environment: "Win10 / Win11",
    port: "5002",
    links: {
      demo: "https://www.douyin.com/video/7631928428840684840",
      download: "https://www.alipan.com/s/F1SXTVpMHbQ"
    }
  },
  {
    id: 2,
    title: "小型网络搭建仿真网页",
    desc: "支持拖动设备搭建网络，网线、光纤、无线连接可切换，并用不同线条区分",
    shareStatus: "public",
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
    desc: "一键双击 bat 即可启动，支持班级电子宠物养成、加分扣分、奖励小铺和班级设置",
    shareStatus: "public",
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
  title: "错题刷题系统 2.0",
  desc: "刷题平台 2.0 版本，双击 EXE 即可启动。老师可上传 Excel 题库，学生在线刷题，错题自动进入错题本，后台可查看成绩统计并导出 Excel。本次升级新增多选题、题库限时设置、题库删除、成绩查询更多数据统计、未订正错题统计等功能，更适合课堂练习和课后巩固使用",
  shareStatus: "public",
  categories: ["课堂工具", "刷题工具", "学业评价"],
  target: "任课教师、信息科技教师、班主任",
  subject: "通用",
  environment: "Win10 / Win11",
  port: "5003",
  links: {
    demo: "https://www.douyin.com/video/7640308425280576390",
    download: "https://pan.quark.cn/s/e58b78d0f1ec"
  }
},
  {
    id: 5,
    title: "考试座位贴生成工具",
    desc: "导入 Excel 学生信息后，自动生成考试座位贴预览，并支持一键导出 Word 打印",
    shareStatus: "public",
    categories: ["班主任工具", "考试工具", "办公工具"],
    target: "班主任、教务老师、任课教师",
    subject: "通用",
    environment: "Win10 / Win11",
    port: "无需端口",
    links: {
      demo: "https://www.douyin.com/video/7636774379644357922",
      download: "https://1831383013.share.123865.com/123pan/uwa6jv-kXM13"
    }
  },
  {
    id: 6,
    title: "成绩分析系统",
    desc: "导入 Excel 成绩后，自动完成排名、班级统计、趋势分析与报表导出，适合教师本地快速分析考试数据",
    shareStatus: "public",
    categories: ["成绩分析", "教师工具", "办公工具"],
    target: "班主任、任课教师、教务老师",
    subject: "通用",
    environment: "Win10 / Win11",
    port: "5004",
    links: {
      demo: "https://www.douyin.com/video/7637849054571023650",
      download: "https://1831383013.share.123865.com/123pan/uwa6jv-zzS13"
    }
  },
  {
  id: 7,
  title: "AI 学业评价系统",
  desc: "教师输入教学内容后，AI 自动生成测评题，学生在线答题并获得错题反馈，教师端可查看班级学情报告和 AI 教学建议，适合 AI 教学案例申报与学情评价展示",
  shareStatus: "private",
  categories: ["AI工具", "学业评价", "学情分析", "教师工具"],
  target: "任课教师、教研组长、信息科技教师、需要申报 AI 教学案例的老师",
  subject: "通用",
  environment: "Win10 / Win11 / 服务器部署",
  port: "3015 / 3016",
  links: {
    demo: "https://www.douyin.com/video/7638626050859224360",
    download: ""
  }
},
  {
  id: 8,
  title: "学生免登录音乐学习工具",
  desc: "学生无需登录即可使用，支持单音校准、音阶热身和K歌实战三阶段练习，可实时反馈音高，适合音乐课、合唱训练和课后自主练习",
  shareStatus: "public",
  categories: ["音乐课工具", "学生练习", "课堂工具"],
  target: "音乐老师、合唱社团老师、需要音准练习的学生",
  subject: "音乐",
  environment: "Win10 / Win11",
  port: "5005",
  links: {
    demo: "https://www.douyin.com/video/7639333327086892662",
    download: "https://pan.quark.cn/s/072499fe829b"
  }
}

];

// 将数据暴露给全局作用域，供 app.js 使用
window.PROJECT_DATA = projects;
