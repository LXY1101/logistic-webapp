<template>
    <div>
        <top title="智能诊断" :ShowBg="true"></top>
        <div class="intelligent_content">
            <div class="diagnosis">
                <div class="robot"><img src="../../../assets/images/robot.png"></div>
                <div class="bubble">
                    您好，我是智能诊断小助手，我将根据您的描述为您提供病情分析和诊断意见。请问您是男性还是女性？
                </div>
                <div class="clear"></div>
            </div>
            <div class="options">
                <div class="option" :class="{choose_sex:sex==='男性'}">男性</div>
                <div class="option" :class="{choose_sex:sex==='女性'}">女性</div>
            </div>
            <div>
                <div class="diagnosis">
                    <div class="robot"><img src="../../../assets/images/robot.png"></div>
                    <div class="bubble">
                        目前您处于以下哪个年龄段？
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="options">
                    <div class="option" 
                        v-for="(age,index) of age_items" 
                        :key="index"
                        :class="{choose_age:index==choose_age}"
                    >{{age.age_group}}</div>
                </div>
            </div>
            <div>
                <div class="diagnosis">
                    <div class="robot"><img src="../../../assets/images/robot.png"></div>
                    <div class="bubble">
                        目前您有一下哪些症状？
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="symptom">
                    <div class="symptom_option"
                        v-for="item of symptom_items"
                        :key="item.id"
                        :class="{choose_symptom:item.active==true}"
                    >{{item.name}}</div>
                    <div class="more_option">更多选择>></div>
                </div>
            </div>
            <div>
                <div class="diagnosis">
                    <div class="robot"><img src="../../../assets/images/robot.png"></div>
                    <div class="bubble">
                        这个情况要考虑因为肺炎的原因导致的肺炎的治疗原则是应用消炎药物，杀灭病菌。根据不同的病原菌选用敏感的药物，早期治疗。
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="diagnosis">
                    <div class="robot"><img src="../../../assets/images/robot.png"></div>
                    <div class="bubble">
                        小助手推荐可以根据病情选择治疗方案，同时还应对症治疗如发热时给予服用退热剂，咳嗽应给予化痰止咳药物，对重症肺炎应及时到医院进行相应的住院治疗。
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" >
    @import "~@css/server/intelligent_diagnosis/intelligent_diagnosis.less";
</style>

<script>
    import top from '../../../components/top';
    export default{
        name:'intelligent_diagnosis',
        data(){
            return{
                age_items:[
                    {age_group:'0~12岁'},
                    {age_group:'12~18岁'},
                    {age_group:'18~56岁'},
                    {age_group:'56岁以上'}
                ],
                symptom_items:[
                    {id:0,name:'咳嗽',active:false},
                    {id:1,name:'流鼻涕',active:false},
                    {id:2,name:'呕吐',active:false},
                    {id:3,name:'腹泻',active:false},
                    {id:4,name:'头晕',active:false},
                    {id:5,name:'嗜睡',active:false},
                    {id:6,name:'腹痛',active:false},
                    {id:7,name:'流鼻血',active:false},
                    {id:8,name:'咽喉痛',active:false},
                    {id:9,name:'痰多',active:false},
                    {id:10,name:'头痛',active:false},
                    {id:11,name:'发烧',active:false},
                ],
                choose_symptom_items:[
                    {id:0,name:'咳嗽'},
                    {id:2,name:'呕吐'},
                    {id:6,name:'腹痛'},
                    {id:8,name:'咽喉痛'},
                ],
                sex:'男性',
                choose_age:1
            }
        },
        components:{
            top
        },
        methods:{
            /**将从后台得到的症状选项选中
             *symptom_items为前端已写好的全部症状，choose_symptom为从后台获取到的症状列表
             *对从后台获取到的choose_symptom进行遍历，将对应的symptom_items数组里的active赋值为true
             */
            choose_symptom(choose_symptom_items,symptom_items){
                for(let i=0;i<choose_symptom_items.length;i++){
                    symptom_items[choose_symptom_items[i].id].active=true
                }
            }
        },
        mounted(){
            this.choose_symptom(this.choose_symptom_items,this.symptom_items)
        },
        beforeCreate () {
            document.querySelector('body').setAttribute('style','background:#f2f2f2');
        },
        beforeDestroy () {
            document.querySelector('body').setAttribute('style', '')
        },
    }
</script>