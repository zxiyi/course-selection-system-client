<template>
  <div class="by-popup__wrapper">
    <div class="by-popup dialog">
      <div class="header">
        <span class="title">
          {{ type }}
        </span>
        <i
          aria-label="Close"
          @click="close('close')"
          class="close-icon el-icon el-icon-close"
        ></i>
      </div>

      <div class="body">
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
              v-if="item.type === 'time'"
            >
              <el-cascader
                v-model="dialogForm[item.prop]"
                :options="item.optionList"
                :props="{ multiple: true }"
                clearable
              ></el-cascader>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from "./builder";

export default {
  name: "page-dialog",
  mixins: [mixin],
  data() {
    return {
      type: "新增条目",
      dialogMap: [],
      addDataPath: "",
      editDataPath: "",
      dialogForm: {},
      rules: {}
    };
  },
  watch: {},
  async created() {
    this.dialogMap.forEach((item, index) => {
      if (item.type === "select" && item.optionList.length === 0) {
        this.addOptionList(index);
      }
    });
  },
  methods: {
    async addOptionList(index) {
      const res = await this.$axios.post(this.dialogMap[index].selectPath, {});
      this.dialogMap[index].optionList = res.data.map(item => {
        return {
          label: item[this.dialogMap[index].selectName + "Name"],
          value: item[this.dialogMap[index].selectName + "Id"]
        };
      });
    },
    async add() {
      let res = await this.$axios.post(this.addDataPath, this.dialogForm);
      this.close("confirm");
      if (res.result === "ok") this.$message.success("提交成功");
    },
    async updata() {
      let res = await this.$axios.post(this.editDataPath, this.dialogForm);
      this.close("confirm");
      if (res.result === "ok") this.$message.success("提交成功");
    },
    handleSubmit() {
      this.$refs.dialogForm.validate(async valid => {
        if (valid) {
          if (this.type === "新增条目") this.add();
          if (this.type === "编辑条目") this.updata();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  width: 40%;
  padding-bottom: 20px;
}

.by-popup__wrapper {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
}

.by-popup__wrapper::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.by-popup {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin-bottom: 50px;
  padding: 0 20px;
}
.header {
  text-align: left;
  padding: 30px 0 20px 0;
  font-size: 20px;
}
.body {
  font-weight: bold;
}
.title {
  font-weight: bold;
}
.close-icon {
  position: absolute;
  right: 35px;
  cursor: pointer;
}
</style>
