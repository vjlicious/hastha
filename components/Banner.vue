<template>
    <div class="content">
        <h1>Internship Application Form</h1>
        <nuxt-link to='/form'><b-button size="lg" class="holla" variant="outline-success">APPLY NOW</b-button></nuxt-link>
    </div>
</template>
<script>
</script>
<style scoped>
.content{
    border: 1px solid rgb(173, 172, 172);
    border-radius: 0.2em;
    padding: 2.5em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
}
.holla{
    margin: 2em;
    color:rgb(88, 88, 88);
    border-color:black;
}
.holla:hover{
    background-color: rgb(211, 211, 211);
}

</style>

