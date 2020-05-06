<template>
 <app-master>


   <div slot="mainContent">
        <!-- section start -->
        <section class="p-0 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="error-section">
                            <h1>404</h1>
                            <h2>page not found</h2>
                            <router-link to="/" class="btn btn-normal"> back to home</router-link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section ends -->
   </div>
  
  


 </app-master>
</template>

<script>
// @ is an alias to /src
import Master from '@/components/Master.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
export default {
  name: 'Error',
  components: {
    "app-master": Master,
    "app-breadcrumb": BreadCrumb
  }
}
</script>
