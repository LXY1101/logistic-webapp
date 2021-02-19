<template>
  <div>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item
          ><img src="@/assets/images/activity1.jpg"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img src="@/assets/images/activity2.jpg"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img src="@/assets/images/activity3.jpg"
        /></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="news">
      <div class="city_icon"></div>
      <div class="text">城市服务</div>
      <!-- <div class="more">更多></div> -->
    </div>
    <div class="lists">
      <div class="lists_img">
        <div><img src="@/assets/images/1.png" /></div>
        <div><img src="@/assets/images/2.png" /></div>
        <div><img src="@/assets/images/3.png" /></div>
        <div><img src="@/assets/images/4.png" /></div>
      </div>
      <div class="lists_title">
        <div>后勤维修</div>
        <div>快速保修</div>
        <div>失物招领</div>
        <div>二手市场</div>
      </div>
    </div>

    <!-- <div style="height: 5px;"></div> -->
    <!-- <div class="screen">
      <div class="screen_left">我已报名</div>
      <div class="screen_right">筛选<span class="screen_icon"></span></div>
    </div>
    <div class="main_news">
      <div class="news_list" v-for="item in news" @click="to_detail()">
        <div class="news_list_img"><img v-bind:src="item.coverPath" /></div>
        <div class="index_list_time">{{ item.creatorTime }}</div>
        <div class="news_list_text">{{ item.infoText }}</div>
      </div>
    </div> -->
    <!-- <div class="news">
      <div class="news_icon"></div>
      <div class="text">最新通知</div>
      <div class="more">more></div>
    </div> -->
  </div>
</template>

<style scoped lang="less">
@import "../../../assets/css/campus/activity.less";
</style>
<script>
export default {
  name: "activity",
  data() {
    return {
      news: [
        {
          coverPath: require("@/assets/images/n1.jpg"),
          creatorTime: "2019/10/2-2019/10/6",
          infoText: "高校网球联谊赛",
        },
      ],
    };
  },
  methods: {
    to_detail() {
      this.$router.push({ path: "/activity_detail" });
    },
  },
};
</script>

<style scoped>
</style>
