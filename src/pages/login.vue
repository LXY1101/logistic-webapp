<template>
    <div>
        <div class="login_background">
          <form @submit.prevent="showData">
            <div class="login_box">
              <div class="login_box_title_left">登录</div>
              <div class="login_box_item">
                <div class="login_box_item_left">
                  <img src="../assets/icon/mobilePhone.png">
                </div>
                <input type="text" placeholder="请输入用户名" v-model="formMess.username">
              </div>
              <div class="login_box_item">
                <div class="login_box_item_left">
                  <img src="../assets/icon/lock.png">
                </div>
                <input type="password" placeholder="请输入您的密码" v-model="formMess.password">
              </div>
              <div class="login_box_item" v-show="isDoctor">
                <div class="login_box_item_left">
                  <img src="../assets/icon/nine.png">
                </div>
                <div class="login_box_item_center">
                  <span>选择代登医生</span>
                </div>
              </div>
              <div class="login_box_content">忘记密码？</div>
              <div class="login_box_bottom">
                <input type="submit" value="登录" class="login_button">
              </div>
              <div style="width:100%;height:30px;float:left"></div>
              <div style="clear:both"></div>
            </div>
          </form>

        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/login.less';
</style>

<script>
import { Toast } from "mint-ui";
export default {
    name:'login',
    data(){
        return{
            isDoctor:false,
            formMess:{
                username:"",
                password:"",
                type:0
             }
        }
    },
    methods:{
        choose_assistant(){
            // this.isDoctor = !this.isDoctor
        },
        changeBodyBackground(){
            document.querySelector("body").setAttribute("style","background:#f2f2f2");
        },
        show_doctor_list(){
            this.popupVisible=true
        },
        confirm_choose(){

        },
        showData(e){
            let params = new FormData() // 创建form对象
            params.append('username', this.formMess.username);
            params.append('password', this.$md5(this.formMess.password));
            params.append('type', this.formMess.type);
            this.$http.post('http://10.101.113.13:9000/apigateway/hmcs/loginIn', params, { emulateJSON: true}).then((response) => {
                console.log(response)
                    if(response.data.code==200){
                        localStorage.setItem('token', JSON.stringify(response.data.data.token));
                        this.showToast('登录成功');
                        setTimeout(this.$router.push({path:'/'}),2000);
                    }
                    else{
                        this.showToast(response.data.msg);
                    }
                    }, (response) => {
                        this.showToast('登录失败');
             });
        },
        showToast(ToasText) {
            this.toastInstanse = Toast({
                message:ToasText, //弹窗内容
                position: "middle", //弹窗位置
                duration: 1500, //弹窗时间毫秒,如果值为-1，则不会消失
            });
        }
    },
    mounted(){
        this.changeBodyBackground()
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "");
    }
}
</script>
