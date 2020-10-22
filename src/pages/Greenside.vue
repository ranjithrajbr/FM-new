<template>
	<Layout :theme="theme">
		<section class="wow position-relative  sm-padding-100px-top bg-light-gray">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-7 text-center margin-100px-bottom sm-margin-10px-bottom">
                    <div class="position-relative overflow-hidden w-100">
                        <span class="text-small text-extra-dark-gray light-font text-outside-line-full">Past Events</span>
                        <h3 class="margin-10px-top semibold-font text-extra-dark-gray">The Greener Side</h3>
                    </div>
                </div>
            </div>
            <!--project-info-->
            <div class="row padding-50px-lr">
                <div class="col-12 col-lg-6 md-margin-50px-bottom text-md-left text-center sm-margin-30px-bottom wow ">
                    <p class="margin-30px-top light-font text-extra-dark-gray">The Greener Side is an eco-friendly product only launchpad that was curated by First Main across various campuses in Bangalore. Students with green product or service ideas were given a platform to pitch their business ideas to industry experts with the aim of converting it into a workable business model.</p>
                    <div v-inview:once="startCount" class="d-flex justify-content-between">
                        <div class="">
                            <h5 class="text-extra-dark-gray font-weight-300 margin-three-bottom d-inline">
                                  <countTo ref="count" :startVal='start' :endVal='iEnd' :duration='6000'></countTo>
                            </h5>
                            <h5 class="margin-three-bottom d-inline-block text-extra-dark-gray">+</h5>
                            <span class="text-small text-medium-gray text-uppercase d-block">Ideas</span>
                            <div class="separator-line-horrizontal-medium-light2 executive d-inline-block"></div>
                        </div>
                        <div class="">
                            <h5 class="text-extra-dark-gray font-weight-300 margin-three-bottom  d-inline">
                                 <countTo ref="count1" :startVal='start' :endVal='jEnd' :duration='6000'></countTo>
                            </h5>
                            <h5 class="margin-three-bottom d-inline-block text-extra-dark-gray">+</h5>
                            <span class="text-small text-medium-gray text-uppercase d-block">Judges</span>
                            <div class="separator-line-horrizontal-medium-light2 executive d-inline-block"></div>
                        </div>
                        <div class="">
                            <h5 class="text-extra-dark-gray font-weight-300 margin-three-bottom  d-inline">
                                 <countTo ref="count2" :startVal='start' :endVal='sEnd' :duration='6000'></countTo>
                            </h5>
                            <h5 class="margin-three-bottom d-inline-block text-extra-dark-gray">+</h5>
                            <span class="text-small text-medium-gray text-uppercase d-block">Students</span>
                            <div class="separator-line-horrizontal-medium-light2 executive d-inline-block"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-md-left text-center offset-lg-2 wow ">
                    <ul class="list-style-8 margin-twelve-left project-font">
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">Collaborators</span>Nat Geo Wild<br> Echoes of Earth</li>
                        <li class="text-uppercase text-small"><span class="d-block text-medium text-extra-dark-gray">venue</span>St. Josephs College of Commerce<br> St. Josephs College<br> Mount Carmel College<br> Krupanidhi Institute<br> Christ university</li>
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
                 <div class="col-12 text-center  overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/past-event/4.png" alt="" data-no-retina=""/>
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/past-event/1.png" alt="" data-no-retina=""/>
                </div>
                <div class="col-12 text-center  overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/green/snoop.jpg" alt="" data-no-retina=""/>
                </div>
                <div class="col-12 text-center overflow-hidden lg-height-auto md-bottom--minus50 lg-position-relative wow  sm-bottom-0">
                    <g-image src="../assets/images/green/band.jpg" alt="" data-no-retina=""/>
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
                        <a href="Incubator">
                            <i class="ti-arrow-left blog-nav-icon"></i>
                            Pre-Incubator Program
                        </a>
                    </div>
                </div>
                <div class="width-45 text-right">
                    <div class="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                        <span class="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Next Project</span>
                        <a href="Workshop">
                            <i class="ti-arrow-right blog-nav-icon"></i>
                           First Main Workshops
                        </a>
                    </div>
                </div>
            </div>
            <div class="row padding-80px-top padding-10px-bottom">
                <div class="col-md-4 col-sm-4 d-flex justify-content-center img-mob">
                    <img style="height: 100px;" src="../assets/images/test.svg">
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center ">
                    <h7 class="sm-margin-two-tb sm-text-center light-font text-extra-dark-gray">We are here to <b>ideate, create</b> and <b>operate</b> for you.</h7>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center ">
                    <a href="contact" class="btn margin-15px-bottom btn-medium btn-rounded btn-transparent-dark-gray">Contact us</a>
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
        theme:true,
        start:0,
        iEnd:25,
        jEnd:15,
        sEnd:3000
    }
  },
    methods: {
        startCount($v) {
            /**
              * on and once argument only
                ~ el → dom element
            **/
            $v.enter = (el) => {
                /* logic code */
                this.$refs['count'].start()
                 this.$refs['count1'].start()
                  this.$refs['count2'].start()
                
            }
            $v.exit = (el) => {
                /* logic code */
            }
        },

    },
}
</script>

<style lang="css" scoped>
</style>