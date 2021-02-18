<template>
    <div>
      <top title='健康教育材料' :ShowBg="true"></top>
      <div class="material_list">
        <div class="material_list_item">
          <div class="material_list_item_left">标题：{{material.title}}</div>
        </div>
        <div class="material_list_item">
          <div class="material_list_item_left">文件分类：{{material.fileSort}}</div>
          <div class="material_list_item_right">文件类型：{{material.fileType}}</div>
        </div>
        <div class="material_list_item">
          <div class="material_list_item_left">所属业务：{{material.bussinessType}}</div>
          <div class="material_list_item_right">健教形式：{{material.educationForm}}</div>
        </div>
        <div class="material_list_item">
          <div class="material_list_item_left">附件：{{material.fileName}}</div>
          <div class="material_list_item_right">
            <a class="material_list_item_button" href={{}}>下载</a>
          </div>
        </div>
        <div class="material_list_item">
          <div class="material_list_item_left">备注：</div>
        </div>
      <div class="material_list_item"><p style="margin:0; text-indent:2em; line-height:20px;">{{material.remarks}}</p></div>
    </div>
</div> 
</template>

<style scoped lang="less">
  @import "~@css/server/health_education/health_education_materials.less";
</style>
<script>
  import top from '../../../components/top.vue'
  import bottom from '../../../components/bottom.vue'
  import {EducationMaterialsApiModules} from '@/api'
  export default {
   name: 'health_education_masterials',
   data() {
      return {
        material:{}
     }
   },
   components:{
    top
   },
    methods: {
        MaterialsDetail(params) {
            EducationMaterialsApiModules.getEduMaterialsDetail(params).then(res => {
                  this.material = res.data;
                  }).catch(error => {
            });
        }
    },
    created(){
        let id = this.$route.query.id;
        let params = {id:id};
        this.MaterialsDetail(params);          
    },
 }
</script> 