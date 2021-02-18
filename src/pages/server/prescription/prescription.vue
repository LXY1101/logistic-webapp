<template>
    <div>
        <top title="开处方" :ShowBg="true"></top>
        <div class="prescription_tab">
            <tab :options="options" :className="className" @clicktabId="change_tabId"></tab>
        </div>
        <div v-show="tabId==0" class="prescription_paid">
            <div class="prescription_paid_item">
                <div class="prescription_paid_item_left">
                    <div class="prescription_paid_item_left_content">RDRYM2019071012342B</div>
                    <div class="prescription_paid_item_left_content">开方医生：啊giao&nbsp;&nbsp;&nbsp;&nbsp;就诊人：吴亦凡</div>
                    <div class="prescription_paid_item_left_content">诊断：高血压</div>
                    <div class="prescription_paid_item_left_content">2019-07-10 12:34:28</div>
                </div>
                <div class="prescription_paid_item_right">
                    <div class="prescription_paid_item_right_content">待付款</div>
                    <div class="prescription_paid_item_right_img">
                        <img src="../../../assets/icon/angle-right.png">
                    </div>
                </div>
            </div>
            <div class="prescription_paid_item">
                <div class="prescription_paid_item_left">
                    <div class="prescription_paid_item_left_content">RDRYM2019071012342B</div>
                    <div class="prescription_paid_item_left_content">开方医生：啊giao&nbsp;&nbsp;&nbsp;&nbsp;就诊人：吴亦凡</div>
                    <div class="prescription_paid_item_left_content">诊断：高血压</div>
                    <div class="prescription_paid_item_left_content">2019-07-10 12:34:28</div>
                </div>
                <div class="prescription_paid_item_right">
                    <div class="prescription_paid_item_right_content">待付款</div>
                    <div class="prescription_paid_item_right_img">
                        <img src="../../../assets/icon/angle-right.png">
                    </div>
                </div>
            </div>
            <div class="prescription_paid_item">
                <div class="prescription_paid_item_left">
                    <div class="prescription_paid_item_left_content">RDRYM2019071012342B</div>
                    <div class="prescription_paid_item_left_content">开方医生：啊giao&nbsp;&nbsp;&nbsp;&nbsp;就诊人：吴亦凡</div>
                    <div class="prescription_paid_item_left_content">诊断：高血压</div>
                    <div class="prescription_paid_item_left_content">2019-07-10 12:34:28</div>
                </div>
                <div class="prescription_paid_item_right">
                    <div class="prescription_paid_item_right_content">未付款</div>
                    <div class="prescription_paid_item_right_img">
                        <img src="../../../assets/icon/angle-right.png">
                    </div>
                </div>
            </div>
        </div>
        <div v-show="tabId==1" class="prescription_paid">
            <div class="prescription_paid_item">
                <div class="prescription_paid_item_left">
                    <div class="prescription_paid_item_left_content">RDRYM2019071012342B</div>
                    <div class="prescription_paid_item_left_content">开方医生：啊giao&nbsp;&nbsp;&nbsp;&nbsp;就诊人：吴亦凡</div>
                    <div class="prescription_paid_item_left_content">诊断：高血压</div>
                    <div class="prescription_paid_item_left_content">2019-07-10 12:34:28</div>
                </div>
                <div class="prescription_paid_item_right">
                    <div class="prescription_paid_item_right_content">已付款</div>
                    <div class="prescription_paid_item_right_img">
                        <img src="../../../assets/icon/angle-right.png">
                    </div>
                </div>
            </div>
        </div>
        <div v-show="tabId==2" class="prescription_paid">
            <div class="prescription_paid_item">
                <div class="prescription_paid_item_left">
                    <div class="prescription_paid_item_left_content">RDRYM2019071012342B</div>
                    <div class="prescription_paid_item_left_content">开方医生：啊giao&nbsp;&nbsp;&nbsp;&nbsp;就诊人：吴亦凡</div>
                    <div class="prescription_paid_item_left_content">诊断：高血压</div>
                    <div class="prescription_paid_item_left_content">2019-07-10 12:34:28</div>
                </div>
                <div class="prescription_paid_item_right">
                    <div class="prescription_paid_item_right_content">已完成</div>
                    <div class="prescription_paid_item_right_img">
                        <img src="../../../assets/icon/angle-right.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/prescription/prescription.less';
</style>

<script>
import top from '../../../components/top'
import tab from '../../../components/tab'
export default {
    name:'prescription',
    components:{
        top,
        tab
    },
    data(){
        return{
            options:['未付款','已付款','已完成'],
            tabId:0,
            className:'active2'
        }
    },
    methods: {
        change_tabId(index){
            this.tabId=index
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
    }
}
</script>