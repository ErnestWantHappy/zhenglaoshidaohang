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
},
  {
  id: 9,
  title: "AI 音乐学习工具 2.0",
  desc: "AI 音乐学习工具 2.0 版本，本次升级重点支持 K歌实战自定义歌曲，老师可上传自己的歌曲、示范音频和伴奏，录入歌词、唱名和音高；学生打开专属链接即可练习。新版还支持试唱、学生创作、练习数据与成绩查看等功能。通用体验版继续免费，自定义歌曲云端账号版低价内测开放,打开网址即可使用，手机和电脑浏览器都能访问",
  shareStatus: "public",
  categories: ["音乐课工具", "AI工具", "学生练习", "课堂工具"],
  target: "音乐老师、合唱社团老师、需要音准练习和自定义歌曲练习的学生",
  subject: "音乐",
  environment: "手机 / 电脑浏览器",
  port: "无需端口",
  links: {
    demo: "https://www.douyin.com/video/7641562554409993974",
    download: "https://music.teacherlin.store/"
  }
},
  {
  id: 10,
  title: "AI 智能朗读评价系统",
  desc: "AI 智能朗读评价系统，打开网址即可使用，手机和电脑浏览器都能访问。老师可创建朗读任务，输入年级、学科和朗读文本，系统自动生成朗读设计；学生提交朗读后，AI 会从字音准确度、朗读流利度、朗读完整度、语气语调、情感表达等维度进行评价，并生成个性化朗读反馈报告，适合语文朗读、英语朗读和课后朗读练习",
  shareStatus: "public",
  categories: ["朗读评价", "AI工具", "学生练习", "课堂工具"],
  target: "语文老师、英语老师、需要朗读练习和朗读评价的学生",
  subject: "语文 / 英语",
  environment: "手机 / 电脑浏览器",
  port: "无需端口",
  links: {
    demo: "https://www.douyin.com/video/7643366125628136107?previous_page=app_code_link",
    download: "https://readfensi.teacherlin.store/"
  }
},
  {
  id: 11,
  title: "英语单词节奏跟读工具",
  desc: "适合小学低年级早读、课前三分钟和课堂热身使用。老师可以手动添加单词，也可以导入 Excel 单词表；进入大屏模式后，单词会按节奏一个个弹出，系统自动朗读英文并显示中文释义，学生跟着节拍一起读。支持节奏设置、朗读次数、停留时间、单词特效和示例词库，打开后即可本地使用",
  shareStatus: "public",
  categories: ["英语课工具", "单词跟读", "课堂工具", "早读工具"],
  target: "小学英语老师、低年级英语课堂、需要单词跟读和早读热身的学生",
  subject: "英语",
  environment: "Win10 / Win11",
  port: "无需端口",
  links: {
    demo: "https://www.douyin.com/video/7645548117182365802",
    download: "https://pan.quark.cn/s/96f797e3ba09"
  }
},
  {
  id: 12,
  title: "打字闯关练习工具",
  desc: "适合信息科技打字课、拼音练习和英语单词复习使用。学生可以从左右手指法开始练，看着虚拟键盘完成按键训练；后续支持拼音、词语和课文跟打。还内置单词击落小游戏，单词从屏幕上掉落，学生快速输入即可击落，让打字练习更像闯关游戏",
  shareStatus: "public",
  categories: ["打字练习", "信息科技", "课堂工具", "学生练习"],
  target: "信息科技老师、小学语文老师、英语老师、需要打字练习和键盘指法训练的学生",
  subject: "信息科技 / 语文 / 英语",
  environment: "Win10 / Win11",
  port: "无需端口",
  links: {
    demo: "https://www.douyin.com/video/7646716565560434246?previous_page=app_code_link",
    download: "https://pan.quark.cn/s/8974e2d89083"
  }
}

];

// 将数据暴露给全局作用域，供 app.js 使用
window.PROJECT_DATA = projects;
