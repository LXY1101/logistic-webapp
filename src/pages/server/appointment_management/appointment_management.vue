<template>
    <div>
        <top title="预约管理" :ShowBg='true'></top>
        <div class="appointment_management_search">
            <input type="text" class="appointment_management_search_img" disabled="true">
            <input type="text" class="appointment_management_search_input" placeholder="请输入患者姓名进行搜索">
        </div>
        <tab :options="options" :className="className" @clicktabId="change_tabId"></tab>
        <div v-show="tabId==0" class="appointment_management_content">
            <div class="appointment_management_unconfirmed_list">
                <div class="appointment_management_unconfirmed_list_img">
                    <img src="../../../../static/img/head_portrait.png">
                </div>
                <div class="appointment_management_unconfirmed_list_content">
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title" >啊giao</span>
                        <span class="appointment_management_unconfirmed_list_content_detail" >女</span>
                        <span class="appointment_management_unconfirmed_list_content_detail" >24岁</span>
                    </div>
                    <div class="sure_appointment_button">确定</div>
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title">预约时间:</span>
                        <span class="appointment_management_unconfirmed_list_content_detail">08-13 09:30</span>
                    </div>
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title">病情描述:</span>
                        <span class="appointment_management_unconfirmed_list_content_detail">医生，今天下午我家宝宝脸上长了个痘痘啊澳起asjnxjkn</span>
                    </div>
                    <div class="change_time_button">修改服务预约时间</div>
                </div>
            </div>
            <div class="appointment_management_unconfirmed_list">
                <div class="appointment_management_unconfirmed_list_img">
                    <img src="../../../../static/img/head_portrait.png">
                </div>
                <div class="appointment_management_unconfirmed_list_content">
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title" >啊giao</span>
                        <span class="appointment_management_unconfirmed_list_content_detail" >女</span>
                        <span class="appointment_management_unconfirmed_list_content_detail" >24岁</span>
                    </div>
                    <div class="sure_appointment_button">确定</div>
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title">预约时间:</span>
                        <span class="appointment_management_unconfirmed_list_content_detail">08-13 09:30</span>
                    </div>
                    <div class="appointment_management_unconfirmed_list_content_item">
                        <span class="appointment_management_unconfirmed_list_content_title">病情描述:</span>
                        <span class="appointment_management_unconfirmed_list_content_detail">医生，今天下午我家宝宝脸上长了个痘痘啊澳起asjnxjkn</span>
                    </div>
                    <div class="change_time_button">修改服务预约时间</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/appointment_management/appointment_management.less';
</style>

<script>
import top from '../../../components/top'
import tab from '../../../components/tab'
export default {
    name:'appointment_management',
    data(){
        return{
            tabId:0,
            options:['','',''],//存放tab选项名字
            className:'active1',
            //模拟后台数据 对接数据接口改unconfirmed_num confirmed_num finish_num
            unconfirmed_num:11,
            confirmed_num:1,
            finish_num:12
        }
    },
    components:{
        top,
        tab
    },
    methods: {
        change_tabId(index){
            this.tabId=index
        },
        //将后台获取的待确认值、已确认值和已完成值赋值用解构赋值的方法平凑字符后分别赋值给this.options
        change_options(){
            this.options=[
                '待确认'+`(${this.unconfirmed_num})`,
                '已确认'+`(${this.confirmed_num})`,
                '已完成'+`(${this.finish_num})`
            ]
        }
    },
    beforeCreate() {
        document
            .querySelector("body")
            .setAttribute("style", "background:#f2f2f2");
    },
    beforeDestroy(){
        document.querySelector('body').setAttribute("style","")
    },
    mounted() {
        this.change_options()
    },
}
</script>