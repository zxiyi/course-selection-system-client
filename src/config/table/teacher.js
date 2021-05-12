const teacher = {
  title: "teacher",
  getDataPath: "/api/admin/getTeacherList",
  addDataPath: "/api/admin/addTeacherItem",
  editDataPath: "/api/admin/editTeacherItem",
  deleteDataPath: "/api/admin/deleteTeacherItem",
  tableMap: [
    {
      lable: "教师工号",
      prop: "teacherId"
    },
    {
      lable: "教师名称",
      prop: "teacherName"
    },
    {
      lable: "教师性别",
      prop: "teacherGender"
    },
    {
      lable: "教师学位",
      prop: "teacherDegree"
    },
    {
      lable: "教师简介",
      prop: "teacherIntroduction"
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
      },
      {
        label: "教师学位",
        prop: "teacherDegree",
        placeholder: "请填写教师学位",
        disabled: false,
        type: "input"
      },
      {
        label: "教师简介",
        prop: "teacherIntroduction",
        placeholder: "请填写教师简介",
        disabled: false,
        type: "input"
      }
    ],
    dialogForm: {
      teacherId: null,
      teacherName: null,
      teacherGender: null,
      teacherDegree: null,
      teacherIntroduction: null
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
      },
      teacherDegree: {
        required: true,
        message: "请输入教师学位",
        trigger: "blur"
      },
      teacherIntroduction: {
        required: true,
        message: "请输入教师简介",
        trigger: "blur"
      }
    }
  }
};
export default teacher;
