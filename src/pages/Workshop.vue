<template>
	<Layout>
		 <section class="wow position-relative  sm-padding-100px-top bg-light-gray">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-7 text-center margin-100px-bottom sm-margin-10px-bottom">
                    <div class="position-relative overflow-hidden w-100">
                        <span class="text-small text-extra-dark-gray light-font text-outside-line-full">Past Events</span>
                        <h3 class="margin-10px-top semibold-font text-extra-dark-gray">First Main Workshops</h3>
                    </div>
                </div>
            </div>
            <!--project-info-->
            <div class="row padding-50px-lr">
                <div class="col-12 col-lg-6 md-margin-50px-bottom text-md-left text-center sm-margin-30px-bottom wow ">
                    <p class="margin-30px-top text-extra-dark-gray light-font">With a vision of building a start-up community, we conducted workshops at different educational institutions with an experimental curriculum through holistic pioneering. Our aim is to provide an opportunity for budding entrepreneurs to generate a business idea and convert that to a working innovation.</p>
                    <div class="">
                        <div class="">
                            <h5 class=" text-extra-dark-gray light-font margin-three-bottom timer d-inline" data-speed="2000" data-to="200">200</h5>
                            <h5 class="margin-three-bottom text-extra-dark-gray light-font d-inline-block text-extra-dark-gray">+</h5>
                            <span class="text-small text-medium-gray text-uppercase d-block">STUDENTS</span>
                            <div  class="width-10 separator-line-horrizontal-medium-light2 executive d-inline-block"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-md-left text-center offset-lg-2 wow ">
                    <ul class="list-style-8 margin-twelve-left project-font">
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">WORKSHOP 1</span>THE BULB THEORY<br> AT ST. JOSEPH’S COLLEGE OF COMMERCE</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">WORKSHOP 2</span>Business Plan Creation<br> at St. Joseph’s College of Commerce</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">WORKSHOP 3</span>How to prepare for a product/service pitch <br>at St. Joseph’s College</li>
                    </ul>
                </div>
            </div>
            <!--end-project-info-->
            <div class="row justify-content-center">
                <div class="d-flex width-90 spring-first-blob position-absolute justify-content-between align-items-end">
                    <img class="sm-height-50px" src="../assets/images/learning/left-blob.svg">
                    <img class="sm-height-70px" src="../assets/images/learning/right-blob.svg">
                </div>
            </div>
        </div>
    </section>
    <!-- end page title section -->
    <!-- Multiple-image -->
    <section class="wow  padding-20px-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <img src="../assets/images/idea-hack/1.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <img src="../assets/images/idea-hack/2.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <img :src="require('@/assets/images/idea-hack/3.jpg')" alt="" data-no-retina="">
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <img src="../assets/images/idea-hack/4.jpg" alt="" data-no-retina="">
                </div>
            </div>
        </div>
    </section>
    <!-- end Multiple image -->
    <!-- start form section -->
    <section class="wow  extra-color padding-10px-bottom">
        <div class="container-fluid p-0">
            <div class="row justify-content-between align-items-center bg-light-gray no-gutters padding-30px-lr md-padding-15px-lr">
                <div class="width-45 text-left">
                    <div class="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                        <span class="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Previous Project</span>
                        <a href="greenside.html">
                            <i class="ti-arrow-left blog-nav-icon"></i>
                            The Greener Side
                        </a>
                    </div>
                </div>
                <div class="width-45 text-right">
                    <div class="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                        <span class="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Next Project</span>
                        <a href="idea-hack.html">
                            <i class="ti-arrow-right blog-nav-icon"></i>
                           Ideathon + Hackathon
                        </a>
                    </div>
                </div>
            </div>
            <div class="row padding-80px-top padding-10px-bottom">
                <div class="col-md-4 col-sm-4 d-flex justify-content-center img-mob">
                    <img style="height: 100px;" src="../assets/images/test.svg">
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center ">
                    <h7 class="sm-margin-two-tb sm-text-center text-extra-dark-gray light-font">We are here to <b>ideate, create</b> and <b>operate</b> for you.</h7>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center ">
                    <a href="contact.html" class="btn margin-15px-bottom btn-medium btn-rounded btn-transparent-dark-gray">Contact us</a>
                </div>
            </div>
        </div>
    </section>
	</Layout>
</template>

<script>
export default {

  name: '	',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>