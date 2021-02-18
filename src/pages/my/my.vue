<template>
    <div>
        <div class="doctor_detail_top" ref="doctor_detail_bg">
            <div class="doctor_detail_left">
                <div class="doctor_detail_lt">
                    <div class="doctor_detail_icon">
                        <img src="../../assets/images/touxiang.jpg" alt='' style="height:100%"/>
                    </div>
                </div>
            </div>
            <div class="doctor_detail_right">
                <div class="doctor_detail_title mgs">张艺兴</div>
                <div class="doctor_detail_title mg">手机号：13500175359</div>
            </div>
        </div>
        <div class="my_item">
            <div class="my_item_list" style="background-color:#2893FF" @click="to_doctor()">我的活动</div>
            <div class="my_item_list" style="background-color:#FFCC00" @click="message()">消息提醒</div>
        </div>
        <div class="my_list" style="margin-top:20px;border-top: 1px solid #E4E4E4" @click="record()">
            <div class="my_list_left my_icon1"></div>
            <div class="my_list_text">成长记录</div>
            <div class="my_list_right"></div>
        </div>
        <div class="my_list" @click="manager()">
            <div class="my_list_left my_icon2" ></div>
            <div class="my_list_text">第二课堂成绩单</div>
            <div class="my_list_right"></div>
        </div>
        <div class="my_list" @click="to_set()">
            <div class="my_list_left my_icon3"></div>
            <div class="my_list_text">设置与帮助</div>
            <div class="my_list_right"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~@css/my/my.less";
</style>
<script>
export default {
    name: "my",
    data() {
        return {
            user_data:''
        };
    },
    components: {

    },

    computed: {},
    methods: {
        back() {
            this.$router.go(-1);
        },
        to_set(){
            this.$router.push({path:'/set'})
        },
        to_doctor(){
            this.$router.push({path:'/doctor_team'})
        },
        message(){
            this.$router.push({path:'/message_warn'})
        },
        manager(){
            this.$router.push({path:'/my_doctor'})
        },
        record(){
            this.$router.push({path:'/send_record'})
        }
    },
    mounted() {
        var that = this;
        var dd_height = that.$refs.doctor_detail_bg.offsetWidth * 0.574 + "px";
        that.$refs.doctor_detail_bg.style.height = dd_height;
    }
};
</script>





