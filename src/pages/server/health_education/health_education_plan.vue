<template>
  <div>
    <top title='健康教育材料' :ShowBg="true"></top>
    <div class="plan_list">
      <div class="plan_list_item">
        专题名称：{{Plan.subjectName}}
      </div>
      <div class="plan_list_item">
        <div class="plan_list_item_left">健教形式：{{Plan.educationForm}}</div>
        <div class="plan_list_item_right">健教地点：{{Plan.educationPlace}}</div>
      </div>
      <div class="plan_list_item">
        <div class="plan_list_item_left">健教对象：{{Plan.educationObject}}</div>
        <div class="plan_list_item_right">预计执行日期：{{Plan.expectExecutionItem}}</div>
      </div>
      <div class="plan_list_item">
        健教内容：{{Plan.educationContent}}
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @import "~@css/server/health_education/health_education_plan.less";
</style>


<script>
import top from '../../../components/top'
import {EducationPlanApiModules} from '@/api'
export default {
  name:'health_education_plan',
   data() {
      return {
        Plan:{}
     }
   },
  components:{
    top
  },
  methods: {
      PlanDetail(params) {
          EducationPlanApiModules.getEducationPlanDetail(params).then(res => {
                this.Plan = res.data;
                }).catch(error => {
          });
      }
  },
  created(){
      let id = this.$route.query.id;
      let params = {id:id};
      this.PlanDetail(params);          
  }
}
</script>