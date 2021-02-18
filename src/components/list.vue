<template>
   <div>
   <slot  :data="doctor" name="inxList"></slot> 
   </div>
</template>
 
<script>
export default {
  name: 'List',
  data(){
    return {
       doctor:[{
          images:'../../../static/img/index_3.png',
          id:1
       },
       {
          images:'../../../static/img/index_3.png',
          id:2
       },
       {
          images:'../../../static/img/index_3.png',
          id:3
       }]
  }
 }
}
</script>