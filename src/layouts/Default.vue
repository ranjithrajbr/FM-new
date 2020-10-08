<template>
  <div class="layout">
    <HeaderDark v-if="theme==true"/>
    <Header v-else/>
    <slot/>
    <Footer/>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import HeaderDark from '@/components/HeaderDark'
  import Footer from "@/components/Footer.vue"
  export default{
    components:{
      Header,
      HeaderDark,
      Footer
    },
   props:{
    theme:{
      type:Boolean
    }
   }
  }
</script>
