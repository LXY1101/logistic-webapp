<template>
<div>
    <top title='协助签约' :ShowBg="true"></top>
    <div class="assistSign_content">
        <div class="assistSign_title">基本信息</div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">姓名</div>
            <input type="text" placeholder="请输入您的姓名" class="assistSign_list_ipt"/>
        </div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">身份证</div>
            <input type="text" placeholder="请输入合法身份证号码" class="assistSign_list_ipt"/>            
        </div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">生日</div>
            <div class="assistSign_list_right"  @click="openPicker('bir')">{{selectedTime?selectedTime:'选择时间'}}</div>
            <mt-datetime-picker
            ref="picker"
            type="date"
            v-model="pickTime"
            @confirm="handleConfirm('bir')">
            </mt-datetime-picker>           
        </div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">性别</div>
            <div class="assistSign_list_right"></div>
        </div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">居民头像</div>
            <div class="assistSign_list_right">
                <div class="assistSign_list_right_add">+</div>
            </div>
        </div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">街道地址</div>
            <input type="text" placeholder="请输入居民的街道地址" class="assistSign_list_ipt"/>
        </div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">详细地址</div>
            <input type="text" placeholder="请输入居民的详细地址" class="assistSign_list_ipt"/>            
        </div>
        <div class="assistSign_title">联系方式</div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">手机号码</div>
            <input type="text" placeholder="请输入手机号码" class="assistSign_list_ipt"/>
        </div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">手机验证码</div>
        </div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">固定电话</div>
            <input type="text" placeholder="请输入固定电话" class="assistSign_list_ipt"/>
        </div>
        <div class="assistSign_title">签约时效</div>
        <div class="assistSign_list">
            <div class="assistSign_list_left">生效时间</div>
            <div class="assistSign_list_right"  @click="openPicker('start')">{{selectedStart?selectedStart:'选择时间'}}</div>
            <mt-datetime-picker
            ref="pickerSt"
            type="date"
            v-model="pickStart"
            @confirm="handleConfirm('start')">
            </mt-datetime-picker>           
        </div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">签约有效期</div>
        </div>
        <div class="assistSign_title">服务包</div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">居民标签</div>
            <input type="text" placeholder="默认为普通人群" class="assistSign_list_ipt"/>            
        </div>
        <div class="assistSign_list bd">
            <div class="assistSign_list_left">服务包</div>
            <input type="text" placeholder="请选择" class="assistSign_list_ipt"/>            
        </div>
        <div class="assistSign_title">签约凭着</div>
        <div class="assistSign_list" style="border-bottom:none">
            <div class="assistSign_list_left">上传附件(0/9)</div>
        </div>
        <div class="assistSign_add">
            <div class="assistSign_add_content">+</div>
        </div>
        <div class="assistSign_confire">
            <div class="assistSign_confire_btn">保存</div>
        </div>
    </div>
</div>
</template>

<style scoped lang="less">
@import '~@css/patient/patient_assistSign.less'; 
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "patient_assistSign",
    data() {
        return {
            selectedTime:'',
            selectedStart:'',
            pickTime:'',
            pickStart:''
        };
    },
    components: {
        top
    },

    computed: {},
    methods: {
        back(){
            this.$router.go(-1);
        },
        openPicker(value){
            if(this.selectedTime){
                if(value=='start'){
                    this.pickStart=this.selectedTime;
                    this.$refs.pickerSt.open(); 
                }
                else{
                    this.pickTime=this.selectedTime;
                    this.$refs.picker.open();
                }   
                       
            }
            else{
                if(value=='start'){
                    this.pickStart=new Date();
                    this.$refs.pickerSt.open(); 
                }
                else{
                    this.pickTime=new Date();
                    this.$refs.picker.open();
                }
            }
            
        },
        date_format(time){
            const t=new Date(time)
            var year=t.getFullYear()
            var month=t.getMonth()+1
            if(month<10){month='0'+month}
            var date=t.getDate()
            if(date<10){date='0'+date}
            return year+'/'+month+'/'+date
        },
        handleConfirm(value){
            if(value=='start'){
                this.selectedStart=this.date_format(this.pickStart);
            }
            else{
                this.selectedTime=this.date_format(this.pickTime);
            }
            
        }
    },

    mounted(){
        var that = this;        
    }
};
</script>





