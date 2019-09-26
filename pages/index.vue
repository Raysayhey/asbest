<template>
  <section class="container">
        <!-- <img src="'~/assets/tape_mit_text.png"> -->

    <div >
      
        <img class=tape src="~/assets/tape_mit_text_741.png" data-aos-delay="2400"
           data-aos="fade-left">
        
        
       
   
       <!-- 
      <h2 class="subtitle">
        under construction asbest website
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div> -->
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import aos from 'aos'

export default {
 

  
  

}
</script>

<style>


.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* justify-content: right;
  align-items: center;
  text-align: center; */
  padding-right: 0px;
  margin-right: 0px;
  padding-top: 422px;



  
}
.tape{
  justify-content: right;
  align-items: flex-end;
  animation: goleft 2s linear forwards 3s;

  
}

@keyframes goleft {
  100% {
    left: 0%;
  }
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
