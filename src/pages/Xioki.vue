<template>
	<Layout>
		<div class="sm-height-200px height-500px background-image position-absolute single-port">
        <g-image src="../assets/images/xoiki/test-banner.png"/>
    </div>
    <!-- start page title section -->
    <section class="wow  sm-padding-60px-top position-relative no-padding-bottom">
        <div class="container">
            <!--banner-image-->
            <div class="row justify-content-center">
                <div class="col-12 text-center height-600px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/xoiki/banner.jpg" alt="" data-no-retina=""/>
                </div>
            </div>
            <!--end- banner-image-->
            <!--project-info-->
            <div class="row padding-30px-tb padding-50px-lr">
                <div class="col-12 col-lg-6 md-margin-50px-bottom text-md-left text-center sm-margin-30px-bottom wow ">
                    <h3 class="alt-font text-extra-dark-gray margin-10px-bottom">Xioki</h3>
                    <span>Ideation + Branding + Identity</span>
                    <p class="margin-30px-top font-weight-300 line-height-30">Xioki is a simple (user-friendly) platform with rich features to enable anyone to create and sell their products (apparel) without any hassles and at no cost at all. With the vision of having a global presence, a humongous market in clothing exists.</p>
                    <div class="">
                        <ul class="medium-icon">
                            <li class="no-margin-left"><a href="https://www.xioki.com" target="_blank"><i class="fa fa-globe"></i><span></span></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/xiokiofficial/" target="_blank"><i class="fab fa-instagram"></i><span></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 text-md-left text-center offset-lg-2 wow ">
                    <ul class="list-style-8 margin-twelve-left project-font">
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Founder</span>Bharath Hegde & Darshan Desai</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Industry</span>Fashion & Apparel</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Services We Rendered</span>Tech product<br> Branding<br> Formulating a business plan <br>Strategizing<br> Execution<br> Financial planning<br> Community on-boarding <br>Incorporation<br> Marketing
                        </li>
                    </ul>
                </div>
            </div>
            <!--end-project-info-->
            <!--image-one and two-->
            <div class="row justify-content-center">
                <div class="col-12 text-center height-650px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/xoiki/xioki_1.jpg" alt="" data-no-retina=""/>
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/xoiki/xioki_2.jpg" alt="" data-no-retina=""/>
                </div>
            </div>
            <!--end-image-one and two-->
        </div>
    </section>
    <!-- end page title section -->
    <!-- start quote,image,social-icon -->
    <section class="wow  padding-20px-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-9 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom d-flex flex-column align-items-center last-paragraph-no-margin">
                     <i class="fas fa-quote-left icon-medium fm-orange d-block margin-25px-bottom"></i>
                    <span class="light-font text-large line-height-35 text-center width-80 text-extra-dark-gray padding-10px-bottom">Working with First Main is like working with your own team members. Every team member is equally active and provides solutions to the problems. They come up with new ideas, brainstorm them and also implement it for their clients. We have been associated with First Main for almost 2 years and have seen immense growth in our business.</span>
                    <span class="text-uppercase d-block text-large project-font fm-orange">BHARATH HEGDE</span>
                    <span class="text-uppercase d-block text-small project-font margin-5px-top">FOUNDER, XIOKI</span>
                </div>
                <div class="col-12 text-center height-650px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/xoiki/xioki_3.jpg" alt="" data-no-retina=""/>
                </div>
            </div>
            <div class="row justify-content-center padding-50px-tb">
                <div class="col-12 col-lg-9 col-md-8 md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                    <p class=" text-large  padding-20px-tb">Share our work</p>
                    <div class="social-icon-style-3">
                        <ul class="small-icon">
                            <li><a class="facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i><span></span></a></li>
                            <li><a class="twitter" href="http://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i><span></span></a></li>
                            <li><a class="instagram" href="http://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i><span></span></a></li>
                            <li><a class="linkedin" href="http://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i><span></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end quote,image,social-icon -->
    <!-- start form section -->
    <section class="wow  bg-page-gray padding-50px-bottom" id="start-your-project">
        <div class="container">
            <div class="row justify-content-center align-items-end">
                <div class="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                    <h5 class="alt-font  text-extra-dark-gray">Other projects for our amazing clients </h5>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
             <Slider/>
            </div>
        </div>
    </section>
	</Layout>
</template>

<script>
    import Slider from '@/components/PortfolioSlider'
export default {

  name: '	',
  components:{
    Slider
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>