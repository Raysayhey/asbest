<template >
  <div class="home-wrap" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <nuxt />
    <!-- <img class=tape src="~/assets/tape_mit_text_741.png"> -->
  </div>
</template>

<script>
  import backgroundUrl from '~/assets/asbest-underconst-1980.jpg'
  import ImageUrl from '~/assets/tape_mit_text_741.png'

  export default {
    data() {
      return {
        backgroundUrl,
        ImageUrl
      }
    }
  }
</script>
