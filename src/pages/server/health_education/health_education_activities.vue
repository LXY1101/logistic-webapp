<template>
  <div>
    <top title='健康教育活动' :ShowBg="true"></top>
    <div class="activities_list">
      <div class="activities_list_item">
        活动主题：{{Activity.activityTheme}}
      </div>
      <div class="activities_list_item">
        <div class="activities_list_item_left">活动形式：{{Activity.activityForm}}</div>
        <div class="activities_list_item_right">活动地点：{{Activity.activityPlace}}</div>
      </div>
      <div class="activities_list_item">
        活动日期：{{Activity.activityTime}}
      </div>
      <div class="activities_list_item">
        <div class="activities_list_item_left">组织者：{{Activity.organize}}</div>
        <div class="activities_list_item_right">参加对象：{{Activity.activityObject}}</div>
      </div>
      <div class="activities_list_item">健康教育资料发放种类：{{Activity.materialsSort}}</div>
      <div class="activities_list_item">活动内容：</div>
      <div class="activities_list_item">
        <div class="activities_list_item_left_activityAnnex">{{Activity.fileName}}</div>
        <div class="activities_list_item_button">
          <a class="activities_list_item_right_button" href='{{}}'>浏览</a>
        </div>
      </div>
    </div>
  </div> 
</template>

<style scoped lang="less">
  @import "~@css/server/health_education/health_education_materials.less";
</style>
<script>
  import top from '../../../components/top.vue'
  import {EducationActivityApiModules} from '@/api'
  export default {
   name: 'health_education_activities',
   data() {
     return {
       Activity:{}
     }
   },
   components:{
    top
   },
  methods: {
      ActivityDetail(params) {
          EducationActivityApiModules.getEduActivityDetail(params).then(res => {
                this.Activity = res.data;
                }).catch(error => {
          });
      }
  },
  created(){
      let id = this.$route.query.id;
      let params = {id:id};
      this.ActivityDetail(params);          
  },
  mounted() {

  }
 }
</script>