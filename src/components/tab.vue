<template>
    <div>
        <header class="tab">
            <div class="tab_item">
                <div v-for="(item,index) in options" 
                :key="index"
                @click="selete_tabId(index)" 
                class="tabList" 
                :class="{active1:tabId==index&&className==='active1',active2:tabId==index&&className==='active2'}"
                >{{item}}
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="less">
    @import '~@css/components/tab/tab.less';
</style>

<script>
export default {
    name:'tab',
    props:{
        options:Array,
        className:String
    },
    data() {
        return {
            tabId:0,
        }
    },
    methods: {
        //点击触发父组件的clicktabId的方法，将索引值传给父组件的方法
        selete_tabId(index){
            this.tabId=index
            this.$emit('clicktabId',index)
        }
    },
    mounted() {

    },
}
</script>