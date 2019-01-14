<template>
  <div class="home-page">
    <div class="bg">
      <nav class="navbar">
        <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
        <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
        <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
        <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {}

</script>
<style scoped>
  .home-page {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .bg {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    background-image: url('~assets/img/illu.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .navbar {
    display: flex;
    align-content:center;
    justify-content: space-around;

  }
  .items {
        text-decoration:none;
        color:#fff;
        font-family: 'Quicksand', sans-serif;
        font-weight:100;
        font-size:1.5em;
  }

</style>
