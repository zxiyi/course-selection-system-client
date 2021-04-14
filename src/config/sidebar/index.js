const admin = [
  { to: "studentInfo", name: "学生管理", icon: "el-icon-user" },
  { to: "teacherInfo", name: "教师管理", icon: "el-icon-s-custom" },
  { to: "collegeInfo", name: "学院管理", icon: "el-icon-office-building" },
  { to: "disciplineInfo", name: "系管理", icon: "el-icon-s-opportunity" },
  { to: "subjectInfo", name: "学科管理", icon: "el-icon-data-line" },
  { to: "courseInfo", name: "课程管理", icon: "el-icon-date" }
];

const teacher = [
  { to: "courseInfo", name: "选课", icon: "el-icon-date" },
  { to: "courseInfo", name: "选课", icon: "el-icon-date" }
];

const student = [
  { to: "student/courseInfo", name: "选课", icon: "el-icon-date" },
  { to: "student/curriculum", name: "课表", icon: "el-icon-data-analysis" },
  { to: "student/information", name: "个人信息", icon: "el-icon-user" }
];

export { admin, teacher, student };
