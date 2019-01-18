<template>
    <nav class="navbar">
        <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
        <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
        <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
        <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
    </nav>
</template>
<style scoped>
  .navbar {
    padding:0;
    margin:0;
    position: sticky;
    box-sizing: border-box;
    display: flex;
    align-content:center;
    justify-content: space-around;

  }
  .items {
        text-decoration:none;
        color:rgb(22, 22, 22);
        font-family: 'Quicksand', sans-serif;
        font-weight:100;
        font-size:1.5em;
  }
</style>




