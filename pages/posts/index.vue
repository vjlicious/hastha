<template>
    <div class="post-page">
        <div>
         <table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">college</th>
      <th scope="col">contact_no</th>
      <th scope="col">year of addmission</th>
      <th scope="col">blog</th>
      <th scope="col">why hastha</th>
       <th scope="col">social media</th>
    </tr>
  </thead>
  <tbody>
    <tr class="post"
          v-for="(post,index) in postarray"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id">
     
      <td>{{postarray[index].name}}</td>
      <td>{{postarray[index].email}}</td>
      <td>{{postarray[index].address}}</td>
      <td>{{postarray[index].college}}</td>
      <td>{{postarray[index].contact_no}}</td>
      <td>{{postarray[index].year}}</td>
      <td>{{postarray[index].blog}}</td>
      <td>{{postarray[index].why}}</td>
       <td>{{postarray[index].socio}}</td>
    </tr>
    
  </tbody>
</table>
         
         
       
     </div>  
     </div> 
</template>

<script>
import axios from 'axios';
export default {

data(){
return{
    postarray:[]
}

},

created() {

 return axios.get('https://hastha-123.firebaseio.com/posts.json')
 
 .then(res => {
     
     for(const key in res.data){
         this.postarray.push(res.data[key])
     }

//this.fdata=postarray;


 })
.catch(e => context.error(e));

},
}
</script>

<style scoped>
.table-dark{
font-size: 20px;
}
</style>

    
