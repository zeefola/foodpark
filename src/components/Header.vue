<template>
  
  

<!--header start-->
<header>
    <div class="mobile-fix-option"></div>
    <div class="top-header top-header-inverse">
        <div class="custom-container">
            <div class="row">
                <div class="col-xl-5 col-md-7 col-sm-6">
                    <div class="top-header-left">
                        <div class="shpping-order">
                            <h6>free shipping on order over $99 </h6>
                        </div>
                        <div class="app-link">
                            <h6>
                                Download aap
                            </h6>
                            <ul>
                                <li><a><i class="fa fa-apple" ></i></a></li>
                                <li><a><i class="fa fa-android" ></i></a></li>
                                <li><a><i class="fa fa-windows" ></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-md-5 col-sm-6">
                    <div class="top-header-right">
                        <div class="top-menu-block">
                            <ul>
                                 <router-link to="/store-locations" tag="li"> <a>Store location</a></router-link>
                               
                                <router-link to="/dashboard" tag="li"> <a>My Account</a></router-link>
                                <router-link to="/contact" tag="li"> <a>help & contact</a></router-link>
                                <router-link to="/faq" tag="li"> <a>FAQ</a></router-link>
                                
                               
                            </ul>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layout-header1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-menu-block">
                        <div class="menu-left">
                            <div class="sm-nav-block">
                                <span class="sm-nav-btn"><i class="fa fa-bars"></i></span>
                                <ul class="nav-slide">
                                    <li>
                                        <div class="nav-sm-back">
                                            back <i class="fa fa-angle-right pl-2"></i>
                                        </div>
                                    </li>
                                    <li> <a href="#">foodgrains</a></li>
                                    <li> <a href="#">bakery</a></li>
                                    <li> <a href="#">beverage</a></li>
                                    <li> <a href="#">snacks</a></li>
                                    <li> <a href="#">kitchen</a></li>
                                    <li> <a href="#">beauty</a></li>
                                    <li> <a href="#">FRESH FRUIT</a></li>
                                    <li> <a href="#">banana</a></li>
                                    <li> <a href="#">kiwi</a></li>
                                    <!-- <li> <a href="#">mangosteen</a></li>
                                    <li> <a href="#">grape</a></li>
                                    <li> <a href="#">zucchini</a></li>
                                    <li class="mor-slide-open">
                                        <ul>
                                            <li> <a>drangon fruits</a></li>
                                            <li> <a href="#">kiwi</a></li>
                                            <li>  <a href="#">mangosteen</a></li>
                                            <li><a href="#">grape</a></li>
                                            <li> <a href="#">zucchini</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="mor-slide-click">
                                            mor category
                                            <i class="fa fa-angle-down pro-down" ></i>
                                            <i class="fa fa-angle-up pro-up" ></i>
                                        </a>
                                    </li> -->
                                </ul>
                            </div>
                            <div class="brand-logo">
                                <router-link to="/" >
                                      <img src="/assets/images/layout-6/logo/logo.png" class="img-fluid  " alt="logo-header">
                                </router-link>
                                
                            </div>
                        </div>
                        <div class="menu-right">
                            <div class="toggle-block">
                                <nav id="main-nav">
                                    <div class="toggle-nav"><i class="fa fa-bars sidebar-bar"></i></div>
                                    <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                                        <li>
                                            <div class="mobile-back text-right">Back<i class="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                        </li>
                                        <!--HOME-->
                                        <li>

                                            <router-link to="/" > Home </router-link>
                                            
                                
                                        </li>
                                        <!--HOME-END-->

                                        <li><a href="#">Products</a> </li>
                                         <li><a href="#">Categories</a> </li>
                                        

                                       
                                       
                                       

                                        <!--pages-meu start-->
                                        <li>
                                            <a href="#">FAQ</a>
                                            
                                        </li>
                                        <!--product-end end-->

                                        <!--blog-meu start-->
                                        <li>
                                            <a href="#">blog</a>
                                           
                                        </li>
                                        <!--blog-meu end-->
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <div class="icon-nav">
                                    <ul>
                                        <li class="mobile-user onhover-dropdown" onclick="openAccount()"><a href="#"><i class="icon-user"></i></a>
                                        </li>
                                        <li class="mobile-wishlist" onclick="openWishlist()">
                                            <a href="#">
                                                <i class="icon-heart"></i>
                                                <div class="cart-item"><div>0 item<span>wishlist</span></div></div></a></li>
                                        <!-- <li class="mobile-search"><a href="#"><i class="icon-search"></i></a>
                                            <div class ="search-overlay">
                                                <div>
                                                    <span class="close-mobile-search">×</span>
                                                    <div class="overlay-content">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-xl-12">
                                                                    <form>
                                                                        <div class="form-group"><input type="text" class="form-control" id="exampleInputPassword1" placeholder="Search a Product"></div>
                                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></li> -->
                                        <li class="mobile-setting mobile-setting-hover" onclick="openSetting()"><a href="#"><i class="icon-settings"></i></a>
                                        </li>
                                    </ul>
                                    <div class="cart-block mobile-cart cart-hover-div" onclick="openCart()">
                                        <a href="#"><span class="cart-product">0</span><i class="icon-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="category-header category-header-6">
        <div class="custom-container">
            <div class="row">
                <div class="col">
                    <div class="navbar-menu">
                        <div class="category-left">
                            <div class=" nav-block">
                                <div class="nav-left">
                                    <nav class="navbar collapsed" data-toggle="collapse" data-target="#navbarToggleExternalContent">
                                        <button class="navbar-toggler" type="button">
                                            <span class="navbar-icon"><i class="fa fa-arrow-down"></i></span>
                                        </button>
                                        <h5 class="mb-0 ml-3 text-white title-font">Shop by category</h5>
                                    </nav>
                                    <div class="collapse nav-desk" id="navbarToggleExternalContent">
                                        <ul class="nav-cat title-font mt-0">
                                            <li> <img src="/assets/images/layout-1/nav-img/01.png" alt="category-product"> <a href="#">foodgrains</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/02.png" alt="category-product"> <a href="#">bakery</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/03.png" alt="category-product"> <a href="#">beverage</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/04.png" alt="category-product"> <a href="#">snacks</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/05.png" alt="category-product"> <a href="#">kitchen</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/06.png" alt="category-product"> <a href="#">beauty</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/07.png" alt="category-product"> <a href="#">FRESH FRUIT</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/08.png" alt="category-product"> <a href="#">banana</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/09.png" alt="category-product"> <a href="#">kiwi</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/10.png" alt="category-product"> <a href="#">mangosteen</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/11.png" alt="category-product"> <a href="#">grape</a></li>
                                            <li> <img src="/assets/images/layout-1/nav-img/12.png" alt="category-product"> <a href="#">zucchini</a></li>
                                      
                                            <li>
                                                <a class="mor-slide-click">mor category <i class="fa fa-angle-down pro-down"></i><i class="fa fa-angle-up pro-up"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="input-block">
                                <div class="input-box">
                                    <form class="big-deal-form">
                                        <div class="input-group ">
                                            <div class="input-group-prepend">
                                                <span class="search"><i class="fa fa-search"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Search a Product" >
                                            <div class="input-group-prepend">
                                                <select>
                                                    <option>All Category</option>
                                                    <option>indurstrial</option>
                                                    <option>sports</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="category-right">
                            <div class="contact-block">
                                <div>
                                    <i class="fa fa-volume-control-phone"></i>
                                    <span>call us<span>123-456-76890</span></span>
                                </div>
                            </div>
                            <div class="btn-group">
                                <div  class="gift-block" data-toggle="dropdown" >
                                    <div class="grif-icon">
                                        <i class="icon-gift"></i>
                                    </div>
                                    <div class="gift-offer">
                                        <p>gift box</p>
                                        <span>Festivel Offer</span>
                                    </div>
                                </div>
                                <div class="dropdown-menu gift-dropdown">
                                    <div class="media">
                                        <div  class="mr-3">
                                            <img src="/assets/images/icon/1.png" alt="Generic placeholder image">
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0">Billion Days</h5>
                                            <p><img src="/assets/images/icon/currency.png" class="cash" alt="gift"> Flat Rs. 270 Rewards</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div  class="mr-3">
                                            <img src="/assets/images/icon/2.png" alt="Generic placeholder image">
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0">Fashion Discount</h5>
                                            <p><img src="/assets/images/icon/fire.png"  class="fire" alt="gift">Extra 10% off (upto Rs. 10,000*) </p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div  class="mr-3">
                                            <img src="/assets/images/icon/3.png" alt="Generic placeholder image">
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0">75% off Store</h5>
                                            <p>No coupon code is required.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div  class="mr-3">
                                            <img src="/assets/images/icon/6.png" alt="Generic placeholder image">
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0">Upto 50% off</h5>
                                            <p>Buy popular phones under Rs.20.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div  class="mr-3">
                                            <img src="/assets/images/icon/5.png" alt="Generic placeholder image">
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0">Beauty store</h5>
                                            <p><img src="/assets/images/icon/currency.png" class="cash" alt="gift"> Flat Rs. 270 Rewards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!--header end-->



</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
      
    }
  }
}
</script>

<style>


</style>


