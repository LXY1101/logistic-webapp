<template>
    <div>
        <top title='患者' :ShowBg="false"></top>
        <div class="patient_top">
            <div class="patient_top_list">
                <div class="patient_top_item" @click="assist()">
                    <div class="patient_top_item_img">
                        <div class="patient_top_item_igs">
                            <img src='../../assets/icon/assist.png' alt='' class="patient_top_item_src"/>
                        </div>
                    </div>
                    <div class="patient_top_item_text">协助签约</div>
                </div>
                <div class="patient_top_item" @click="sign()">
                    <div class="patient_top_item_img">
                        <div class="patient_top_item_igs">
                            <img src='../../assets/icon/apply_for.png' alt='' class="patient_top_item_src"/>
                        </div>
                    </div>
                    <div class="patient_top_item_text">签约申请</div>
                </div>
                <div class="patient_top_item" @click="rollOut()">
                    <div class="patient_top_item_img">
                        <div class="patient_top_item_igs">
                            <img src='../../assets/icon/send_for.png' alt='' class="patient_top_item_src"/>
                        </div>
                    </div>
                    <div class="patient_top_item_text">转档</div>
                </div>
                <div class="patient_top_item" @click="send()">
                    <div class="patient_top_item_img">
                        <div class="patient_top_item_igs">
                            <img src='../../assets/icon/send_to.png' alt='' class="patient_top_item_src" style="padding:10px"/>
                        </div>
                    </div>
                    <div class="patient_top_item_text">推送</div>
                </div>
            </div>
        </div>
        <div class="ask_search">
            <input type='text' class="ask_search_ipt" placeholder="搜索"/>
        </div>
        <div class="patient_list"  :key="item.id"  v-for="(item,index) in patientList">
            <div class="patient_list_top" @click="change(index)">
                <div class="patient_list_left">
                    <div class="patient_list_point">·</div>
                    <div class="patient_list_title">{{item.patientType}}</div>
                </div>
                <div class="patient_list_center"></div>   
                <div class="patient_list_right" v-show='activeIndex===index'>
                    {{item.patientNum}}
                </div>    
                <div class="patient_list_rights" v-show='activeIndex!==index'>
                    {{item.patientNum}}
                </div>                
            </div>  
            <div class="patient_list_item" v-show='activeIndex===index'>
                <div class="patient_list_item_list" :key="its.id"  v-for="its in item.patientChild" @click="to_PatientDetail()">
                    <div class="patient_list_item_list_left">
                        <img src='../../assets/icon/user.png' alt='' class="patient_list_item_list_leftImg"/>
                    </div>
                    <div class="patient_list_item_list_center">
                        <div class="patient_list_item_list_center_top">
                            <div class="patient_list_item_list_center_name">{{its.name}}</div>
                            <div class="patient_list_item_list_center_img"><img src='../../assets/icon/women.png' alt='' class="patient_list_item_list_center_src"/></div>
                        </div>
                        <div class="patient_list_item_list_center_bottom">
                            <div class="patient_list_item_list_center_text">{{its.age}}岁</div>
                            <div class="patient_list_item_list_center_text">{{its.address}}</div>
                        </div>
                    </div>
                    <div class="patient_list_item_list_right">3人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '~@css/patient/patient.less';
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "patient",
    data() {
        return {
            patientList:[
                {id:1,patientType:'高血压患者',patientNum:12,patientChild:[{id:1,name:'立明',address:'广东省惠州市惠城区河南岸',age:32},{id:2,name:'柏青',address:'广东省惠州市惠城区河南岸',age:32}]},
                {id:2,patientType:'老年人',patientNum:10,patientChild:[{id:3,name:'张三',address:'广东省惠州市惠城区河南岸',age:34},{id:4,name:'张嘉儿',address:'广东省惠州市惠城区河南岸',age:32}]},
                {id:3,patientType:'儿童',patientNum:8,patientChild:[{id:5,name:'王八',address:'广东省惠州市惠城区河南岸',age:12},{id:6,name:'内马尔',address:'广东省惠州市惠城区河南岸',age:32}]},
                {id:4,patientType:'孕妇',patientNum:6,patientChild:[{id:7,name:'罗纳尔多',address:'广东省惠州市惠城区河南岸',age:24},{id:8,name:'罗建',address:'广东省惠州市惠城区河南岸',age:32}]}
            ],
            activeIndex: -1
        };
    },
    components: {
        top
    },

    computed: {},
    methods: {
        change(index){
             this.activeIndex = this.activeIndex == index ? -1 : index;
         },
         to_PatientDetail(){
              this.$router.push({path:'/patient_detail'})
         },
         rollOut(){
             this.$router.push({path:'/patient_rollOut'})
         },
         sign(){
             this.$router.push({path:'/patient_sign'})
         },
         send(){
             this.$router.push({path:'/patient_send'})      
         },
         assist(){
             this.$router.push({path:'/patient_assistSign'}) 
         }
    },
    mounted() {

    }
};
</script>





