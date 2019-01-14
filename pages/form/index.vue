<template>
<div class="container form">
  <b-container fluid>
    <h1>Internship Admission Form</h1>
    <b-row class="myform" v-for="type in types" :key="type">
        <b-form-input :id="`type-${type}`" :type="type"  :placeholder="pc">
        </b-form-input>
        </b-row>
  </b-container>
</div>
</template>
<script>
export default {
    data(){
        return{
            types: [
                'password','text','tel','text','text','number','text','text'
            ],
            placeholder:[
                'Enter email','Enter name', 'Enter Contact Number', 
                'Enter Address', 'Enter College/University', 'Enter Admission', 'Link', ''
            ]
        }
    }
}
</script>
<style scoped>

</style>

