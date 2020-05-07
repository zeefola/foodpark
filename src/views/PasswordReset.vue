<template>
 <app-master>


    <div slot='breadCrumb'>
        <app-breadcrumb title="password reset"></app-breadcrumb>
    </div>


   <div slot="mainContent">
       
                    
                <!--section start-->
        <section class="login-page pwd-page section-big-py-space bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="theme-card">
                        <h3>Forget Your Password</h3>
                        <form class="theme-form">
                            <div class="form-row">
                                <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="email" placeholder="Enter Your Email" required="">
                                </div>
                                </div><a href="#" class="btn btn-normal">Submit</a>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Section ends-->



       
   </div>
  


  
  


 </app-master>
</template>

<script>
// @ is an alias to /src
import Master from '@/components/Master.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
export default {
  name: 'PasswordReset',
  components: {
    "app-master": Master,
    "app-breadcrumb": BreadCrumb
  }
}
</script>
