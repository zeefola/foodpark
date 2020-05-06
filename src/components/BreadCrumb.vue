
<template>

    <!-- breadcrumb start -->
    <div class="breadcrumb-main ">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb-contain">
                        <div>
                            <h2>{{ title }}</h2>
                            <ul>
                                <router-link tag="li" to='/'> <a> home </a></router-link>
                                <li><i class="fa fa-angle-double-right"></i></li>
                                <li><a href="#">{{ title }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb End -->
  
</template>

<script>
export default {
  name: 'BreadCrumb',
  props:['title'],
  data(){
    return {

    }
  }
}
</script>

<style>


</style>



