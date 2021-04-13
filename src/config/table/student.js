const subject = {
  getDataPath: "/api/admin/getStudentList",
  addDataPath: "/api/admin/addStudentItem",
  editDataPath: "/api/admin/editStudentItem",
  deleteDataPath: "/api/admin/deleteStudentItem",
  tableMap: [
    {
      lable: "学生id",
      prop: "studentId"
    },
    {
      lable: "学生名称",
      prop: "studentName"
    },
    {
      lable: "所属系",
      prop: "disciplineName"
    },
    {
      lable: "学生性别",
      prop: "studentGender"
    },
    {
      lable: "届",
      prop: "studentYear"
    }
  ],
  dialog: {
    dialogMap: [
      {
        label: "学生id",
        prop: "studentId",
        placeholder: "请填写学生id",
        disabled: true,
        type: "input"
      },
      {
        label: "学生名称",
        prop: "studentName",
        placeholder: "请填写学生名称",
        disabled: false,
        type: "input"
      },
      {
        label: "学生性别",
        prop: "studentGender",
        placeholder: "请选择学生性别",
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
        label: "届",
        prop: "studentYear",
        placeholder: "请选择届",
        disabled: false,
        type: "select",
        optionList: [
          {
            label: "2017届",
            value: "2017"
          },
          {
            label: "2018届",
            value: "2018"
          },
          {
            label: "2019届",
            value: "2019"
          },
          {
            label: "2020届",
            value: "2020"
          },
          {
            label: "2021届",
            value: "2021"
          }
        ]
      },
      {
        label: "所属系名称",
        prop: "disciplineId",
        placeholder: "请选择所属学院",
        disabled: false,
        type: "select",
        selectPath: "/api/admin/getDisciplineList",
        selectName: "discipline",
        optionList: []
      }
    ],
    dialogForm: {
      studentId: null,
      studentName: null,
      disciplineId: null,
      studentGender: null,
      studentYear: null
    },
    rules: {
      studentName: {
        required: true,
        message: "请输入学生名称",
        trigger: "blur"
      },
      disciplineId: {
        required: true,
        message: "请选择所在系",
        trigger: "blur"
      },
      studentGender: {
        required: true,
        message: "请选择性别",
        trigger: "blur"
      },
      studentYear: {
        required: true,
        message: "请选择届",
        trigger: "blur"
      }
    }
  }
};
export default subject;
