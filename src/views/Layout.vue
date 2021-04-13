<template>
  <el-container style="min-height: 100vh;">
    <el-header class="header">
      <span class="title">选课管理系统</span>
      <el-dropdown class="username">
        <span class="el-dropdown-link">
          {{ username }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <sidebar :dataSource="sider" />
      <el-main style="height: calc(100vh - 60px); overflow: auto;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import { admin, teacher, student } from "@/config/sidebar";
export default {
  components: { Sidebar },
  data() {
    return {
      username: "",
      sider: null,
      getNamePath: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    switch (localStorage.identity) {
      case "admin":
        this.getNamePath = "/api/admin/getname";
        this.sider = admin;
        break;
      case "teacher":
        this.getNamePath = "/api/teacher/getname";
        this.sider = teacher;
        break;
      case "student":
        this.getNamePath = "/api/student/getname";
        this.sider = student;
        break;
      default:
        this.sider = false;
    }
    if (!this.sider) {
      this.$message.error("登录已过期，请重新登录！");
      localStorage.clear();
      this.$router.push("/login");
    }
    this.getName();
  },
  methods: {
    async getName() {
      const res = await this.$axios.post(this.getNamePath, {});
      this.username = res.data;
    },
    logout() {
      localStorage.clear();
      // 跳转到登录页面
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  background-color: #304156;
  color: #fff;
  width: 100%;
}
.title {
  font-weight: 200;
  font-size: 30px;
}
.username {
  float: right;
  color: #fff;
  margin-right: 30px;
}
</style>
