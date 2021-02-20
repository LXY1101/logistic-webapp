<template>
  <div>
    <top title="我的账号" :ShowBg="true"></top>
    <div style="margin-top: 1.3rem">
      <div class="act_portrait">
        <div class="img_div"></div>
      </div>

      <div>
        <mt-cell title="姓名">1</mt-cell>
        <mt-cell title="普通用户">2</mt-cell>
        <mt-cell title="用户名">3</mt-cell>
        <mt-cell title="手机号">4</mt-cell>
        <mt-cell title="更改头像" is-link></mt-cell>
        <mt-cell title="修改密码" is-link></mt-cell>
        <mt-cell title="跟换手机号" is-link></mt-cell>
      </div>
      <!-- 
      <div class="org_list">
        <div class="org_list_text">收藏的活动</div>
        <div class="org_list_right"></div>
      </div>
      <div class="org_list">
        <div class="org_list_text">已参加的活动</div>
        <div class="org_list_right"></div>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="less">
@import "~@css/my/account.less";
</style>

<script>
import top from "../../components/top.vue";
export default {
  name: "doctor_team",
  data() {
    return {};
  },
  components: {
    top,
  },

  computed: {},
  methods: {},
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f2f2f2");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  },
  created() {},
  mounted() {},
  updated() {},
};
</script>





