<template>
  <div>
    <top title='活动管理' :ShowBg="true"></top>
    <div style="margin-top:50px">
      <div class="org_list">
        <div class="org_list_text">收藏的活动</div>
        <div class="org_list_right"></div>
      </div>
      <div class="org_list">
        <div class="org_list_text">已参加的活动</div>
        <div class="org_list_right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "~@css/my/doctor_team.less";
</style>

<script>
  import top from '../../components/top.vue'
  export default {
   name: 'doctor_team',
   data() {
     return {

     }
   },
   components:{
    top
   },

   computed: {

   },
   methods:{

   },
  created(){

  },
  mounted() {

  },
  updated() {

  }
 }
</script>





