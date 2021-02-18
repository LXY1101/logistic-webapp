<template>
  <div class="top" ref='top'>
    <div class="top_left">
        <div class="top_left_back" @click='back' v-show='ShowBg'></div>
    </div>
    <div class="top_center">
      <div class="top_text" v-if="contentShow==0">
        <div style="width:30%;height:100%;float:left"></div>
        <select name="public-choice"  class="top_select"><option value="第一社区" selected="">第一社区</option><option value="第二社区">第二社区</option><option value="第三社区">第三社区</option><option value="第四社区">第四社区</option></select>
        <div style="width:30%;height:100%;float:left"></div>
      </div>
      <div class="top_text" v-else>{{title}}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
  @import "~@css/components/top/top.less";
</style>

<script>
export default {
  name: 'top',
  data () {
    return {
      
    }
  },
  methods:{
     back(){
       this.$router.go(-1);
     },
     getHeight() {
        let tops = this.$refs.top.offsetHeight;
        return tops;
      }
   }, 
  computed:{

  },
  props:{
    title:String,
    contentShow:Number,
    ShowBg:Boolean
  }
}
</script>
