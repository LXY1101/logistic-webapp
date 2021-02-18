<template>
    <div>
        <top title="MDT会诊" :ShowBg="true"></top>
    </div>
</template>

<style lang="less">
    @import '~@css/server/mdt/mdt.less';
</style>

<script>
import top from '../../../components/top'
export default {
    name:'mdt',
    components:{
        top
    }
}
</script>