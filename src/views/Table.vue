<template>
  <el-table
    :data="
      tableData.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column
      :label="item.lable"
      :prop="item.prop"
      v-for="(item, index) in tableMap"
      :key="index"
    />
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <div style="display: flex; justify-content: space-between;">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
            style="width:200px"
          />
          <el-button size="mini" @click="handleAdd(scope)" type="success">
            新增
          </el-button>
        </div>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import ProjectDialog from "../components/dialog/index";
export default {
  data() {
    return {
      ProjectDialog,
      tableMap: null,
      getDataPath: null,
      addDataPath: null,
      deleteDataPath: null,
      editDataPath: null,
      input: "",
      tableData: [],
      search: ""
    };
  },
  created() {
    this.initDate();
  },
  watch: {
    "$route.fullPath": function() {
      this.initDate();
    }
  },
  methods: {
    initDate() {
      this.tableMap = this.$route.meta.tableMap;
      this.getDataPath = this.$route.meta.getDataPath;
      this.addDataPath = this.$route.meta.addDataPath;
      this.deleteDataPath = this.$route.meta.deleteDataPath;
      this.editDataPath = this.$route.meta.editDataPath;
      this.getData();
    },
    async getData() {
      const res = await this.$axios.post(this.getDataPath, {});
      this.tableData = res.data;
    },
    handleAdd(scope) {
      const { dialog } = this.$route.meta;
      dialog.type = "新增条目";
      dialog.addDataPath = this.$route.meta.addDataPath;
      dialog.editDataPath = this.$route.meta.editDataPath;
      this.ProjectDialog(dialog).then(() => {
        this.getData();
      });
      console.log(scope);
    },
    handleEdit(index, row) {
      console.log(index, row);
      const { dialog } = this.$route.meta;
      dialog.type = "编辑条目";
      dialog.addDataPath = this.$route.meta.addDataPath;
      dialog.editDataPath = this.$route.meta.editDataPath;
      dialog.dialogForm = row;
      this.ProjectDialog(dialog).then(() => {
        this.getData();
      });
    },
    async handleDelete(index, row) {
      console.log(index, row);
      let res = await this.$axios.post(this.deleteDataPath, row);
      this.getData();
      if (res.result === "ok") this.$message.success("删除成功");
    }
  }
};
</script>
<style scoped></style>
