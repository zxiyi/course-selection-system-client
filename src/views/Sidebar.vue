<template>
  <el-aside width="200px">
    <el-menu
      style="min-height: calc(100vh - 60px);"
      :default-active="defaultActive"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="local"
    >
      <router-link
        :to="item.to"
        v-for="(item, index) in dataSource"
        :key="index"
      >
        <el-menu-item :index="(index + 1).toString()">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  components: {},
  props: {
    dataSource: null
  },
  data() {
    return {};
  },
  computed: {
    defaultActive() {
      return localStorage.defaultActive ? localStorage.defaultActive : "1";
    }
  },
  watch: {},
  created() {},
  methods: {
    local(index) {
      window.localStorage.setItem("defaultActive", index);
    }
  }
};
</script>
<style scoped></style>
