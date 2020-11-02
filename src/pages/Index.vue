<template>
    <Layout>
      
        <section class="wow no-padding-bottom bg-index-position-mob bg-index-position-tab" :style="{backgroundColor: '#0865ab',backgroundImage: 'url('+require('../assets/images/index/final-star.svg')+')', backgroundAttachment: 'inherit',backgroundPosition: 'right top -20%',backgroundSize: '80%',backgroundRepeat: 'no-repeat'}">
            <div class="height-90px"></div>
            <div class="container position-relative container-custom">
                <div class="row">
                    <div class="col-12 col-lg-5 col-md-8  text-md-left text-center sm-padding-15px-lr padding-40px-bottom">
                        <div class="border-yellow-left d-flex flex-column align-items-start justify-content-center  d-inline">
                            <span class="margin-15px-bottom position-relative overflow-hidden text-white light-font text-medium sm-margin-5px-bottom  padding-20px-lr width-80 md-width-85 sm-width-100">Ideate. Create. Operate</span>
                            <h3 class="text-white-2 padding-20px-lr width-80 sm-width-100 semibold-font no-margin-bottom">
                                We curate <span class="fm-yellow">workshops</span> that combine innovation & entrepreneurship
                            </h3>
                        </div>
                        <!--  <a class="btn btn-small border-radius-4 sm-margin-lr-auto btn-transparent-white lg-margin-15px-bottom d-table d-lg-inline-block" href="evaluate.html">Assess Your Company</a> -->
                    </div>
                    <div class="col-12 col-lg-7 col-md-12">
                        <div class="row">
                            <!--  <div class="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center padding-40px-bottom" v-for="edge in $page.allEvents.edges" :key="edge.node.id">
                                <g-link :to="`/form?id=${edge.node.id}`">
                                    <g-image class="home-cards" :src="require(`../assets/images/home-card/${edge.node.image}`)"/>
                                </g-link>
                            </div> -->
                            <div class="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center padding-40px-bottom" v-for="edge in $page.allEvent.edges" :key="edge.node.id">
                                <g-link :to="`/event/${edge.node.id}`">
                                    <g-image class="home-cards" :src="`${edge.node.image}`" />
                                </g-link>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-12 d-flex justify-content-center padding-20px-bottom">
                                <a class="btn btn-large btn-yellow border-white text-extra-dark-gray border-radius-4 sm-margin-lr-auto d-table d-lg-inline-block" href="learning"><b>Click</b> to check out all our <b>workshops!</b></a>
                            </div>
                        </div>
                        <div class="row justify-content-center mob-d-none">
                            <div class="col-lg-12 col-md-12 d-flex justify-content-end padding-20px-bottom">
                                <img style="height: 100px;" src="../assets/images/index/minion.svg">
                            </div>
                        </div>
                    </div>
                    <div id="lg-md-d-none" class="col-sm-12 d-flex justify-content-center">
                        <img style="width: 50%; height: 100%;" src="../assets/images/index/rocket.svg" />
                    </div>
                </div>
            </div>
            <!-- end page title section -->
            <div style="background: linear-gradient(0deg, #f8f9fa 30% 70%, #ffffff 70% 30%);" class="position-relative">
                <div id="second" class="container container-custom">
                    <img class="discuss hidden-xs" src="../assets/images/index/discuss.svg" />
                    <div class="row justify-content-between">
                        <div class="col-lg-4 col-md-6 bg-extra-dark-gray sm-height-400px height-500px">
                            <img class="rocket-index tab-d-none" src="../assets/images/index/rocket.svg" />
                            <div class="height-200px sm-height-100px"></div>
                            <div class="padding-five-all">
                                <span class="text-white text-medium light-font">India is the <b>3rd biggest start-up hub</b> in the world
                                    but
                                    <b>Ranks 68 in Global Entrepreneurship Index (GEI)</b> with
                                    28.4 points</span>
                                <hr class="executive margin-25px-bottom" />
                                <div class="d-flex justify-content-between">
                                    <h3 class="fm-orange semibold-font text-md-left">Why?</h3>
                                    <span class="text-white sm-text-small text-small light-font text-right sm-width-70 width-50 padding-20px-left">Foundation of the startup culture lacks innovation and
                                        collective culturalism.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center sm-padding-30px-top padding-100px-top">
                        <div class="col-lg-8 col-md-6 text-center d-flex flex-column align-items-center">
                            <h6 class="text-extra-dark-gray width-80 alt-font">
                                You can contribute to India’s Global Entrepreneurship Index
                                (GEI) by
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- start tab style 01 section -->
        <section class="p-0">
            <div class="row tab-style2 bg-page-gray">
                <div class="col-12 col-lg-12">
                    <!-- start tab navigation -->
                    <ul class="nav nav-tabs alt-font text-uppercase text-small text-center font-weight-600 justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#tab_sec1" data-toggle="tab">Becoming an entrepreneur</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tab_sec2" data-toggle="tab">growing your existing venture</a>
                        </li>
                    </ul>
                    <!-- end tab navigation -->
                </div>
            </div>
            <div class="container tab-style2">
                <div class="tab-content">
                    <!-- start tab content -->
                    <div class="tab-pane med-text fade in active show" id="tab_sec1">
                        <div class="row">
                            <div class="col-12 col-md-6  sm-margin-30px-bottom ">
                                <div class="d-flex justify-content-center">
                                    <img src="../assets/images/index/entrepreneur.svg" alt="" class="w-50 h-50" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-5 col-md-6  text-md-left text-center">
                                <h6 class="semibold-font text-extra-dark-gray margin-20px-bottom text-uppercase">
                                    Becoming an entrepreneur
                                </h6>
                                <span class="text-extra-large alt-font text-extra-dark-gray margin-20px-bottom d-block">Have you always been a dreamer and a doer?</span>
                                <p class="light-font text-extra-dark-gray">
                                    You definitely have it in you to be an entrepreneur. All you
                                    need is experiential learning under startup guides.
                                </p>
                                <a class="btn btn-medium sm-margin-lr-auto btn-fm border-radius-4 d-table d-lg-inline-block" href="learning">Kickstart My Journey</a>
                            </div>
                        </div>
                    </div>
                    <!-- end tab content -->
                    <!-- start tab content -->
                    <div class="tab-pane fade in " id="tab_sec2">
                        <div class="row">
                            <div class="col-12 col-md-6 sm-margin-30px-bottom">
                                <div class="d-flex justify-content-center">
                                    <img style="height:40%;width:40%;" src="../assets/images/index/high.png" alt="" class="" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-5 col-md-6  text-md-left text-center">
                                <h6 class="semibold-font text-extra-dark-gray margin-20px-bottom text-uppercase">
                                    growing your existing venture
                                </h6>
                                <span class="text-extra-large alt-font  margin-20px-bottom d-block text-extra-dark-gray">As an entrepreneur, are you someone who continues to ask, “What’s next?”</span>
                                <p class="light-font text-extra-dark-gray">
                                    The next is to find the right journey for your venture; one that will lead you closer to your vision.
                                </p>
                                <a class="btn btn-medium sm-margin-lr-auto btn-fm border-radius-4 d-table d-lg-inline-block" href="services">The Next</a>
                            </div>
                        </div>
                    </div>
                    <!-- end tab content -->
                </div>
            </div>
        </section>
        <!-- end tab style 01 section -->
        <!-- start counter section -->
        <section>
            <div v-inview:once="startCount">
                <div class="container position-relative">
                    <div class="row justify-content-center sm-no-padding padding-100px-right padding-50px-left xl-no-padding-right">
                        <!-- counter box item -->
                        <div class="col-12 col-lg-3 col-md-6 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow Right">
                            <div class="feature-box-5 position-relative">
                                <div class="feature-content">
                                    <h5 class="d-inline text-extra-dark-gray light-font mb-0">
                                        <countTo ref="count" :startVal='start' :endVal='hapEnd' :duration='6000'></countTo>
                                    </h5>
                                    <span class="text-extra-large d-inline text-extra-dark-gray light-font mb-0">+</span>
                                    <span class="margin-10px-top light-font d-block text-small text-uppercase position-relative top-minus4">Happy clients</span>
                                    <div class="center-mob margin-10px-top separator-line-horrizontal-medium-light2 executive text-center"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- counter box item -->
                        <div class="col-12 col-lg-3 col-md-6 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow Right">
                            <div class="feature-box-5 position-relative">
                                <div class="feature-content">
                                    <h5 class="d-inline light-font text-extra-dark-gray mb-0">
                                          <countTo  ref="count1"   :startVal='start' :endVal='currEnd' :duration='6000'></countTo>
                                    </h5>
                                    <span class="text-extra-large d-inline text-extra-dark-gray light-font mb-0">+</span>
                                    <span class="light-font margin-10px-top d-block text-small text-uppercase position-relative top-minus4">Curations</span>
                                    <div class="center-mob margin-10px-top separator-line-horrizontal-medium-light2 executive text-center"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- counter box item -->
                        <div class="col-12 col-lg-3 col-md-6 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow Right">
                            <div class="feature-box-5 position-relative">
                                <div class="feature-content">
                                    <h5 class="d-inline light-font text-extra-dark-gray mb-0">
                                            <countTo ref="count2"  :startVal='start' :endVal='innEnd' :duration='6000'></countTo>
                                    </h5>
                                    <span class="text-extra-large d-inline text-extra-dark-gray light-font mb-0">+</span>
                                    <span class="light-font margin-10px-top d-block text-small text-uppercase position-relative top-minus4">Innovations</span>
                                    <div class="center-mob margin-10px-top separator-line-horrizontal-medium-light2 executive text-center"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- counter box item -->
                        <div class="col-12 col-lg-3 col-md-6 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow Right">
                            <div class="feature-box-5 position-relative">
                                <div class="feature-content">
                                    <h5 class="d-inline text-extra-dark-gray light-font mb-0">
                                          <countTo ref="count3"  :startVal='start' :endVal='entEnd' :duration='6000'></countTo>
                                    </h5>
                                    <span class="text-extra-large d-inline text-extra-dark-gray light-font mb-0">+</span>
                                    <span class="margin-10px-top d-block text-small text-uppercase position-relative light-font top-minus4">Entrepreneurs</span>
                                    <div class="center-mob margin-10px-top separator-line-horrizontal-medium-light2 executive text-center"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                    </div>
                    <div class="row justify-content-center">
                        <div class="d-flex width-100 two-counter-blob position-absolute justify-content-between align-items-end">
                            <img class="sm-height-50px" src="../assets/images/learning/left-blob.svg" />
                            <img class="sm-height-70px" src="../assets/images/learning/right-blob.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end counter section -->
        <!-- start alternate-section -->
        <section class="wow no-padding-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6 p-0 sm-padding-30px-bottom">
                        <img src="../assets/images/index/chadda.jpg" />
                    </div>
                    <div class="col-12 col-lg-6 text-center d-flex flex-column align-items-center justify-content-center padding-five-all">
                        <h5 class="alt-font font-weight-600 text-extra-dark-gray mx-auto margin-35px-bottom width-80 md-width-80 xl-width-65">
                            Do you want to know the status of your business?
                        </h5>
                        <p class="font-weight-300 xl-width-55 width-70 md-width-70">
                            You can evaluate your business by filling our evaluation form.
                            Post which, you can find any existing gaps in your business and we
                            can work on different ways to mitigate those gaps.
                        </p>
                        <div class="padding-10px-top">
                            <a class="btn btn-medium btn-fm margin-15px-all border-radius-4 d-table d-lg-inline-block d-md-inline-block sm-width-80" href="contact-b">Discuss it</a>
                            <a class="btn btn-medium btn-fm margin-15px-all border-radius-4 d-table d-lg-inline-block d-md-inline-block sm-width-50" href="evaluate">Evaluate it</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6 text-center d-flex flex-column justify-content-center align-items-center padding-five-all sm-padding-30px-bottom">
                        <h5 class="alt-font font-weight-600 xl-width-65 md-width-80 text-extra-dark-gray margin-35px-bottom width-80">
                            What’s the use of an innovation consultant?
                        </h5>
                        <p class="font-weight-300 width-70 xl-width-55 md-width-70">
                            Imagine having different roadblocks in your business; from the
                            financial crisis, lack of engagement, reduction in sales to an
                            unstructured business plan. An innovation consultant clears all
                            these roadblocks for your business to run smoothly and
                            successfully.
                        </p>
                        <div class="padding-10px-top">
                            <a class="btn btn-medium btn-fm border-radius-4 d-table d-lg-inline-block md-margin-lr-auto" href="portfolio">Our works</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 p-0">
                        <img src="../assets/images/index/bottom.jpg" />
                    </div>
                </div>
            </div>
        </section>
        <!-- end alternate section -->
        <!-- start testimonial slider style 02 section -->
        <section class="bg-black">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7 text-center margin-50px-bottom sm-margin-40px-bottom">
                        <div class="position-relative overflow-hidden w-100">
                            <h6 class=" alt-font">What we have to say</h6>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <HomeSlider />
                </div>
            </div>
        </section>
        <!-- end testimonial slider style 02 section -->
        <!-- client carousel style 1 -->
        <section class="wow bg-page-gray">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7 text-center  sm-margin-40px-bottom">
                        <div class="position-relative overflow-hidden w-100">
                            <h6 class=" text-extra-dark-gray text-outside-line-full alt-font">Clientele
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <Sliderone />
                </div>
            </div>
        </section>
        <!-- client carousel style 1 end-->
    </Layout>
</template>
<page-query>
  query{
  allEvent{
    edges{
      node{
      id
       image
      }
    }
  }
}
</page-query>
<script>
import Sliderone from '@/components/Sliderone'
import HomeSlider from '@/components/HomeSlider'
export default {
    name: 'Index',
    components: {
        Sliderone,
        HomeSlider
    },
    created() {
      

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
                   this.$refs['count3'].start()
                
            }
            $v.exit = (el) => {
                /* logic code */
            }
        },

    },
    data() {
        return {
            results: [],
            imaage:[],
            start: 0,
            hapEnd: 50,
            currEnd:10,
            innEnd:60,
            entEnd:100,
            loading: true
        }

    },
}
</script>
<style scoped>
</style>