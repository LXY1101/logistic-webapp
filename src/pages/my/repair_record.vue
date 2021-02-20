<template>
  <div>
    <top title="设置与帮助" :ShowBg="true"></top>
    <div class="lists">
      <div class="lists_img">
        <div @click="toLists"><img src="@/assets/icon/01.png" /></div>
        <div @click="toLists"><img src="@/assets/icon/02.png" /></div>
        <div @click="toLists"><img src="@/assets/icon/03.png" /></div>
        <div @click="toLists"><img src="@/assets/icon/04.png" /></div>
      </div>
      <div class="lists_title">
        <div>已完工</div>
        <div>未接受</div>
        <div>待完工</div>
        <div>疑难</div>
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
    toLists() {
      this.$router.push({ path: "/repair_lists" });
    },
  },
  mounted() {
  
  },
  // beforeDestroy() {
  //     document.querySelector("body").setAttribute("style", "");
  // },
};
</script>





