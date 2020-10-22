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
                <div class="col-12 text-center height-500px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/ideotic/ideotic.png" alt="" data-no-retina=""/>
                </div>
            </div>
            <!--end- banner-image-->
            <!--project-info-->
            <div class="row padding-30px-tb padding-50px-lr">
                <div class="col-12 col-lg-6 md-margin-50px-bottom text-md-left text-center sm-margin-30px-bottom wow ">
                    <h3 class="alt-font text-extra-dark-gray margin-10px-bottom">Ideotic</h3>
                    <span>Business Development + Outreach</span>
                    <p class="margin-30px-top font-weight-300 line-height-30">Ideotic is a tech service company that functions from Bangalore, India. Currently, Ideotic offers a string of services and products including mobile applications, data trove, cloud, and website services among others.</p>
                    <div class="">
                        <ul class="medium-icon">
                            <li class="no-margin-left"><a  href="https://www.goideotic.com" target="_blank"><i class="fa fa-globe"></i><span></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 text-md-left text-center offset-lg-2 wow ">
                    <ul class="list-style-8 margin-twelve-left project-font">
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Founder</span>Prithvi Raj S Amin & Razi Abbas</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Industry</span>Tech service</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Services We Rendered</span>Incorporation<br> Business plan and model<br> Business development<br> Brand building<br> Project <br>Networking Financial management
                        </li>      
                    </ul>
                </div>
            </div>
            <!--end-project-info-->
            <!--image-one and two-->
            <div class="row justify-content-center">
                <div class="col-12 text-center height-650px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/ideotic/sd.jpg" alt="" data-no-retina=""/>
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/ideotic/footsapp.jpg" alt="" data-no-retina=""/>
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
                    <span class="light-font line-height-35 text-large  text-center width-80 text-extra-dark-gray padding-10px-bottom">The First Main team has been instrumental in bootstrapping our company from the ground up. It is backed by an enthusiastic team that is proficient and through them we were able to extend our services overseas.
                     </span>
                    <span class="text-uppercase d-block project-font text-large fm-orange">Prithvi Raj S Amin</span>
                    <span class="text-uppercase d-block project-font text-small margin-5px-top">Founder/ceo, Ideotic</span>
                </div>
                <div class="col-12 text-center height-650px overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/ideotic/peach.jpg" alt="" data-no-retina=""/>
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