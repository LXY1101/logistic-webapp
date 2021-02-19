<template>
  <div>
    <!-- <div class="search">
      <input type='text' class="ask_search_ipt" placeholder="请输入搜索内容.."/>
      <span class="search-img"><img src="@/assets/icon/sao.png"></span>
    </div> -->
    <top title='移动后勤'></top>
    <div class="nav">
      <!-- <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">活动</mt-tab-item>
        <mt-tab-item id="4">组织</mt-tab-item>
      </mt-navbar> -->
      <!-- tabcontainer -->
      <!-- <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <recommend style="overflow-y: scroll;"></recommend>
        </mt-tab-container-item>
        <mt-tab-container-item id="2"> -->
          <activity></activity>
        <!-- </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <organization></organization>
        </mt-tab-container-item>
      </mt-tab-container> -->
      <recommend></recommend>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "~@css/campus/index.less";
</style>
<script>
  import recommend from './component/recommend.vue'
  import activity from './component/activity.vue'
  import organization from './component/organization.vue'
  import top from '../../components/top.vue'

export default {
  name: "index",
  data() {
    return {
      selected: '1'
    };
  },
  components: {
    recommend,
    activity,
    organization,
    top
  },

  computed: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}
};
</script>
