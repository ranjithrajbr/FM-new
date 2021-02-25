<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
            <div class="m-0 row justify-content-center">
                <div class="col-12 col-lg-7 col-md-10">
                    <div class="text-center media d-block align-items-start d-md-flex text-md-left padding-30px-lr lg-padding-15px-lr width-100">
                        <img src="../assets/images/about/razi.png" alt="" class="img-circle width-110px margin-50px-right lg-width-100px md-width-120px sm-width-73px sm-no-margin-right sm-margin-15px-bottom" />
                        <div class="media-body last-paragraph-no-margin">
                            <p class="text-extra-light-gray text-medium light-font">E-learning is an essential in today’s fast-paced world as it brings learning to people instead of people to learning. Online pedagogy is all about designing an experience as it compels to teach tomorrow’s skills today.</p>
                            <span class="text-white-2 medium-font d-block text-medium margin-15px-top project-font">Razi Abbas</span>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="m-0 row justify-content-center">
                <div class="col-12 col-lg-7 col-md-10">
                    <div class="text-center media d-block d-md-flex text-md-left align-items-start padding-30px-lr lg-padding-15px-lr width-100">
                        <img src="../assets/images/about/sargam.png" alt="" class="img-circle width-110px margin-50px-right lg-width-100px md-width-120px sm-width-73px sm-no-margin-right sm-margin-15px-bottom" />
                        <div class="media-body last-paragraph-no-margin">
                            <p class="text-extra-light-gray text-medium light-font">Every product or service we consume is an outcome of entrepreneurship as a solution to today's problems for a better tomorrow. This could be a new solution like an innovation or could be enhancement of an existing innovation.</p>
                            <span class="text-white-2 medium-font d-block text-medium margin-15px-top project-font">Sargam Garg</span>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="m-0 row justify-content-center">
                <div class="col-12 col-lg-7 col-md-10">
                    <div class="text-center media d-block d-md-flex text-md-left align-items-start padding-30px-lr lg-padding-15px-lr width-100">
                        <img src="../assets/images/about/soumya.png" alt="" class="img-circle width-110px margin-50px-right lg-width-100px md-width-120px sm-width-73px sm-no-margin-right sm-margin-15px-bottom" />
                        <div class="media-body last-paragraph-no-margin">
                            <p class="text-extra-light-gray text-medium light-font">Imagine a space where all entrepreneurs could come together in an ecosystem and work towards a common good. This will help us work beyond competition and with collaborations, there’s nothing a community of entrepreneurs can’t overcome.</p>
                            <span class="text-white-2 medium-font d-block text-medium margin-15px-top project-font">Soumya Bhasin</span>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="m-0 row justify-content-center">
                <div class="col-12 col-lg-7 col-md-10">
                    <div class="text-center media d-block d-md-flex text-md-left align-items-start padding-30px-lr lg-padding-15px-lr width-100">
                        <img src="../assets/images/about/arjun.png" alt="" class="img-circle width-110px margin-50px-right lg-width-100px md-width-120px sm-width-73px sm-no-margin-right sm-margin-15px-bottom" />
                        <div class="media-body last-paragraph-no-margin">
                            <p class="text-extra-light-gray text-medium light-font">We all get dealt the same pack of cards but the way we play is what separates us from being creators and following the herd and entrepreneurship is a journey we take to build our business and create a brand.</p>
                            <span class="text-white-2 medium-font d-block text-medium margin-15px-top project-font">Arjun Chaddha</span>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'swiper-example-keyboard-control',
    title: 'Keyboard control',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                keyboard: {
                    enabled: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>
<style scoped>
@media (max-width: 767px){
    .img-circle{
    clip-path:circle(32px at 50% 50%)
}

}

.swiper {
    height: 300px;
}


.swiper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

}
</style>