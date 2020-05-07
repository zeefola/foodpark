<template>
 <app-master>


    <div slot='breadCrumb'>
        <app-breadcrumb title="login"></app-breadcrumb>
    </div>


   <div slot="mainContent">
       
       <!--section start-->
        <section class="login-page section-big-py-space bg-light">
            <div class="custom-container">
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-8 offset-xl-4 offset-lg-3 offset-md-2">
                        <div class="theme-card">
                            <h3 class="text-center">Login</h3>
                            <form class="theme-form">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Email" required="">
                                </div>
                                <div class="form-group">
                                    <label for="review">Password</label>
                                    <input type="password" class="form-control" id="review" placeholder="Enter your password" required="">
                                </div>
                                <a href="#" class="btn btn-normal">Login</a>
                                
                                <router-link to="/password-reset" class="float-right txt-default mt-2" > Forgot your password? </router-link>
                            
                            </form>
                            <p class="mt-3">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                            
                            <router-link to="/register" class="txt-default pt-3 d-block" > Create an Account </router-link>
                          
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
  name: 'Login',
  components: {
    "app-master": Master,
    "app-breadcrumb": BreadCrumb
  }
}
</script>
