<template>
 <app-master>


    <div slot='breadCrumb'>
        <app-breadcrumb title="review"></app-breadcrumb>
    </div>


   <div slot="mainContent">
    <!--review start-->
    <section class="review  section-big-py-space">
            <div class="container">
                <div class="row review-block">
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/1.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/2.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/3.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/1.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/2.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="review-box"><img class="img-fluid " src="/assets/images/avtar/3.jpg" alt="review" >
                            <h5>John Martin</h5>
                            <ul class="rating-star">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <div class="review-message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <h6>(21 Jannuary 2019 at 9:29AM )</h6>
                        </div>
                    </div>
                </div>
            </div>
    </section>
<!--review end--> 
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
