const teacher = {
  getDataPath: "/api/admin/getTeacherList",
  addDataPath: "/api/admin/addTeacherItem",
  editDataPath: "/api/admin/editTeacherItem",
  deleteDataPath: "/api/admin/deleteTeacherItem",
  tableMap: [
    {
      lable: "教师id",
      prop: "teacherId"
    },
    {
      lable: "教师名称",
      prop: "teacherName"
    },
    {
      lable: "教师性别",
      prop: "teacherGender"
    }
  ],
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
      teacherName: null
    },
    rules: {
      teacherName: {
        required: true,
        message: "请输入学院名称",
        trigger: "blur"
      }
    }
  }
};
export default teacher;
