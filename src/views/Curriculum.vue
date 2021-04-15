<template>
  <div>
    <el-row
      :gutter="0"
      v-for="(itemRow, index) in tableDate"
      :key="index"
      type="flex"
    >
      <el-col :span="4" v-for="(itemCol, index) in itemRow" :key="index">
        <div class="grid-content bg-purple">
          {{ itemCol }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableDate: [
        ["", "星期一", "星期二", "星期三", "星期四", "星期五"],
        ["第一节", "", "", "", "", ""],
        ["第二节", "", "", "", "", ""],
        ["第三节", "", "", "", "", ""],
        ["第四节", "", "", "", "", ""]
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axios.post("/api/student/getCurriculum", {});
      res.data.forEach(itemData => {
        console.log(itemData);
        let courseTimeArr = itemData.courseTime.split("&");
        courseTimeArr.forEach(itemCourseTime => {
          this.tableDate[Number(itemCourseTime.split(",")[1])][
            Number(itemCourseTime.split(",")[0])
          ] = `${itemData.subjectName}\n${itemData.teacherName}`;
          this.tableDate = [...this.tableDate];
        });
      });
      //   this.tableData = res.data;
    }
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
  border-right: 1px solid #ebeef5;
}
.el-col {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  font-size: 14px;
  color: #606266;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
