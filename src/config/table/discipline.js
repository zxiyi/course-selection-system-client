const discipline = {
  getDataPath: "/api/admin/getDiSciplineList",
  addDataPath: "/api/admin/addDiSciplineItem",
  editDataPath: "/api/admin/editDiSciplineItem",
  deleteDataPath: "/api/admin/deleteDiSciplineItem",
  tableMap: [
    {
      lable: "系id",
      prop: "disciplineId"
    },
    {
      lable: "系名称",
      prop: "disciplineName"
    },
    {
      lable: "所属学院",
      prop: "collegeName"
    }
  ],
  dialog: {
    dialogMap: [
      {
        label: "系id",
        prop: "disciplineId",
        placeholder: "请填写系id",
        disabled: true,
        type: "input"
      },
      {
        label: "系名称",
        prop: "disciplineName",
        placeholder: "请填写系名称",
        disabled: false,
        type: "input"
      },
      {
        label: "所属学院名称",
        prop: "collegeId",
        placeholder: "请选择所属学院",
        disabled: false,
        type: "select",
        selectPath: "/api/admin/getCollegeList",
        selectName: "college",
        optionList: []
      }
    ],
    dialogForm: {
      disciplineId: null,
      disciplineName: null,
      collegeId: null
    },
    rules: {
      disciplineName: {
        required: true,
        message: "请输入系名称",
        trigger: "blur"
      },
      collegeId: {
        required: true,
        message: "请选择所属学院",
        trigger: "blur"
      }
    }
  }
};
export default discipline;
