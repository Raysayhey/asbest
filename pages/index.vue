<template>
  <div class="main-container">
    <div class="background-overlay" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
    <div class="logo-wrap">
      <img class="logo-img" :src="`${logoImgUrl}`"
        >
    </div>
    <div class="tape-wrap">
      <img class="tape-img" :src="`${tapeImgUrl}`"
        data-aos-delay="1500" data-aos="fade-left">
    </div>
    <section class="page-wrapper">
      <article class="page-body">
        <div class="post-wrapper">
          <div class="post-body">
            <div class="post-content">
            
            </div>
          </div>
        </div>
      </article>
    </section>
    <footer class="footer-wrapper">
      <div class="subtitle-wrap">
        <h2 class="subtitle gyho-color">
          under construction asbest website
        </h2>
      </div>
      <div class="wpb-wrap">
        <div class="footerCTA">
          <a href="#" style="color:#1ed975">Let's Talk</a>
          <span class="arrowRight">
            <i id="arrowRight" class="fa fa-arrow-right3"></i>
          </span>
        </div>
      </div>
      <div class="links-wrap">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
        >Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey"
        >GitHub</a>
       </div>
       <div class="copyright-wrap">
        <span class="subtitle">© Copyright Ray 2019, All Rights Reserved</span>
      </div>
    </footer>
    <button onclick="topFunction()" id="gotopBtn">Top</button>
  </div>
</template>
<script>
  // import Logo from '~/components/Logo.vue'
  import aos from 'aos'
  
  import backgroundUrl from '~/assets/img/background_asbest_frei.jpg'
  import logoImgUrl from '~/assets/img/logo.png'
  import tapeImgUrl from '~/assets/img/tape_mit_text_741.png'

  export default {
    head() {
      return {
        script: [
          {src: '/js/gotop.js'}
        ]
      }
    },
    data() {
      return {
        backgroundUrl,
        logoImgUrl,
        tapeImgUrl
      }
    }
  }
</script>