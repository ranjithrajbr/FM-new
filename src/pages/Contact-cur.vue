<template>
    <Layout>
        <section class="bg-position-contact-curate-mob wow padding-30px-bottom  background-size-cover" :style="{backgroundImage:'url('+require('../assets/images/contact/contact-curate.svg')+')',
            backgroundColor:'#f8f9fa',
            backgroundPosition:'bottom 0px left 130px',
             backgroundRepeat: 'no-repeat' }">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-md-4">
                        <div class="d-flex justify-content-md-center">
                            <div class="blog-nav-link blog-nav-link-prev ">
                                <a class="light-font" href="learning"><i class="ti-arrow-left blog-nav-icon"></i>E-Learning</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container container-custom">
                <div class="row">
                    <div class="col-12 col-lg-6 d-flex flex-column  justify-content-center extra-small-screen text-md-left text-center  sm-padding-15px-lr">
                        <h4 class="fm-orange semibold-font">Yes, we too want to curate an experience with you!</h4>
                        <span class="margin-15px-bottom text-extra-dark-gray light-font text-medium d-block">Fill the details below and our team will get in touch with you.</span>
                    </div>
                </div>
            </div>
            <div class="col-12 sm-h-100px">
            </div>
        </section>
        <!-- end page title section -->
        <!-- start form section -->
        <section id="start-your-project">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h6 class="alt-font text-extra-dark-gray">Drop us a message and we will get in touch with you!</h6>
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
                                    <input type="text" name="email" id="industry" placeholder="Industry/Institution you belong to" class="input-bg">
                                </div>
                                <div class="col-12">
                                    <input name="comment" id="website" placeholder="Website" class="input-bg">
                                </div>
                                <div class="col-12">
                                    <textarea name="comment" id="curating" placeholder="What are you interested in curating?" class="input-bg"></textarea>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-fm border-radius-4 btn-large margin-20px-top">Send message</button>
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

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>