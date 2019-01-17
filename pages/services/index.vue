<template>
  <div class="home-page">
    <Header />
    <NavBar />
    </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import NavBar from '@/components/NavBar.vue'
  import Banner from '@/components/Banner.vue'

  export default {
    components: {
      Header,
      NavBar,
      Banner
    }
  }

</script>
