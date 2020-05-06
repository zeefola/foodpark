<template>
 <app-master>

   
   <div slot="slider">
     <app-slider></app-slider>
   </div>

   <div slot="bannerCollection">
     <app-banner-collection></app-banner-collection>
   </div>
  


  
  


 </app-master>
</template>

<script>
// @ is an alias to /src
import Master from '@/components/Master.vue'
import Slider from '@/components/Slider.vue'
import BannerCollection from '@/components/BannerCollection'

export default {
  name: 'Welcome',
  components: {
    "app-master": Master,
    "app-slider" : Slider,
    "app-banner-collection" : BannerCollection
  }
}
</script>
