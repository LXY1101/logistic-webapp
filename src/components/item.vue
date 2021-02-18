<template>
	<div class="itemWarp flex_mid" @click='changePage()' v-show='his'>
		<span v-show='!bol'>
			<slot name='normalImg'></slot>
		</span>
		<span v-show='bol'>
			<slot name='activeImg'></slot>
		</span>
		<span v-text='txt' v-show='!bol' style="color:#868686"></span>
		<span v-text='txt' v-show='bol' style="color:#2893FF"></span>
	</div>
</template>
<style lang="less" scoped>
	@import "~@css/components/bottom/item.less";
</style>
<script type="text/javascript">
	export default{
		name: 'Item',
		data:function() {
			return{
				his:true
			}
		},
		props:{
			txt:{
				type:String
			},
			page:{
				type:String
			},
			sel:{
				type:String
			}
		},
		computed:{
			bol: function(){
				var path = this.$route.path;
				if(path!='/'&&path!='/my'&&path!='/server'&&path!='/patient'){
					return false;
				}
				else{
					if(this.sel == this.page){
						return true;
					}
					else{
						return false;
					}
				}
			}
		},
		methods:{
			changePage:function(){
				//点击跳转对应的页面
				this.$router.push('/'+this.page);
				this.$emit('change',this.page)
			}
		}
	}
</script>
