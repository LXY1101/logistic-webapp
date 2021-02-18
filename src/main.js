// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import {store} from './store/store.js'
import F2 from '@antv/f2'
import Router from 'vue-router'
import axios from 'axios'
import VueScroller from 'vue-scroller'
import {InfiniteScroll} from 'mint-ui';
import md5 from 'js-md5';
Vue.use(InfiniteScroll);
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(router)
Vue.use(VueScroller)
Vue.prototype.$http=axios
Vue.prototype.$F2=F2
Vue.prototype.$md5 = md5;

document.addEventListener('plusready', function() {
  var webview = plus.webview.currentWebview();
  plus.key.addEventListener('backbutton', function() {
    webview.canBack(function(e) {
      if(e.canBack) {
        webview.back();//返回上一页
      } else {
        webview.close(); //关闭应用
      }
    })
  });
})

const originalPush =Router.prototype.push
Router.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>err)
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
