<template>
  <el-aside width="200px">
    <el-menu
      style="min-height: calc(100vh - 60px);"
      default-active="1"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link
        :to="item.to"
        v-for="(item, index) in dataSource"
        :key="index"
      >
        <el-menu-item :index="(index + 1).toString()">
          <i class="el-icon-menu"></i>
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
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>
<style scoped></style>
