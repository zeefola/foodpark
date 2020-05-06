<template>
 <div>


 <app-header></app-header>

 <slot name='breadCrumb'></slot>
 <slot name='slider'></slot>
 <slot name='bannerCollection'></slot>
 <slot name='mainContent'></slot>

 


<app-footer></app-footer>
<app-extra></app-extra>

 </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Extra from '@/components/Extra.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    "app-footer" : Footer,
    "app-extra" : Extra,
    "app-header" : Header, 
  }
}
</script>
