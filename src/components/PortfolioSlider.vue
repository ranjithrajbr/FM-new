<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <a href="/ideotic">
            <div class="port-box">
                <img src="../assets/images/ideotic/peach.jpg" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase">Ideotic</div>
                </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/xioki">
            <div class="port-box">
                <img src="../assets/images/xoiki/xioki_1.jpg" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase">Xioki</div>
                </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/ponnappa">
            <div class="port-box">
                <img src="../assets/images/ponnappa/2.jpg" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase">Shradha Ponnappa</div>
                </div>
            </div>
          </a>
        </swiper-slide>
         <swiper-slide>
          <a href="/area">
            <div class="port-box">
                <img src="../assets/images/area83/area-3.jpeg" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase"> Area 83</div>
                </div>
            </div>
          </a>
        </swiper-slide>
         <swiper-slide>
          <a href="/spring">
            <div class="port-box">
                <img src="../assets/images/spring/spring-3.png" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase">Spring Diaries</div>
                </div>
            </div>
          </a>
        </swiper-slide> 
          <swiper-slide>
            <a href="/ichange">

            <div class="port-box">
                <img src="../assets/images/i-ch-ind/4.jpeg" alt="Avatar" class="port-image">
                <div class="text-middle">
                    <div class="text-color text-uppercase">I Change Indiranagar</div>
                </div>
            </div>
          </a>
        </swiper-slide> 
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
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

.text-color {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}

.text-middle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.5);
}


.port-box {
    position: relative;
    width: 100%;
}

.port-box:hover .port-image {
    opacity: 0.1;
}


.port-box:hover .text-middle {
    opacity: 1;
}

.port-image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}
</style>