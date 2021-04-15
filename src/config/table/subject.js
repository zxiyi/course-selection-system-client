const subject = {
  title: "subject",
  getDataPath: "/api/admin/getSubjectList",
  addDataPath: "/api/admin/addSubjectItem",
  editDataPath: "/api/admin/editSubjectItem",
  deleteDataPath: "/api/admin/deleteSubjectItem",
  tableMap: [
    {
      lable: "学科id",
      prop: "subjectId"
    },
    {
      lable: "学科名称",
      prop: "subjectName"
    }
  ],
  dialog: {
    dialogMap: [
      {
        label: "学科id",
        prop: "subjectId",
        placeholder: "请填写学科id",
        disabled: true,
        type: "input"
      },
      {
        label: "学科名称",
        prop: "subjectName",
        placeholder: "请填写学科名称",
        disabled: false,
        type: "input"
      }
    ],
    dialogForm: {
      subjectId: null,
      subjectName: null
    },
    rules: {
      subjectName: {
        required: true,
        message: "请输入学科名称",
        trigger: "blur"
      }
    }
  }
};
export default subject;
