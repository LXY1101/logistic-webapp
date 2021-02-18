<template>
	<div>
		<top title='健康教育' :ShowBg="true"></top>
		<header class="tab">
			<div class="tab_item">
				<div @click="tab(0)" class="tabList" :class="{active:tabId==0}">教育材料</div>
				<div @click="tab(1)" class="tabList" :class="{active:tabId==1}">教育计划</div>
				<div @click="tab(2)" class="tabList" :class="{active:tabId==2}">教育活动</div>
			</div>
		</header>
		<div class="content">
			<div v-show="tabId==0">
				<div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
					<div class="materials_list"  v-for="item in Materials"  :key="item.id" @click="health_education_material(item.id)">
						<div class="materials_list_item_left">
							<div class="materials_list_item_text">标题</div>
							<div class="materials_list_item_text">文件分类</div>
							<div class="materials_list_item_text">所属业务</div>
							<div class="materials_list_item_text">健教形式</div>
						</div>
						<div class="materials_list_item_right">
							<div class="materials_list_item_text">{{item.title}}</div>
							<div class="materials_list_item_text">{{item.fileType}}</div>
							<div class="materials_list_item_text">{{item.fileSort}}</div>
							<div class="materials_list_item_text">{{item.remarks}}</div>
						</div>					
					</div>
					<div class="loading" v-if="loading" style="float:left">
						<span id="load-text">{{loadText}}</span>
					</div>
				</div>
				<div class="bt_content"></div>
			</div>	 

			<div v-show="tabId==1">
				<div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
					<div class="materials_list" @click="health_education_plan(item.id)" v-for="item in Plan"  :key="item.id">
						<div class="materials_list_item_left">
							<div class="materials_list_item_text">专题名称</div>
							<div class="materials_list_item_text">健教地点</div>
							<div class="materials_list_item_text">健教对象</div>
							<div class="materials_list_item_text">健教内容</div>
						</div>
						<div class="materials_list_item_right">
							<div class="materials_list_item_text">{{item.subjectName}}</div>
							<div class="materials_list_item_text">{{item.educationPlace}}</div>
							<div class="materials_list_item_text">{{item.educationObject}}</div>
							<div class="materials_list_item_text">{{item.educationContent}}</div>
						</div>
					</div>
					<div class="loading" v-if="loading" style="float:left">
						<span id="load-text">{{loadText}}</span>
					</div>
				</div>
				<div class="bt_content"></div>
			</div>

			<div v-show="tabId==2">
				<div class="list-data" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"    infinite-scroll-distance="10" infinite-scroll-immediate-check=false>
					<div class="materials_list" @click="health_education_activities(item.id)" v-for="item in Activity"  :key="item.id">
						<div class="materials_list_item_left">
							<div class="materials_list_item_text">活动主题</div>
							<div class="materials_list_item_text">活动地点</div>
							<div class="materials_list_item_text">活动时间</div>
							<div class="materials_list_item_text">参加对象</div>
						</div>
						<div class="materials_list_item_right">
							<div class="materials_list_item_text">{{item.activityTheme}}</div>
							<div class="materials_list_item_text">{{item.activityPlace}}</div>
							<div class="materials_list_item_text">{{item.activityTime}}</div>
							<div class="materials_list_item_text">{{item.activityObject}}</div>
						</div>
					</div>
					<div class="loading" v-if="loading" style="float:left">
						<span id="load-text">{{loadText}}</span>
					</div>
				</div>
				<div class="bt_content"></div>
			</div>	
		</div>
	</div>
</template>


<style scoped lang="less">
	@import "~@css/server/health_education/health_education.less";
</style>


<script>
	import top from '../../../components/top'
	import {EducationPlanApiModules} from '@/api'
	import {EducationActivityApiModules} from '@/api'
	import {EducationMaterialsApiModules} from '@/api'
	export default {
		name: 'health_education',
		data() { 
			return {
				tabId:0,
				infornation:[],
				loading:false,
				loadText:'正在加载...',
				Materials: [],
				Plan: [],
				Activity: [],
				params: {
					current: 1,
					size: 6
				}
			}
		},
		methods: {
			health_education_material(id){
				this.$router.push({path:'/health_education_materials',query:{id:id}})
			},	
			health_education_plan(id){
				this.$router.push({path:'/health_education_plan',query:{id:id}})
			},
			health_education_activities(id){
				this.$router.push({path:'/health_education_activities',query:{id:id}})
			},
			tab(index){
				this.tabId = index;
				if(index==1){
					this.Plan=[];
					this.params.current = 1;
					this.showPlanList();
				}
				else if(index==0){
					this.Materials=[];
					this.params.current = 1;
					this.showMaterialsList();
				}
				else if(index==2){
					this.Activity=[];
					this.params.current = 1;
					this.showActivityList();
				}
				else{

				}			
			},	
			showPlanList(callBack){
				EducationPlanApiModules.getEduPlanList(this.params).then(res => {
					let data = res.data.list;
					if(!data){data = [
					]};
					let len = this.Plan.length;
					this.Plan = this.Plan.concat(data);
					if (data && data.length == 0 && !len) {
						this.loadText = '没有找到相关数据'
					}
					else if (data && data.length < 3) {
						this.loadText = '暂无更多数据'
					} 
					else {
						this.loading = false
					}
					callBack && callBack();
				}).catch(error => {

				});
			},
			showActivityList(callBack){
				EducationActivityApiModules.getEduActivityList(this.params).then(res => {
					let data = res.data.list;
					if(!data){data = [
					]};
					let len = this.Activity.length;
					this.Activity = this.Activity.concat(data);
					if (data && data.length == 0 && !len) {
						this.loadText = '没有找到相关数据'
					}
					else if (data && data.length < 3) {
						this.loadText = '暂无更多数据'
					} 
					else {
						this.loading = false
					}
					callBack && callBack();
				}).catch(error => {

				});
			},
			showMaterialsList(callBack){
				EducationMaterialsApiModules.getEduMaterialsList(this.params).then(res => {
					let data = res.data.list;
					if(!data){data = [
					]};
					let len = this.Materials.length;
					this.Materials = this.Materials.concat(data);
					if (data && data.length == 0 && !len) {
						this.loadText = '没有找到相关数据'
					}
					else if (data && data.length < 3) {
						this.loadText = '暂无更多数据'
					} 
					else {
						this.loading = false
					}
					callBack && callBack();
				}).catch(error => {

				});
			},
			loadMore() {
				this.loading = true
				this.params.current += 1
				if(this.tabId==0){
					this.showMaterialsList();
				}
				else if(this.tabId==1){
					this.showPlanList();
				}
				else if(this.tabId==2){
					this.showActivityList();
				}
			}		
		},
		  beforeCreate () {
		    document.querySelector('body').setAttribute('style','background:#f2f2f2');
		  },
		  beforeDestroy () {
		    document.querySelector('body').setAttribute('style', '')
		  },
	   components:{
	    top
	   },
		mounted() {
			this.showMaterialsList();
		}
	}
</script>
