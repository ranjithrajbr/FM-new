<template>
    <Layout>
        <section class="bg-position-center-right-mob padding-60px-bottom position-relative  background-size-cover" :style="{
            backgroundImage:'url('+require('../assets/images/learning/banner-learn.svg')+')',
            backgroundColor:'#0865AB',
            backgroundPosition:'bottom 0px left 130px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat'}">
            <div class="container container-custom">
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-6 d-flex flex-column justify-content-center extra-small-screen text-md-left text-center sm-padding-15px-lr">
                        <h1 class="project-font text-white-2 margin-15px-bottom semibold-font text-uppercase">Workshops</h1>
                        <h6 class="px-3 light-font text-white">By <span class="text-white semibold-font">FIRST</span><span class="fm-orange semibold-font">MAIN</span></h6>
                    </div>
                </div>
                <div class="position-absolute bottom-0">
                    <a target="_blank">
                        <img class="sm-h-20px" style="height:50px;" src="../assets/images/learning/noun_movie ticket_1614519.svg">
                    </a>
                </div>
            </div>
        </section>
        <section class="pt-0">
            <div class="bg-fm-grey padding-60px-top">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="semibold-font text-center text-extra-dark-gray">Which workshop are you interested in?</h3>
                    </div>
                </div>
                <div class="container padding-40px-top">
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-4 padding-40px-bottom" v-for="edge in $page.allEvent.edges" :key="edge.node.id">
                            <a :href="`/event/${edge.node.id}`">
                                <img class="learn-cards" :src="`${edge.node.image}`" >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container padding-30px-lr position-relative">
                <div class=" row justify-content-center ">
                    <div class="width-90 d-flex justify-content-center padding-135px-top padding-20px-bottom  bg-fm-grey position-relative">
                        <div class="col-12 col-lg-8">
                            <p class="text-uppercase text-center alt-font fm-blue text-medium">We aim to build</p>
                            <h5 class="alt-font text-center text-extra-dark-gray text-medium padding-10px-bottom">entrepreneurs, problem solvers and changemakers through experiential learning in the space of entrepreneurship and innovation</h5>
                        </div>
                    </div>
                </div>
                <div class="row  justify-content-center">
                    <div class="d-flex width-80 e-learn-two-blob position-absolute justify-content-between align-items-end">
                        <img class="sm-height-50px" src="../assets/images/learning/left-blob.svg">
                        <img class="sm-height-70px" src="../assets/images/learning/right-blob.svg">
                    </div>
                </div>
                <div class="height-90px"></div>
                <section class="no-padding-bottom">
                    <div class="row justify-content-center">
                        <p class="text-uppercase text-center alt-font text-extra-large">Milestones to Entrepreneurship</p>
                        <div class="width-90 d-flex justify-content-center sm-padding-20px-top padding-60px-top">
                            <div class="row">
                                <div class="col-12 col-md-4 text-center text-md-left sm-margin-seven-bottom wow Up last-paragraph-no-margin">
                                    <div class="row m-0">
                                        <div class="col-12 col-lg-3 col-md-4 pl-0 sm-no-padding-right">
                                            <img class=" icon-learn icon-mob float-none float-md-left sm-margin-15px-bottom position-relative top-minus3" src="../assets/images/learning/workshop.svg" />
                                            <span class="separator-line-verticle-large starter float-right align-top margin-two-top d-none d-md-inline-block"></span>
                                        </div>
                                        <div class="col-12 col-lg-9 col-md-8 md-no-padding-lr">
                                            <span class="text-medium margin-four-bottom text-extra-dark-gray alt-font d-block">Workshops</span>
                                            <p>Experiential curriculum through holistic pioneering focusing on “involve, learn and enhance”.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 text-center text-md-left sm-margin-seven-bottom wow Up last-paragraph-no-margin">
                                    <div class="row m-0">
                                        <div class="col-12 col-lg-3 col-md-4 pl-0 sm-no-padding-right">
                                            <img class=" icon-learn icon-mob float-none float-md-left sm-margin-15px-bottom position-relative top-minus3" src="../assets/images/learning/ideathon.svg" />
                                            <span class="separator-line-verticle-large starter float-right align-top margin-two-top d-none d-md-inline-block"></span>
                                        </div>
                                        <div class="col-12 col-lg-9 col-md-8 md-no-padding-lr">
                                            <span class="text-medium margin-four-bottom text-extra-dark-gray alt-font d-block">Ideathon & Hackathon</span>
                                            <p>Our ideathons are curated to give budding changemakers a reality check and at the hackathon, a validated idea is converted to a prototype in less than 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 text-center text-md-left sm-margin-seven-bottom wow Up last-paragraph-no-margin">
                                    <div class="row m-0">
                                        <div class="col-12 col-lg-3 col-md-4 pl-0 sm-no-padding-right">
                                            <img class=" icon-learn icon-mob float-none float-md-left sm-margin-15px-bottom position-relative top-minus3" src="../assets/images/learning/launchpad.svg" />
                                            <span class="separator-line-verticle-large starter float-right align-top margin-two-top d-none d-md-inline-block"></span>
                                        </div>
                                        <div class="col-12 col-lg-9 col-md-8 md-no-padding-lr">
                                            <span class="text-medium margin-four-bottom text-extra-dark-gray alt-font d-block">Launchpad</span>
                                            <p>Launchpad participants can use the expert’s hindsight as a foresight. Mentors with experience and knowledge of the industry help participants launch their own businesses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </section>
        <div class="padding-40px-tb sm-padding-20px-tb"></div>
        <!--end-custom-section-->
        <section class="wow bg-light-gray border-line-tb padding-50px-tb">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <h5 class="text-center semibold-font text-extra-dark-gray no-margin-bottom">Mentor sessions. Pre-incubator. Podcasts. Courses. Lectures. Webinars. Demos.</h5>
                    </div>
                </div>
            </div>
        </section>
        <div class="padding-30px-tb sm-padding-20px-tb"></div>
        <section class="no-padding-bottom ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7 text-center margin-60px-bottom sm-margin-40px-bottom">
                        <div class="position-relative overflow-hidden w-100">
                            <h5 class="fm-orange semibold-font">Startup Guides</h5>
                            <p class="text-dark-gray">Our council of startup guides who are experienced entrepreneurs and innovators with enhanced knowledge of the industry they belong to. With this experience and knowledge, they have the skill to guide budding entrepreneurs and innovators.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="swiper-container  swiper-pagination-bottom">
                        <div class="swiper-wrapper">
                            <!-- start one row -->
                            <div class="swiper-slide">
                                <div class=" row">
                                    <div class="col-12 col-md-6 col-lg-3 margin-60px-bottom sm-margin-50px-bottom  team-style-1">
                                        <figure>
                                            <div class="team-image sm-width-100">
                                                <img src="../assets/images/learning/veeralijain.jpg" alt="">
                                                <div class="team-member-position text-center margin-25px-top">
                                                    <div class="text-extra-dark-gray margin-5px-bottom  text-large alt-font">Veerali Jain</div>
                                                    <div class="text-extra-small text-uppercase text-medium-gray">Founder, Love Local Community</div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="overlay-content text-center icon-social-extra-large">
                                                    <div class="separator-line-horrizontal-full starter margin-10px-tb sm-no-margin-top "></div>
                                                    <a href="https://www.instagram.com/veeralijain/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-instagram"></i></a>
                                                    <a href=" https://www.linkedin.com/in/veerali-jain-b92502180/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 margin-60px-bottom sm-margin-50px-bottom  team-style-1">
                                        <figure>
                                            <div class="team-image sm-width-100">
                                                <img src="../assets/images/learning/utkarshchoraria.jpg" alt="">
                                                <div class="team-member-position text-center margin-25px-top">
                                                    <div class="text-extra-dark-gray margin-5px-bottom text-large alt-font">Utkarsh Choraria</div>
                                                    <div class="text-extra-small text-uppercase text-medium-gray">Director of Operations & Sales, Sterling Sign Systems</div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="overlay-content text-center icon-social-extra-large">
                                                    <div class="separator-line-horrizontal-full starter margin-10px-tb sm-no-margin-top"></div>
                                                    <a href="https://www.instagram.com/utkimuffin/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-instagram"></i></a>
                                                    <a href="https://www.linkedin.com/in/utkarsh-choraria-578722101/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 margin-60px-bottom sm-margin-50px-bottom  team-style-1">
                                        <figure>
                                            <div class="team-image sm-width-100">
                                                <img src="../assets/images/learning/chhayadabas.jpg" alt="">
                                                <div class="team-member-position text-center margin-25px-top">
                                                    <div class="text-extra-dark-gray margin-5px-bottom  text-large alt-font">Chhaya Dabas</div>
                                                    <div class="text-extra-small text-uppercase text-medium-gray"> Founder, Baatein</div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="overlay-content text-center icon-social-extra-large">
                                                    <div class="separator-line-horrizontal-full starter margin-10px-tb sm-no-margin-top"></div>
                                                    <a href="https://www.instagram.com/chhaya_dabas/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-instagram"></i></a>
                                                    <a href=" https://www.linkedin.com/in/chhayadabas/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 margin-60px-bottom sm-margin-50px-bottom  team-style-1">
                                        <figure>
                                            <div class="team-image sm-width-100">
                                                <img src="../assets/images/learning/sanamjain.jpg" alt="">
                                                <div class="team-member-position text-center margin-25px-top">
                                                    <div class="text-extra-dark-gray margin-5px-bottom text-large alt-font">Sanam Jain</div>
                                                    <div class="text-extra-small text-uppercase text-medium-gray">Founder, Bridge Cultures</div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="overlay-content text-center icon-social-extra-large">
                                                    <div class="separator-line-horrizontal-full starter margin-10px-tb sm-no-margin-top"></div>
                                                    <a href="https://www.instagram.com/sanamsafarnama/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-instagram"></i></a>
                                                    <a href="https://www.linkedin.com/in/sanam-jain-b4225434/" class="text-extra-dark-gray margin-10px-lr" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <!-- end one row -->
                        </div>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end team slider style 01 -->
        <!--past-events-->
        <section class="wow padding-80px-top  pb-0">
            <div class="container">
                <div class="text-md-left half-border-top padding-20px-bottom">
                    <h6 class="text-extra-dark-gray alt-font">Past Events</h6>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <div class="filter-content overflow-hidden">
                            <div class="portfolio-grid work-4col hover-option5 no-margin-lr">
                                <div class="grid-item web branding design last-paragraph-no-margin">
                                <a href="/greenside">
                                    <figure>
                                        <div class="portfolio-img"><img src="../assets/images/learning/green.jpg" alt="" />
                                            <div class="position-absolute title-top title-vanish">
                                                <h6 class=" alt-font font-weight-700 text-uppercase text-white">The Greener Side</h6>
                                                <div class="separator-line-horrizontal-medium-light2 executive margin-30px-top"></div>
                                            </div>
                                        </div>
                                        <figcaption>
                                            <div class="portfolio-hover-main text-left">
                                                <div class="portfolio-hover-box align-bottom">
                                                    <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                        <h6 class="text-white-2 d-block light-font">The Greener Side</h6>
                                                        <p class="text-white-2 light-font">Sustainable green product launchpad curated at educational institutions in Bangalore.</p>
                                                        <div class="executive margin-55px-top position-relative separator-line-horrizontal-medium-light2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="filter-content overflow-hidden">
                            <div class="portfolio-grid work-4col hover-option5 no-margin-lr">
                                <div class="grid-item web branding design last-paragraph-no-margin">
                                <a href="/workshop">
                                        <figure>
                                            <div class="portfolio-img bg-extra-dark-gray "><img src="../assets/images/learning/fm-wrk.jpg" alt="">
                                                <div class="position-absolute title-top title-vanish">
                                                    <h6 class=" bg-gray alt-font font-weight-700 text-uppercase text-white">First Main Workshops</h6>
                                                    <div class="separator-line-horrizontal-medium-light2 executive margin-30px-top"></div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="portfolio-hover-main text-left">
                                                    <div class="portfolio-hover-box align-bottom">
                                                        <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                            <h6 class="text-white-2 d-block light-font">First Main Workshops</h6>
                                                            <p class="text-white-2 light-font">Entrepreneurship workshops curated by First Main based on an experiential curriculum and practical learning.</p>
                                                            <div class="executive margin-55px-top position-relative separator-line-horrizontal-medium-light2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="filter-content overflow-hidden">
                            <div class="portfolio-grid work-4col hover-option5 no-margin-lr">
                                <div class="grid-item web branding design last-paragraph-no-margin">
                                 <a href="/Ideathon">
                                        <figure>
                                            <div class="portfolio-img"><img src="../assets/images/learning/idea-hack.jpg" alt="" />
                                                <div class="position-absolute title-top title-vanish">
                                                    <h6 class="bg-gray alt-font font-weight-700 text-uppercase text-white ">Ideathon + Hackathon</h6>
                                                    <div class="separator-line-horrizontal-medium-light2 executive margin-30px-top"></div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="portfolio-hover-main text-left">
                                                    <div class="portfolio-hover-box align-bottom">
                                                        <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                            <h6 class="text-white-2 d-block light-font">Ideathon + Hackathon</h6>
                                                            <p class="text-white-2 light-font">2 day Ideathon and Hackathon curation to select finalists for Smart India Hackathon.</p>
                                                            <div class="executive margin-55px-top position-relative separator-line-horrizontal-medium-light2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </a>
                            </div>
                            </div>
                        </div>
                    </div>
                      <div class="col-12 col-lg-3">
                        <div class="filter-content overflow-hidden">
                            <div class="portfolio-grid work-4col hover-option5 no-margin-lr">
                                <div class="grid-item web branding design last-paragraph-no-margin">
                                 <a href="/Incubator">
                                        <figure>
                                            <div class="portfolio-img"><img src="../assets/images/learning/pre-incub.jpg" alt="">
                                                <div class="position-absolute title-top title-vanish">
                                                    <h6 class=" alt-font font-weight-700 text-uppercase text-white ">Pre-incubator Program</h6>
                                                    <div class="separator-line-horrizontal-medium-light2 executive margin-30px-top"></div>
                                                </div>
                                            </div>
                                            <figcaption>
                                                <div class="portfolio-hover-main text-left">
                                                    <div class="portfolio-hover-box align-bottom">
                                                        <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                            <h6 class="text-white-2 d-block light-font">Pre-incubator Program</h6>
                                                            <p class="text-white-2 light-font">36 hour practical training for budding entrepreneurs.</p>
                                                            <div class="executive margin-55px-top position-relative separator-line-horrizontal-medium-light2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--past-events-end-->
        <!--testinomials-->
        <section class=" bg-black">
            <div class="container">
                <div class="row">
                    <!-- start testimonial item -->
                    <div class="col-12 col-md-4 md-margin-four-bottom text-white-2 text-center sm-margin-twelve-bottom wow Right padding-30px-all last-paragraph-no-margin">
                        <p class="width-90 mx-auto">The First Main has done a wonderful job in bringing impactful stories to the generation that holds the power to make a change. I thank and congratulate The First main, all the other collaborators and supporters who made this event come to life.</p>
                        <i class="fas fa-quote-left icon-small fm-yellow d-block margin-30px-top margin-15px-bottom"></i>
                        <span class="project-font font-weight-600 text-medium margin-5px-bottom d-block line-height-10 alt-font">Pradeep Hegde</span>
                        <span class="project-font text-extra-small text-uppercase text-medium-gray">Nat Geo Wild Filmmaker & Photographer</span>
                    </div>
                    <!-- end testimonial item -->
                    <!-- start testimonial item -->
                    <div class="col-12 col-md-4 padding-30px-all md-margin-four-bottom text-center 
                text-white-2 sm-margin-twelve-bottom wow Right last-paragraph-no-margin">
                        <p class="width-90 mx-auto">The moment "First Main" got in touch with me I was impressed that such a young organization fuelled with young blood is taking upon a great challenge and driving the responsibility across the young and budding minds.</p>
                        <i class="fas fa-quote-left icon-small fm-yellow d-block margin-30px-top margin-15px-bottom"></i>
                        <span class="font-weight-600 text-medium margin-5px-bottom project-font d-block line-height-10 alt-font">Dr. C Satheesh Kumar Reddy</span>
                        <span class="project-font text-extra-small text-uppercase text-medium-gray"> Vice President, Daytoday Health</span>
                    </div>
                    <!-- end testimonial item -->
                    <!-- start testimonial item -->
                    <div class="col-12 col-md-4 md-margin-four-bottom text-white-2 text-center wow Right last-paragraph-no-margin padding-30px-all">
                        <p class="width-90 mx-auto">The First Main team has been very encouraging throughout our journey and the best thing I liked about the whole program is the curriculum.It covers all the aspects that one needs to focus upon.</p>
                        <i class="fas fa-quote-left icon-small fm-yellow d-block margin-30px-top margin-15px-bottom"></i>
                        <span class="font-weight-600 text-medium margin-5px-bottom project-font d-block line-height-10 alt-font">Vidhi Singhal & Deshna Prakash</span>
                        <span class="project-font text-extra-small text-uppercase text-medium-gray"> Founders, sot</span>
                    </div>
                    <!-- start testimonial item -->
                </div>
            </div>
        </section>
        <!--testinomials-->
        <!-- client carousel style 1 -->
        <section class="wow  padding-10px-bottom bg-page-gray">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                        <div class="position-relative overflow-hidden w-100">
                            <h6 class="text-extra-dark-gray text-outside-line-full alt-font">Collaborations</h6>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="swiper-container wow  black-move swiper-pagination-bottom">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-12 col-md-3 margin-three-bottom text-center d-flex flex-column align-items-center sm-margin-30px-bottom  justify-content-center">
                                        <a href="javascript:void(0);"><img class="client-section" src="../assets/images/client/18.png" alt=""></a>
                                    </div>
                                    <div class="col-12 col-md-3 margin-three-bottom text-center d-flex flex-column align-items-center sm-margin-30px-bottom  justify-content-center">
                                        <a href="javascript:void(0);"><img class="client-section" src="../assets/images/client/7.png" alt=""></a>
                                    </div>
                                    <div class="col-12 col-md-3 margin-three-bottom text-center sm-margin-30px-bottom d-flex flex-column align-items-center  justify-content-center">
                                        <a href="javascript:void(0);"><img class="client-section" src="../assets/images/client/SJCClogo.png" alt=""></a>
                                    </div>
                                    <div class="col-12 col-md-3 margin-three-bottom text-center sm-margin-30px-bottom  d-flex flex-column align-items-center  justify-content-center">
                                        <a href="javascript:void(0);"><img class="client-section" src="../assets/images/client/SJClogo.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-12 col-md-3 margin-three-bottom text-center sm-margin-30px-bottom  d-flex flex-column align-items-center  justify-content-center">
                                        <a href="javascript:void(0);"><img class="client-section" src="../assets/images/client/MCClogo.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- client carousel style 1 end-->
        <!-- start call to action section -->
        <section class="wow  padding-20px-bottom extra-color">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6 col-md-10 text-center">
                        <h5 class="alt-font  text-extra-dark-gray width-80 mx-auto margin-35px-bottom lg-width-100 wow Up">Do you want to curate an experience with us?</h5>
                        <div class="btn-dual">
                            <a href="contact-cur" role="button" class="btn btn-fm border-radius-4 btn-medium  lg-margin-15px-bottom">Yes, I do!</a>
                        </div>
                    </div>
                </div>
                <div class="row padding-30px-top padding-10px-bottom">
                    <div class="col-md-4 col-sm-4 d-flex justify-content-start img-mob">
                        <img class="sm-margin-lr-auto" style="height: 100px;" src="../assets/images/test.svg">
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-center ">
                        <h7 class="sm-margin-two-tb text-center light-font text-extra-dark-gray">We are here to <b>ideate, create</b> and <b>operate</b> for you.</h7>
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-end ">
                        <a href="contact" class="btn btn-small margin-15px-bottom btn-rounded btn-transparent-dark-gray sm-margin-lr-auto">Contact us</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- end call to action section -->
    </Layout>
</template>
<page-query>
    query{
    allEvent{
    edges{
    node{
    image
}
}
}
}
</page-query>
<script>

export default {

    name: ' ',

    data() {
        return {
          
        }
    }
}
</script>
<style lang="css" scoped>
</style>