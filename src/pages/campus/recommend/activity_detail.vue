<template>
  <div>
    <top title='活动详情' :ShowBg="true"></top>
    <div  v-model="form" class="mg">
      <div class="activity-title">{{form.infoTitle}}</div>
      <div class="activity-text">{{form.infoText}}</div>
      <div class="state">
        <span class="state-left">活动/计划:</span>
        <div class="loading">火热进行中</div>
      </div>
      <div class="activity-form">
        <p>事项</p>
        <ul>
          <li><label class="label">姓名：</label>
            <input class="input"/>
          </li>
          <li><label class="label">班级：</label>
            <input/>
          </li>
          <li><label class="label">学号：</label>
            <input/>
          </li>
        </ul>
        <div class="bt">参加报名</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  @import "~@css/campus/activity_detail.less";
</style>
<script>
  import top from '../../../components/top'
  export default {
    name: "activity_detail",
    data() {
      return {
        form:{
          infoTitle: "参观惠州市档案馆和东江旅店",
          infoText: "为深入开展“不忘初心、牢记使命”主题教育，11月15日，我院党总支组织师生党员前往惠州市档案馆“不忘初心、牢记使命”主题教育馆和东江旅店开展“不忘初心、牢记使命”主题教育。",
          creatorTime:"2019/11/19"
        }
      };
    },
    components: {
      top
    },

    computed: {},
    methods: {

    }
  };
</script>





