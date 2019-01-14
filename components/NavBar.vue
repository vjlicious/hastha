<template>
    <nav class="navbar">
        <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
        <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
        <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
        <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
    </nav>
</template>
<script>

export default {
    
}
</script>
<style scoped>
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




