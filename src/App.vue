<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1 class="welcome">
          恭喜你webpack4升级成功了！
        </h1>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
  },
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
    
  }
};
</script>
<style scoped rel="stylesheet/scss" lang="scss">
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .welcome{
    text-align: center;
    line-height: 200px;
    color: #67C23A;
  }
</style>

