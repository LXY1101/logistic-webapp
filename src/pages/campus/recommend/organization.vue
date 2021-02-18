<template>
  <div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">团委</div>
      <div class="org_list_right"></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">学生会</div>
      <div class="org_list_right"></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">数学建模俱乐部</div>
      <div class="org_list_right" ></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">考验科创俱乐部</div>
      <div class="org_list_right"></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">数学教育俱乐部</div>
      <div class="org_list_right"></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">创新创业协会</div>
      <div class="org_list_right"></div>
    </div>
    <div class="org_list" @click="to_detail()">
      <div class="org_list_text">羽协</div>
      <div class="org_list_right"></div>
    </div>
  </div>
</template>

<style  scoped lang="less">
  @import "../../../assets/css/campus/organization.less";
</style>
<script>
    export default {
        name: "organization",
      methods:{
        to_detail(){
          this.$router.push({path:'/organization_detail'})
        },
      }
    }
</script>

<style scoped>

</style>
