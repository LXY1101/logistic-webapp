<template>
    <div>
        <top title="慢病管理" :ShowBg="true"></top>
        <div class="chronic_disease_surveillance_search">
            <input type="text" class="chronic_disease_surveillance_search_img" disabled="true">
            <input type="text" class="chronic_disease_surveillance_search_input" placeholder="请输入患者姓名进行搜索" v-model="value">
        </div>  
        <tab :options="options" :className="className" @clicktabId="change_tabId"></tab>
        <div v-show="hasData" style="width:100%;float:left">
            <div v-show="tabId==0" class="blood_sugar_management">
                <div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
                    <div class="blood_sugar_management_list"  v-for="item in infornation" :key="item.id">
                        <div class="blood_sugar_management_list_img">
                            <img src="../../../../static/img/head_portrait.png">
                        </div>
                        <div class="blood_sugar_management_list_center">
                            <div class="blood_sugar_management_list_center_content">
                                <div class="blood_sugar_management_list_center_content_title">{{item.name}}</div>
                                <div class="blood_sugar_management_list_center_content_detail">28</div>
                            </div>
                            <div class="blood_sugar_management_list_center_content">
                                <div class="blood_sugar_management_list_center_content_title">血糖值(mmol/L):</div>
                                <div class="blood_sugar_management_list_center_content_detail">512</div>
                            </div>
                            <div class="blood_sugar_management_list_center_content">
                                <div class="blood_sugar_management_list_center_content_title">监测时间:</div>
                                <div class="blood_sugar_management_list_center_content_detail">2019-10-11</div>
                            </div>
                        </div>
                        <div class="blood_sugar_management_list_right_blue" :class="{'blood_sugar_management_list_right_green':false,'blood_sugar_management_list_right_red':true}">偏高</div>
                    </div>
					<div class="loading" v-if="loading" style="float:left">
						<span id="load-text">{{loadText}}</span>
					</div>
                </div>
            </div>  
            <div v-show="tabId==1" class="blood_pressure_management">
                <div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
                    <div class="blood_pressure_management_list" v-for="item in infornation"  :key="item.id">
                        <div class="blood_pressure_management_list_img">
                            <img src="../../../../static/img/head_portrait.png">
                        </div>
                        <div class="blood_pressure_management_list_center">
                            <div class="blood_pressure_management_list_center_content">
                                <div class="blood_pressure_management_list_center_content_title">{{item.creatorName}}</div>
                                <div class="blood_pressure_management_list_center_content_detail">{{item.resultExplain}}</div>
                            </div>
                            <div class="blood_pressure_management_list_center_content">
                                <div class="blood_pressure_management_list_center_content_title">收缩压(mmHg):</div>
                                <div class="blood_pressure_management_list_center_content_detail">{{item.diasBp}}</div>
                            </div>
                            <div class="blood_pressure_management_list_center_content">
                                <div class="blood_pressure_management_list_center_content_title">监测时间:</div>
                                <div class="blood_pressure_management_list_center_content_detail">{{item.creatorTime}}</div>
                            </div>
                        </div>
                        <div class="blood_pressure_management_list_right_blue" :class="{'blood_pressure_management_list_right_green':false,'blood_pressure_management_list_right_red':true}">偏高</div>
                    </div>
					<div class="loading" v-if="loading" style="float:left">
						<span id="load-text">{{loadText}}</span>
					</div>
                </div>
            </div>
        </div>
        <div v-show="noneData" class="noneData">暂无数据</div>
        <div class="cnt"></div>     
    </div>
</template>

<style lang="less" scoped>
    @import '~@css/server/chronic_disease_surveillance/chronic_disease_surveillance.less';
    .list-data{
        height: 100%;
        overflow-y: hidden;
    }
</style>

<script>
import top from '../../../components/top'
import tab from '../../../components/tab'
import {NursingApiModules} from '@/api'
export default {
    name:'follow_up_visit',
    components:{
        top,
        tab
    },
    data(){
        return{
            options:['血糖监护','血压监护'],
            tabId:0,
            loading:false,
            loadText:'正在加载...',
            className:'active1',
            hasData:true,
            noneData:false,
            value:'',
            type:0,
            current:1,
            infornation: []
        }
    },
    methods: {
        change_tabId(index){
            this.tabId=index;
            this.type = index;
            this.current = 1;
            this.value = '';
            this.infornation = [];
            this.getListBp();
            
        },
        search(){
            this.current = 1;
            this.infornation = [];
            this.getListBp();        
        },
        getListBp(callBack){
            let params = {current:this.current,key:this.value,type:this.type}
            NursingApiModules.getBpRecord(params).then(res => {
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
                    console.log(this.infornation);
                    if (data && data.length == 0 && !len) {
                        this.loadText = '没有找到相关数据'
                    }
                    else if (data && data.length < 8) {
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
            this.loading = true;
            this.current += 1
            this.getListBp();
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
        this.getListBp();
    },
}
</script>