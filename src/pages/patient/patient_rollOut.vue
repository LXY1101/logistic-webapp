<template>
<div>
    <top title='转档' :ShowBg="true"></top>
    <div class="mgt">
        <tab :options="options" :className="className"  @clicktabId="change_tabId" ref="tab_ref"></tab>
        <div v-show="tabId==0">
            <div class="rollout_list">
                <div class="rollout_item">
                    <div class='rollout_item_content'>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">居民姓名</div>
                            <div class="rollout_item_line_value">王晓丽</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">申请日期</div>
                            <div class="rollout_item_line_value">2019-08-02</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转入医院</div>
                            <div class="rollout_item_line_value">大亚湾石化区澳遂大道</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转档原因</div>
                            <div class="rollout_item_line_value">患者为内科疾病，转入到内科医师李医生诊疗</div>
                        </div>
                        <div class="rollout_item_mark">申请中</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="tabId==1">
            <div class="rollout_list">
                <div class="rollout_item">
                    <div class='rollout_item_content'>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">居民姓名</div>
                            <div class="rollout_item_line_value">王晓丽</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">申请日期</div>
                            <div class="rollout_item_line_value">2019-08-02</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转入医院</div>
                            <div class="rollout_item_line_value">大亚湾石化区澳遂大道</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转档原因</div>
                            <div class="rollout_item_line_value">患者为内科疾病，转入到内科医师李医生诊疗</div>
                        </div>
                        <div class="rollout_item_mark">已转入</div>
                    </div>
                </div>
                <div class="rollout_item">
                    <div class='rollout_item_content'>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">居民姓名</div>
                            <div class="rollout_item_line_value">王晓丽</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">申请日期</div>
                            <div class="rollout_item_line_value">2019-08-02</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转入医院</div>
                            <div class="rollout_item_line_value">大亚湾石化区澳遂大道</div>
                        </div>
                        <div class="rollout_item_line">
                            <div class="rollout_item_line_key">转档原因</div>
                            <div class="rollout_item_line_value">患者为内科疾病，转入到内科医师李医生诊疗</div>
                        </div>
                        <div class="rollout_item_reject">拒绝</div>
                        <div class="rollout_item_confire">确认</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="less">
@import '~@css/patient/patient_rollOut.less';
</style>
<script>
import top from '../../components/top.vue'
import tab from '../../components/tab'
export default {
    name: "rollOut",
    data() {
        return {
            options:['转出列表','转入列表'],
            tabId:0,
            className:'active2'  
        };
    },
    components: {
        top,
        tab
    },

    computed: {},
    methods: {
        back(){
            this.$router.go(-1);
        },
        change_tabId(index){
            this.tabId=index
        }
    },

    mounted(){
        var that = this;        
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style','background:#f2f2f2');
    },
    beforeDestroy () {
        document.querySelector('body').setAttribute('style', '')
    }
};
</script>





