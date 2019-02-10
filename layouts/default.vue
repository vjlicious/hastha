<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>     
</script>
<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html{
  box-sizing: border-box;
  font-size: 62.5%;
}
body{
    font-family: 'Roboto', sans-serif;
    color: #3C3C3C;
    background-color:rgb(177, 177, 177);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}

</style>


