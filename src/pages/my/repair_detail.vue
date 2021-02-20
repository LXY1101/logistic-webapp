<template>
  <div>
    <top title="我的维修" :ShowBg="true"></top>
    <div class="lists_detail">
      <div class="d_info">
        <div class="left">保修信息</div>
        <div class="right">订单号 111132421</div>
      </div>
      <div class="d_info_lists">
        <mt-cell title="标题文字">1</mt-cell>
        <mt-cell title="标题文字">1</mt-cell>
        <mt-cell title="标题文字">1</mt-cell>
        <mt-cell title="标题文字">1</mt-cell>
        <mt-cell title="标题文字">1</mt-cell>
      </div>
      <div class="d_info">
        维修进度
      </div>
      <div class="d_info_lists">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "~@css/my/repair_record.less";
</style>
<script>
import top from "../../components/top.vue";
export default {
  name: "set",
  data() {
    return {};
  },
  components: {
    top,
  },

  computed: {},
  methods: {
    toDetail() {
        console.log('11')
      this.$router.push({ path: "/login" });
    },
  },

  mounted() {
    document.querySelector("body").setAttribute("style", "background:#f2f2f2");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  },
};
</script>





