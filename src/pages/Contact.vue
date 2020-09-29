<template>
<Layout>
	<section class="bg-position-contact-mob bg-tab-contact padding-60px-bottom sm-padding-60px-bottom md-padding-30px-bottom background-size-cover" 
	:style="{backgroundImage: 'url('+require('../assets/images/contact/final.svg')+')',
         backgroundColor: '#0865ab',
         backgroundPosition: 'left 180px bottom 0px',
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat'}
         ">
        <div class="container container-custom">
            <div class="col-12 sm-height-50px height-10px md-height-40px"></div>
            <div class="row">
                <div class="col-12 col-lg-8 col-md-12 d-flex flex-column align-items-start justify-content-center sm-height-350px text-md-left text-center extra-small-screen sm-padding-15px-lr">
                    <h3 class="text-white semibold-font xl-width-60 width-80 md-width-60 sm-width-100">
                        Why collect contacts when you can plant relations?
                    </h3>
                    <span class="margin-30px-bottom font-weight-300 md-width-80 sm-width-100 text-medium text-white d-block">There are multiple reasons for us to build a relationship! Let’s
                        find one, together!</span>
                    <div>
                        <a href="contact-partner.html" role="button" class="btn margin-10px-right border-radius-4 btn-transparent-white btn-small sm-width-60 md-margin-lr-auto d-lg-inline-block lg-margin-15px-bottom">Partner with us</a>
                        <a href="contact-coll.html" role="button" class="btn margin-10px-lr border-radius-4 btn-transparent-white sm-width-60 btn-small md-margin-lr-auto d-lg-inline-block lg-margin-15px-bottom">Collaborate with us</a>
                        <a href="contact-cont.html" role="button" class="btn margin-10px-lr btn-transparent-white border-radius-4 sm-width-60 btn-small md-margin-lr-auto d-lg-inline-block lg-margin-15px-bottom">Contribute to Stack</a>
                    </div>
                </div>
            </div>
            <div class="col-12 sm-height-100px"></div>
        </div>
    </section>
    <!-- end page title section -->
    <!-- start contact info -->
    <section class="wow bg-page-gray padding-20px-bottom">
        <div class="container">
            <div class="row">
                <!-- start contact info item -->
                <div class="col-12 col-lg-3 col-md-6 text-center md-margin-eight-bottom sm-margin-30px-bottom wow Up last-paragraph-no-margin">
                    <div class="d-inline-block margin-20px-bottom">
                        <img style="height: 50px;" class="sm-height-50px" src="../assets/images/fm/location.svg" />
                    </div>
                    <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                        Address
                    </div>
                    <p class="mx-auto">
                        #205, 2nd Floor, MBC Centre, 134,<br />
                        Infantry Rd, Shivaji Nagar,<br />
                        Bengaluru, Karnataka - 560001
                    </p>
                </div>
                <!-- end contact info item -->
                <!-- start contact info item -->
                <div class="col-12 col-lg-3 col-md-6 text-center md-margin-eight-bottom sm-margin-30px-bottom wow Up last-paragraph-no-margin" data-wow-delay="0.2s">
                    <div class="d-inline-block margin-20px-bottom">
                        <img style="height: 50px;" class="sm-height-50px" src="../assets/images/fm/speech-bubble.svg" />
                    </div>
                    <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                        Let's Talk
                    </div>
                    <p class="mx-auto">+91 8047190890</p>
                </div>
                <!-- end contact info item -->
                <!-- start contact info item -->
                <div class="col-12 col-lg-3 col-md-6 text-center sm-margin-30px-bottom last-paragraph-no-margin">
                    <div class="d-inline-block margin-20px-bottom">
                        <img style="height: 50px;" class="sm-height-50px" src="../assets/images/fm/love-letter.svg" />
                    </div>
                    <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                        E-mail Us
                    </div>
                    <p class="mx-auto">
                        <a href="mailto:hello@firstmain.org">hello@firstmain.org</a>
                    </p>
                </div>
                <!-- end contact info item -->
                <!-- start contact info item -->
                <div class="col-12 col-lg-3 col-md-6 text-center wow Up last-paragraph-no-margin" data-wow-delay="0.6s">
                    <div class="d-inline-block margin-20px-bottom">
                        <img style="height: 50px;" class="sm-height-50px" src="../assets/images/fm/clock.svg" />
                    </div>
                    <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                        Working Hours
                    </div>
                    <p class="mx-auto">Mon to Sat<br />10 AM - 8 PM</p>
                </div>
                <!-- end contact info item -->
            </div>
        </div>
        <div class="padding-five-tb">
            <div class="separator-line-horrizontal-full bg-medium-gray margin-60px-tb height-1px width-40 mx-auto"></div>
        </div>
    </section>
    <!-- end contact info section -->
    <!-- start form section -->
    <section class="wow no-padding-top bg-page-gray padding-5px-bottom" id="start-your-project">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                    <h6 class="alt-font text-extra-dark-gray">
                        Have some questions for us? Wondering how we can help you or how
                        we can work together?
                    </h6>
                    <p class="alt-font text-large font-weight-400 fm-orange">
                        Drop us a message and we’ll respond immediately!
                    </p>
                </div>
                <form id="contact-form" action="https://qewat1rlae.execute-api.ap-south-1.amazonaws.com/01/contact-us" method="post">
                    <div class="border-radius-8">
                        <div class="row padding-100px-lr lr-20x-padding-mob border-radius-8">
                            <div class=" col-12 text-center alert alert-success hidden" id="contact-alert-success">
                                <strong>Success!</strong> Thank you for your message. Reply will be in a while!
                            </div>
                            <div class="col-12 text-center alert alert-danger hidden" id="contact-alert-error">
                                <strong>Error!</strong> Something went wrong sending your message.
                            </div>
                            <div class="col-12 col-lg-6">
                                <input  type="text" name="name" id="name" placeholder="Name *" class="input-bg" required/>
                            </div>
                            <div class="col-12 col-lg-6">
                                <input  type="text" name="phone" id="phone" placeholder="Phone" class="input-bg"  />
                            </div>
                            <div class="col-12 col-lg-6">
                                <input type="text" name="email" id="email" placeholder="E-mail *" class="input-bg" required />
                            </div>
                            <div class="col-12 col-lg-6">
                                <input  type="text" name="Industry you belong to" id="industry" placeholder="Industry you belong to" class="input-bg" />
                            </div>
                            <div class="col-12">
                                <textarea name="Describe your project" id="describe-project" placeholder="Describe your project" rows="6" class="input-bg"></textarea>
                            </div>
                            <div class="col-12 text-center">
                                <button  type="submit" class="btn btn-fm border-radius-4 btn-large margin-20px-top">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row justify-content-end">
                <img class="mob contact-icon-tab height-200px" src="../assets/images/fm/undraw_cookie_love_ulvn.svg" />
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