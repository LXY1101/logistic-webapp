<template>
    <div>
        <top title="设备连接" :ShowBg='true'></top>
        <div class="equipment_list">
            <div class="equipment_list_left_pressure" ref="equipment1">
                <div class="equipment_list_img">
                    <img src="../../../assets/icon/blood_pressure.png">
                </div>
                <div class="equipment_list_content">血压</div>
            </div>
            <div class="equipment_list_right">
                测血压
            </div>
        </div>
        <div class="equipment_list">
            <div class="equipment_list_left_pressure equipment_list_left_sugar" ref="equipment2">
                <div class="equipment_list_img equipment_list_blood_img">
                    <img src="../../../assets/icon/blood_sugar.png">
                </div>
                <div class="equipment_list_content">血糖</div>
            </div>
            <div class="equipment_list_right">
                测血糖
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/equipment/equipment';
</style>

<script>
import top from '../../../components/top'
export default {
    name:'equipment',
    components:{
        top
    },
    methods:{
    },
    mounted(){
        var dd_height=this.$refs.equipment1.offsetWidth+'px';
        this.$refs.equipment1.style.height=dd_height;
        var dd_height=this.$refs.equipment2.offsetWidth+'px';
        this.$refs.equipment2.style.height=dd_height;
    }
}
</script>