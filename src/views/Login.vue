<template>
  <div class="login">
    <div class="form_container">
      <el-form
        label-position="right"
        label-width="80px"
        :model="formUser"
        :rules="rules"
        ref="formData"
        class="loginForm"
      >
        <el-form-item style="margin-left: -40px">
          <span class="title">用户登录</span>
        </el-form-item>
        <div class="grid-content bg-purple-dark">
          <el-form-item label="账号" prop="pid">
            <el-input
              v-model="formUser.pid"
              placeholder="请输入学号/工号"
            ></el-input>
          </el-form-item>
        </div>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="formUser.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item label="身份" prop="identity">
          <el-radio-group v-model="formUser.identity">
            <el-radio label="teacher">教师</el-radio>
            <el-radio label="student">学生</el-radio>
            <el-radio label="admin">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="margin-left:-40px">
          <el-button
            @click="handleLogin('formData')"
            type="primary"
            class="submit_btn"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import md5 from "md5";
export default {
  name: "login",
  data() {
    return {
      formUser: {
        pid: "",
        password: "",
        identity: "teacher"
      },
      rules: {
        pid: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ],
        identity: [
          {
            required: true,
            message: "请选择身份",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    // 登录请求
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/Getlogin", {
              pid: this.formUser.pid,
              password: md5(this.formUser.password).substr(0, 16),
              identity: this.formUser.identity
            })
            .then(res => {
              if (!res.result || res.result !== "error") {
                const { token } = res;
                window.localStorage.setItem("token", token);

                this.$message({
                  message: "登录成功",
                  type: "success"
                });
                //   this.$router.push({ name: "index" });
              } else {
                this.$message({
                  message: "登录失败，请检查账号密码",
                  type: "warning"
                });
              }
            })
            .catch(error => {
              console.log(error);
              this.$message({
                message: "登录失败，请检查账号密码",
                type: "warning"
              });
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: #324152;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form_container {
  width: 420px;
  padding: 25px;
  border-radius: 5px;
  /* text-align: center; */
}
.form_container {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 30px;
  color: #fff;
}
.title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 18px;
  color: black;
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 0;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
</style>
