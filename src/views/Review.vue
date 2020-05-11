<template>
 <app-master>


    <div slot='breadCrumb'>
        <app-breadcrumb title="reviews"></app-breadcrumb>
    </div>


   <div slot="mainContent">
       
       


   </div>
  


  
  


 </app-master>
</template>

<script>
// @ is an alias to /src
import Master from '@/components/Master.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
export default {
  name: 'Review',
  components: {
    "app-master": Master,
    "app-breadcrumb": BreadCrumb
  }
}
</script>
