<template>
  <div>
    <top title="我的失物" :ShowBg="true"></top>
    <div class="lists_detail">
      <div class="d_lists">
        <span @click="toDetail">
          <mt-cell title="标题文字" label="描述信息" class="d_content"
            >134234252</mt-cell
          >
        </span>
        <span @click="toDetail">
          <mt-cell title="标题文字" label="描述信息" class="d_content"
            >134234252</mt-cell
          >
        </span>
        <span @click="toDetail">
          <mt-cell title="标题文字" label="描述信息" class="d_content"
            >134234252</mt-cell
          >
        </span>
        <span @click="toDetail">
          <mt-cell title="标题文字" label="描述信息" class="d_content"
            >134234252</mt-cell
          >
        </span>
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
      console.log("11");
      this.$router.push({ path: "/repair_detail" });
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





