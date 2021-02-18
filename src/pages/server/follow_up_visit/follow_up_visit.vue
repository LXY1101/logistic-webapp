<template>
    <div>
        <top title="随访" :ShowBg="true"></top>
        <div class="follow_up_visit_search">
            <input type="button" class="follow_up_visit_search_img"  @click="search()">
            <input type="text" class="follow_up_visit_search_input" placeholder="请输入患者姓名进行搜索" v-model="value">
        </div>
        <tab :options="options" :className="className" @clicktabId="change_tabId"></tab>
        <!-- 当返回有数据时 -->
        <div v-show="hasData" style="width:100%;float:left">
            <div v-show="tabId==0" class="follow_up_visit_plan" style="width:100%;float:left">
                <div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
                    <div class="follow_up_visit_plan_list" v-for="item in infornation"  :key="item.id">
                        <div class="follow_up_visit_plan_list_img">
                            <img src="../../../../static/img/head_portrait.png">
                        </div>
                        <div class="follow_up_visit_plan_list_center">
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">{{item.name}}</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.sex}} 24岁</div>
                            </div>
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">随访时间:</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.bir}}</div>
                            </div>
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">上次诊断结果:</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.next}}</div>
                            </div>
                        </div>
                        <div class="follow_up_visit_plan_list_right_green" :class="{'follow_up_visit_plan_list_right_red':true}">今日</div>
                    </div>
                </div>
            </div>
            <div v-show="tabId==1" class="follow_up_visit_plan" style="width:100%;float:left">
                <div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
                    <div class="follow_up_visit_plan_list" v-for="item in infornation"  :key="item.id">
                        <div class="follow_up_visit_plan_list_img">
                            <img src="../../../../static/img/head_portrait.png">
                        </div>
                        <div class="follow_up_visit_plan_list_center">
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">{{item.name}}</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.sex}} 24岁</div>
                            </div>
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">随访时间:</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.bir}}</div>
                            </div>
                            <div class="follow_up_visit_plan_list_center_content">
                                <div class="follow_up_visit_plan_list_center_content_title">上次诊断结果:</div>
                                <div class="follow_up_visit_plan_list_center_content_detail">{{item.next}}</div>
                            </div>
                        </div>
                        <div class="follow_up_visit_plan_list_right_green" :class="{'follow_up_visit_plan_list_right_red':true}">今日</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 当返回的数据为空时 -->
        <div v-show="noneData" class="noneData">暂无数据</div>
    </div>
</template>

<style lang="less" scoped>
    @import '~@css/server/follow_up_visit/follow_up_visit.less';
</style>

<script>
import top from '../../../components/top'
import tab from '../../../components/tab'
import {VisitApiModules} from '@/api'
export default {
    name:'follow_up_visit',
    components:{
        top,
        tab
    },
    data(){
        return{
            options:['随访任务','随访记录'],
            tabId:0,
            type:0,
            value:'',
            current: 1,
            className:'active1',
            hasData:true,
            noneData:false,
            infornation: []
        }
    },
    methods: {
        //点击切换导航栏并获取索引值，将索引值赋值给type
        change_tabId(index){
            //切换导航栏之后数据要恢复默认的
            this.tabId=index;
            this.type = index;
            this.current = 1;
            this.value = '';
            this.infornation = [];
            this.getList();
        },
        search(){
            this.current = 1;
            this.infornation = [];
            this.getList();               
        },
        //向后端请求数据,type是类型（随访任务或记录），keyValue是输入框的内容
        getList(callBack){
            let params = {current:this.current,type:this.type,value:this.value}
            VisitApiModules.getVisitList(params).then(res => {
                console.log(res)
                //当返回数据为空时
                if(res.data.totalCount==0){
                    this.noneData = true;
                    this.hasData=false;
                }
                //当返回有数据时
                else{
                    this.noneData = false;
                    this.hasData=true;
                    let data = res.data.list;
                    if(!data){data = []};
                    let len = this.infornation.length;
                    this.infornation = this.infornation.concat(data);
                    if (data && data.length == 0 && !len) {
                        this.loadText = '没有找到相关数据'
                    }
                    else if (data && data.length < 3) {
                        this.loadText = '暂无更多数据'
                    } 
                    else {
                        this.loading = false
                    }
                }

                callBack && callBack();
            }).catch(error => {

            });
        },
        loadMore() {
            this.loading = true
            this.current += 1
            this.getList();
        }
    },
    mounted() {
        this.getList();
    },
    beforeCreate() {
        document
            .querySelector("body")
            .setAttribute("style", "background:#f2f2f2");
    },
    beforeDestroy(){
        document.querySelector('body').setAttribute("style","")
    },
}
</script>