<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img class="client-section" src="../assets/images/client/1.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/2.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/3.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/4.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/5.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/6.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/7.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/8.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/9.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/10.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/11.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/12.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/13.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/14.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/15.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/16.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/17.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/18.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/19.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/20.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/21.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/22.png" /></swiper-slide>
        <swiper-slide><img class="client-section" src="../assets/images/client/23.png" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
                slidesPerView:1 ,
                spaceBetween: 20,

                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                keyboard: {
                    enabled: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
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