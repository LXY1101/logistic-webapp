<template>
  <div>
    <!-- <div class="image">
         <img src="@/assets/images/3.jpg">
       </div> -->
    <div class="news">
      <div class="news_icon"></div>
      <div class="text">最新通知</div>
      <div class="more">更多></div>
    </div>
    <div class="activities_list">
      <div
        class="index_list"
        v-for="item in infornation"
        :key="item.id"
        @click="to_detail()"
      >
        <div class="index_list_img" ref="companyStyle">
          <img v-bind:src="item.coverPath" />
        </div>
        <div class="index_list_right">
          <div class="index_list_right_top" ref="tit">{{ item.infoTitle }}</div>
          <div class="index_list_right_center" ref="tit">
            {{ item.infoText }}
          </div>
          <div class="index_list_right_bottom" ref="tit">
            {{ item.creatorTime }}
          </div>
        </div>
        <div style="width: 100%; float: left; height: 20px"></div>
      </div>
      <div class="loading" v-if="loading" style="float: left">
        <span id="load-text">{{ loadText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../../../assets/css/campus/recommend.less";
</style>
<script>
export default {
  name: "recommend",
  data() {
    return {
      infornation: [
        {
          infoTitle: "参观惠州市档案馆和东江旅店",
          infoText:
            "为深入开展“不忘初心、牢记使命”主题教育，11月15日，我院党总支组织师生党员前往惠州市档案馆“不忘初心、牢记使命”主题教育馆和东江旅店开展“不忘初心、牢记使命”主题教育。",
          coverPath: require("@/assets/images/8.jpg"),
          creatorTime: "2019/11/19",
        },
        {
          infoTitle: "我院开展师范生普通话培训会",
          infoText:
            "为了加强我院师范专业学生的语言表达能力、提高学生的普通话水平。2019年10月17日晚7：30，数学教育俱乐部在田家炳大楼220课室举行普通话培训会，本次培训会邀请了文学与传媒学院的卜凌云老师主讲，18级、19级近200名师范专业学生参加。",
          coverPath: require("@/assets/images/9.jpg"),
          creatorTime: "2019/11/22",
        },
        {
          infoTitle: "2019年毕业季师生篮球友谊赛",
          infoText:
            "6月5日下午，我院在金山湖体育馆副馆举行2019年毕业季师生篮球友谊赛，以篮球之名，挥洒青春，让师生共燃拼搏精神。",
          coverPath: require("@/assets/images/6.jpg"),
          creatorTime: "2019/06/10",
        },
      ],
      loading: false,
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
