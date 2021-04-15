const teacherInfo = {
  title: "teacher",
  getDataPath: "/api/teacher/getTeacherInfo",
  editDataPath: "/api/teacher/editTeacherInfo",
  dialog: {
    dialogMap: [
      {
        label: "教师id",
        prop: "teacherId",
        placeholder: "请填写教师id",
        disabled: true,
        type: "input"
      },
      {
        label: "登陆密码",
        prop: "teacherPwd",
        placeholder: "重制登陆密码可不填",
        disabled: false,
        type: "input"
      },
      {
        label: "教师名称",
        prop: "teacherName",
        placeholder: "请填写教师名称",
        disabled: false,
        type: "input"
      },
      {
        label: "教师性别",
        prop: "teacherGender",
        placeholder: "请选择教师性别",
        disabled: false,
        type: "select",
        optionList: [
          {
            label: "男",
            value: "男"
          },
          {
            label: "女",
            value: "女"
          }
        ]
      }
    ],
    dialogForm: {
      teacherId: null,
      teacherPwd: null,
      teacherName: null,
      teacherGender: null
    },
    rules: {
      teacherName: {
        required: true,
        message: "请输入教师名称",
        trigger: "blur"
      },
      teacherGender: {
        required: true,
        message: "请选择性别",
        trigger: "blur"
      }
    }
  }
};
export default teacherInfo;
