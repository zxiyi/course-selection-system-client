const course = {
  getDataPath: "/api/admin/getCourseList",
  addDataPath: "/api/admin/addCourseItem",
  editDataPath: "/api/admin/editCourseItem",
  deleteDataPath: "/api/admin/deleteCourseItem",
  tableMap: [
    {
      lable: "课程id",
      prop: "courseId"
    },
    {
      lable: "学科名称",
      prop: "subjectName"
    },
    {
      lable: "教师",
      prop: "teacherName"
    },
    {
      lable: "所属系",
      prop: "disciplineName"
    },
    {
      lable: "所属届",
      prop: "courseYear"
    },
    {
      lable: "上课时间",
      prop: "courseStart"
    }
  ],
  dialog: {
    dialogMap: [
      {
        label: "课程id",
        prop: "courseId",
        placeholder: "请填写课程id",
        disabled: true,
        type: "input"
      },
      {
        label: "学科",
        prop: "subjectId",
        placeholder: "请选择学科",
        disabled: false,
        type: "select",
        selectPath: "/api/admin/getSubjectList",
        selectName: "subject",
        optionList: []
      },
      {
        label: "教师",
        prop: "teacherId",
        placeholder: "请选择教师",
        disabled: false,
        type: "select",
        selectPath: "/api/admin/getTeacherList",
        selectName: "teacher",
        optionList: []
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
      },
      {
        label: "届",
        prop: "courseYear",
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
        label: "上课时间",
        prop: "courseTime",
        placeholder: "请选择上课时间",
        disabled: false,
        type: "time",
        optionList: [
          {
            label: "星期一",
            value: "1",
            children: [
              { label: "第一节", value: "1,1" },
              { label: "第二节", value: "1,2" },
              { label: "第三节", value: "1,3" },
              { label: "第四节", value: "1,4" }
            ]
          },
          {
            label: "星期二",
            value: "2",
            children: [
              { label: "第一节", value: "2,1" },
              { label: "第二节", value: "2,2" },
              { label: "第三节", value: "2,3" },
              { label: "第四节", value: "2,4" }
            ]
          },
          {
            label: "星期三",
            value: "3",
            children: [
              { label: "第一节", value: "3,1" },
              { label: "第二节", value: "3,2" },
              { label: "第三节", value: "3,3" },
              { label: "第四节", value: "3,4" }
            ]
          },
          {
            label: "星期四",
            value: "4",
            children: [
              { label: "第一节", value: "4,1" },
              { label: "第二节", value: "4,2" },
              { label: "第三节", value: "4,3" },
              { label: "第四节", value: "4,4" }
            ]
          },
          {
            label: "星期五",
            value: "5",
            children: [
              { label: "第一节", value: "5,1" },
              { label: "第二节", value: "5,2" },
              { label: "第三节", value: "5,3" },
              { label: "第四节", value: "5,4" }
            ]
          }
        ]
      }
    ],
    dialogForm: {
      courseId: null,
      subjectId: null,
      teacherId: null,
      disciplineId: null,
      courseYear: null,
      courseTime: null
    },
    rules: {
      subjectId: {
        required: true,
        message: "请选择学科",
        trigger: "blur"
      },
      teacherId: {
        required: true,
        message: "请选择老师",
        trigger: "blur"
      },
      disciplineId: {
        required: true,
        message: "请选择所在系",
        trigger: "blur"
      },
      courseYear: {
        required: true,
        message: "请选择届",
        trigger: "blur"
      },
      courseTime: {
        required: true,
        message: "请选择上课时间",
        trigger: "blur"
      }
    }
  }
};
export default course;
