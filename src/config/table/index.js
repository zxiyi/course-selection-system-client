const student = [
  {
    lable: "学号",
    prop: "studentId"
  }
];

const college = {
  getDataPath: "/api/admin/getCollegeList",
  addDataPath: "/api/admin/addCollegeItem",
  editDataPath: "/api/admin/editCollegeItem",
  deleteDataPath: "/api/admin/deleteCollegeItem",
  tableMap: [
    {
      lable: "学院id",
      prop: "collegeId"
    },
    {
      lable: "学院名称",
      prop: "collegeName"
    }
  ],
  dialog: {
    dialogMap: [
      {
        label: "学院id",
        prop: "collegeId",
        placeholder: "请填写学院id",
        disabled: true,
        type: "input"
      },
      {
        label: "学院名称",
        prop: "collegeName",
        placeholder: "请填写学院名称",
        disabled: false,
        type: "input"
      }
    ],
    dialogForm: {
      collegeId: null,
      collegeName: null
    },
    rules: {
      collegeName: {
        required: true,
        message: "请输入项目名称",
        trigger: "blur"
      }
    }
  }
};

export { student, college };
