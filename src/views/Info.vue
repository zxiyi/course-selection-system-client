<template>
  <el-form
    :model="dialogForm"
    :rules="rules"
    ref="dialogForm"
    label-width="120px"
  >
    <template v-for="(item, index) in dialogMap">
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        :key="index"
        style="width:400px"
        v-if="item.type === 'input'"
      >
        <el-input
          v-model="dialogForm[item.prop]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        :key="index"
        v-if="item.type === 'select'"
      >
        <el-select
          v-model="dialogForm[item.prop]"
          :placeholder="item.placeholder"
        >
          <el-option
            v-for="t in item.optionList"
            :label="t.label"
            :value="t.value"
            :key="t.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import md5 from "md5";
import _cloneDeep from "lodash/cloneDeep";
export default {
  data() {
    return {
      getDataPath: "",
      editDataPath: "",
      dialogMap: [],
      dialogForm: {},
      rules: {},
      defaultPwd: null
    };
  },
  created() {
    this.getDataPath = this.$route.meta.getDataPath;
    this.editDataPath = this.$route.meta.editDataPath;
    this.dialogMap = this.$route.meta.dialog.dialogMap;
    this.dialogForm = this.$route.meta.dialog.dialogForm;
    this.rules = this.$route.meta.dialog.rules;
    this.initData();
  },
  methods: {
    async initData() {
      const res = await this.$axios.post(this.getDataPath, {});
      this.dialogForm = res.data;
      let pwdNotShowPath = this.$route.meta.title + "Pwd";
      this.defaultPwd = this.dialogForm[pwdNotShowPath];
      this.dialogForm[pwdNotShowPath] = null;
      this.dialogMap.forEach((item, index) => {
        if (item.type === "select" && item.optionList.length === 0) {
          this.addOptionList(index);
        }
      });
    },
    async addOptionList(index) {
      const res = await this.$axios.post(this.dialogMap[index].selectPath, {});
      this.dialogMap[index].optionList = res.data.map(item => {
        return {
          label: item[this.dialogMap[index].selectName + "Name"],
          value: item[this.dialogMap[index].selectName + "Id"]
        };
      });
    },
    handleSubmit() {
      this.$refs.dialogForm.validate(async valid => {
        if (valid) {
          let dialogData = _cloneDeep(this.dialogForm);
          if (dialogData.studentPwd === null) {
            dialogData.studentPwd = this.defaultPwd;
          } else {
            dialogData.studentPwd = md5(dialogData.studentPwd).substr(0, 16);
          }
          const res = await this.$axios.post(this.editDataPath, dialogData);
          if (res.result === "ok") {
            this.$message({
              message: "信息修改成功",
              type: "success"
            });
          }
        }
      });
    }
  }
};
</script>
