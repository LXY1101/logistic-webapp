<template>
  <div class="tabberWarp" v-show='showbgs()'>
    <div class="warp">
      <Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes' :sel='selected' :key="item.txt">
        <img :src="item.normalImg" slot='normalImg'>
        <img :src="item.activeImg" slot='activeImg'>
      </Item>
    </div>
  </div>
</template>
<style lang='less'>
  @import '~@css/components/bottom/bottom.less';
</style>
<script type="text/javascript">
  import Item from './item.vue'
  export default{
    components:{
      Item
    },
    data:function(){
      return{
        selected:'',
        tabbarDes:[
          {
            txt: '首页',
            page:'',
            normalImg:require('../assets/icon/home.png'),
            activeImg:require('../assets/icon/home_selected.png')

          },
          {
            txt:'我的',
            page:'my',
            normalImg:require('../assets/icon/my.png'),
            activeImg:require('../assets/icon/my_selected.png')
          }
        ]
      }
    },
    methods:{
      getVal: function(res) {
        this.selected = res;
      },
      showbgs:function(){
        var path = this.$route.path;
				if(path=='/patient_assistSign'||path=='/patient_detail'||path==='/intelligent_diagnosis'||path==='/login'){
					return false;
        }
        else{
          return true;
        }
      }
    },
    mounted() {

    }
  }
</script>
