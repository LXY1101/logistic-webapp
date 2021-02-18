<template>
  <div id="app">
    <router-view></router-view>
    <!-- 有一些页面是不需要Tabbar的-->
    <Tabbar v-if="tabbarShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from'./components/bottom'
export default {
  name: 'App',
  data(){
    return{
      tabbarShow:true
    }
  },
  created:function(){
    var token = localStorage.getItem("token");
    if(token){
      this.$router.push('/')
    }else{
      this.$router.push('/login')
    }
  },
  components:{
    Tabbar
  }
  
  // watch:{
  //   //控制tabbar的显示与否
  //   '$route'(to,from){
  //     if(){
  //       this.tabbarShow=false;
  //     }else{
  //       this.tabbarShow=true;
  //     }
  //   }
  // }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin:0px;
}

</style>
