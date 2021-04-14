const studentInfo = {
  title: "student",
  getDataPath: "/api/student/getStudentInfo",
  editDataPath: "/api/student/editStudentInfo",
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
        label: "登陆密码",
        prop: "studentPwd",
        placeholder: "重制登陆密码可不填",
        disabled: false,
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
        selectPath: "/api/student/getDisciplineList",
        selectName: "discipline",
        optionList: []
      }
    ],
    dialogForm: {
      studentId: null,
      studentPwd: null,
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
export default studentInfo;
