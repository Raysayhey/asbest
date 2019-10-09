<template>
  <div class="main-container">
    <div class="background-overlay" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
    <div class="logo-wrap">
      <img class="logo-img" :src="`${logoImgUrl}`"
        >
    </div>
    <div class="tape-wrap">
      <img class="tape-img" :src="`${tapeImgUrl}`"
        data-aos-delay="5500" data-aos="fade-left">
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
      <!-- <div class="subtitle-wrap">
        <h2 class="subtitle gyho-color">
          Die Asbest Webseite wird zur Zeit umgebaut
        </h2>
      </div> -->
      <div class="wpb-wrap">
        <div class="footerCTA">
          <h4>
          <a class="gyho-color" href="mailto:info@asbest-entfernung.com" font:="helvetica neue" style="color:#1ed975">Kontaktieren Sie uns für weitere Infos</a>
          <span class="arrowRight">
            <i id="arrowRight" class="fa fa-arrow-right3"></i>
          </span>
          </h4>
        </div>  
            <div>
        <br />
        <h4 style="color:#fff">
          AA Asbest Altlasten Sanierungen GmbH <br />
          Stallikonerstrasse 81 <br />
          8903 Birmensdorf<br />
           043 344 06 94 | 079 325 02 22<br />
          info@asbest-entfernung.com
        </h4>
        </div>    
      </div>
     
       <div class="copyright-wrap">
        <span class="subtitle">© Copyright Asbest Altlasten Sanierungen GmbH 2019, Alle Rechte reserviert</span>
      </div>
    </footer>
   
    <!-- <button onclick="topFunction()" id="gotopBtn">Top</button> -->
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