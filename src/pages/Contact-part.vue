<template>
	<Layout>
		<section class="bg-position-contact-partner-mob md-no-padding-bottom padding-30px-bottom  background-size-cover" :style="{backgroundImage:'url('+require('../assets/images/contact/banner.svg')+')',
		backgroundColor:'#f8f9fa',
		backgroundPosition:'bottom 0px left 130px',
		backgroundSize:'cover',
		backgroundRepeat: 'no-repeat'}">
        <div class="container-fluid">
            <div class="sm-height-70px"></div>
            <div class="row">
                <div class="col-lg-2 col-md-4">
                    <div class="d-flex justify-content-lg-center">
                        <div class="blog-nav-link blog-nav-link-prev ">
                            <a class="light-font" href="contact.html"><i class="ti-arrow-left blog-nav-icon"></i>Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container container-custom">
            <div class="row">
                <div class="col-12 col-lg-6 col-md-8 d-flex flex-column  justify-content-center extra-small-screen text-md-left text-center  sm-padding-15px-lr">
                    <h3 class="fm-orange semibold-font">Partner with us</h3>
                    <span class="margin-15px-bottom text-extra-dark-gray text-medium light-font d-block">Are you a company that can provide a service to start-ups? Are you an individual and a subject matter expert? Have you been in your industry for so long that you know the nook and corner of how everything works?</span>
                    <span class="fm-blue text-medium alt-font">Then we can definitely partner up in many ways!</span>
                </div>
            </div>
        </div>
        <div class="col-12 sm-height-200px">
        </div>
    </section>
    <!-- end page title section -->
    <!-- start form section -->
    <section class="wow " id="start-your-project">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                    <h6 class="alt-font  text-extra-dark-gray">Drop us a message and we will get in touch with you!</h6>
                </div>
                <form id="contact-form" action="https://qewat1rlae.execute-api.ap-south-1.amazonaws.com/01/contact-us" method="post">
                    <div class="border-radius-8">
                        <div class="row padding-100px-lr lr-20x-padding-mob">
                           <div class=" col-12 text-center alert alert-success hidden" id="contact-alert-success">
                                <strong>Success!</strong> Thank you for your message. Reply will be in a while!
                            </div>
                            <div class="col-12 text-center alert alert-danger hidden" id="contact-alert-error">
                                <strong>Error!</strong> Something went wrong sending your message.
                            </div>
                            <div class="col-12 col-lg-6">
                                <input type="text" name="name" id="name" placeholder="Name *" class="input-bg" required>
                            </div>
                            <div class="col-12 col-lg-6">
                                <input type="text" name="phone" id="phone" placeholder="Phone" class="input-bg">
                            </div>
                            <div class="col-12 col-lg-6">
                                <input type="text" name="email" id="email" placeholder="E-mail *" class="input-bg" required>
                            </div>
                            <div class="col-12 col-lg-6">
                                <input type="text" name="email" id="industry" placeholder="Industry you belong to" class="input-bg">
                            </div>
                            <div class="col-12">
                                <input name="comment" id="website" placeholder="Website" class="input-bg">
                            </div>
                            <div class="col-12">
                                <input name="comment" id="social" placeholder="Social media handles" class="input-bg">
                            </div>
                            <div class="col-12 text-center">
                                <button  type="submit" class="btn btn-fm border-radius-4 btn-large margin-20px-top">Send message</button>
                            </div>
                        </div>
                    </div>
                </form>
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