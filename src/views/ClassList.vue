<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="courseYear" label="届"> </el-table-column>
    <el-table-column prop="disciplineName" label="系"> </el-table-column>
    <el-table-column prop="subjectName" label="学科"> </el-table-column>
    <el-table-column prop="studentName" label="学生"> </el-table-column>
    <el-table-column prop="electiveGrades" label="分数">
      <template slot-scope="scope">
        <el-input-number
          v-if="tableData[scope.$index].changeFlag"
          v-model="tableData[scope.$index].electiveGrades"
          size="small"
          controls-position="right"
          :min="0"
          :max="100"
        ></el-input-number>
        <div v-else>
          {{
            tableData[scope.$index].electiveGrades === null
              ? "您还未输入成绩"
              : tableData[scope.$index].electiveGrades
          }}
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="changeGrades(scope.$index, tableData)"
          type="text"
          size="small"
        >
          {{ tableData[scope.$index].changeFlag ? "提交" : "修改成绩" }}
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
      const res = await this.$axios.post("/api/teacher/getCourseList", {});
      this.tableData = res.data.map(item => {
        item.changeFlag = false;
        return item;
      });
    },
    async changeGrades(index, rows) {
      console.log(rows);
      if (this.tableData[index].changeFlag) {
        const res = await this.$axios.post(
          "/api/teacher/changeGrades",
          this.tableData[index]
        );
        if (res.result === "ok") {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.getData();
        }
      } else {
        this.tableData[index].changeFlag = !this.tableData[index].changeFlag;
      }
    }
  }
};
</script>
