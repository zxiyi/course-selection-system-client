<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="subjectName" label="学科"> </el-table-column>
    <el-table-column prop="teacherName" label="教师"> </el-table-column>
    <el-table-column prop="courseStart" label="上课时间"> </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          v-if="tableData[scope.$index].isChoose"
          @click="quitClass(scope.$index, tableData)"
          type="danger"
          size="small"
        >
          退课
        </el-button>
        <el-button
          v-else
          @click="chooseClass(scope.$index, tableData)"
          type="success"
          size="small"
        >
          选课
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axios.post("/api/student/getCourseList", {});
      this.tableData = res.data;
    },
    async chooseClass(index, rows) {
      const res = await this.$axios.post("/api/student/addElectiveItem", {
        courseId: rows[index].courseId,
        courseTime: rows[index].courseTime
      });
      if (res.result === "ok") {
        this.$message({
          message: "选课成功",
          type: "success"
        });
        this.getData();
      }
    },
    async quitClass(index, rows) {
      const res = await this.$axios.post("/api/student/deleteElectiveItem", {
        courseId: rows[index].courseId
      });
      if (res.result === "ok") {
        this.$message({
          message: "退课成功",
          type: "success"
        });
        this.getData();
      }
    }
  }
};
</script>
