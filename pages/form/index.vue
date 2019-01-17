
<template>

<div>

<div>
  <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

  <!-- Modal Component -->
  <b-modal id="modal1" class="desc" title="">
           <b-container fluid>
     
      <div class="alert alert-info" role="alert">
        <article>
          <p>Hastha Pvt.Ltd. is looking for motivated and highly-skilled passionate architects to join our team of
            interns.</p>
          <p>Hastha Pvt. Ltd. content internship provides a unique opportunity to learn about our
            work/marketing/understanding of alternative technology and write engaging, witty and insightful posts.</p>

          <p>Interested? Then check out the requirements below.</p>
          <ul>
            <li>be fluent English speakers with excellent writing and research skills.</li>
            <li>have joined their first year of university/college.</li>
            <li>be able to work from home (or school/workplace).</li>
            <li>be able to dedicate 15 hours per week for research, writing and responding to edits; the schedule
              is flexible, but you must be reachable Monday through Friday and for contact sessions on weekends.</li>
            <li>Writing experience is an added advantage.</li>
          </ul>
          <br>
          <p>If you think that you have what it takes, please fill out the following form
            <br>Applications will be processed on a rolling basis; once we fill the position we will stop
            accepting applications. (Read: Submit early!)
            <br>We will contact potential candidates (and only potential candidates) for follow-ups </p>
        </article>
      </div>
    </b-container>
    <b-btn v-b-modal.modal-center class="apply">APPLY NOW</b-btn>
  </b-modal>

</div>








  

  <!-- Modal Component -->
  <b-modal id="modal-center" centered title="">
           <div class="container">
    
    <form @submit.prevent="onSave">
      <h1 id="h">Internship Admission Form</h1>
  <div class="form-group">
    
   <input type="email" class="form-control" id="validationDefault01" placeholder="Enter email"  v-model="fdata.email" required>
    </div>
  <div class="form-group">
   
    <input type="text" class="form-control" id="validationDefault02" placeholder="Enter name:"  v-model="fdata.name" required>
  </div>
   <div class="form-group">
   
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Contact No:" v-model="fdata.contact_no" >
  </div>
    <div class="form-group">
    
    <input type="text" class="form-control" id="inputAddress" placeholder="Address:"  v-model="fdata.address">
  </div>
    <div class="form-group">
    
    <input type="text" class="form-control" id="inputAddress" placeholder="College/University" v-model="fdata.college"  >
  </div>
     <div class="form-group">
      <label for="inputEmail4" ><p class="h3">Year of Admission</p></label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Year of Admission" v-model="fdata.year" >
  </div>
     <div class="form-group">
     <label for="inputEmail4" ><p class="h3">Do you have a website / blog?:If Yes, please include the link here. If not, leave blank:</p></label>
    <input type="text" class="form-control" id="inputAddress" placeholder=" " v-model="fdata.blog" >
  </div>
  
  <div class="form-group">
      <label for="inputEmail4" ><p class="h3">Why would you like to work for Hastha?:</p></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="" v-model="fdata.why" >
  </div>
   
   
   
  <div class="form-group">

     <label for="inputEmail4" ><p class="h3">Which social media you are present in ?:</p></label>
  
                 <div class="col-md-4">
			
				
				<div class="form-check" >
          
					<label>
						<input type="checkbox"  id="Linked in" value="Linked in" v-model="fdata.socio"> <span class="label-text" style="font-size:20px">Linked in</span>
					</label>
				</div>
				<div class="form-check">
					<label>
						<input type="checkbox"  id="Facebook" value="Facebook" v-model="fdata.socio"> <span class="label-text" style="font-size:20px">Facebook</span>
					</label>
				</div>
				<div class="form-check">
					<label>
						<input type="checkbox" id="Twitter" value="Twitter" v-model="fdata.socio"> <span class="label-text" style="font-size:20px">Twitter</span>
					</label>
				</div>
				<div class="form-check">
					<label>
						<input type="checkbox" id="Instagram" value="Instagram" v-model="fdata.socio"> <span class="label-text" style="font-size:20px">Instagram</span>
					</label>
				</div>
        	<div class="form-check">
					<label>
						<input type="checkbox" id="others" value="others" v-model="fdata.socio"> <span class="label-text" style="font-size:20px">Others</span>
					</label>
				</div>
			
      
		</div>
    
  </div>
  <button type="submit" class="btn btn-primary"  >Submit</button>
</form>
<div class="post" v-for="(post, index) in posts"
v-bind:item = "post"
v-bind:index = "index"
v-bind:key="post._id">
<p class="text"> {{ post.text }}</p> 
</div>

</div>
  </b-modal>
</div>

  
  
  
 
</template>

<script>
import axios from 'axios';
import PostService from '@/server/postServices';
  export default {
    name:'PostComponent',
    data() {
      return {
          labels:['Enter Email', 'Enter Name', 'Enter Address'],
          types:['text', 'text', 'text'],
          posts: [],
          error: '',
         
          fdata:{email: '',
                name: '',
                contact_no:'',
                address:'',
                college:'',
                year:'',
                blog:'',
               why:'',
              socio:[]

                
                
                
                }
      }
    },
     
    methods: {
      
        onSave(){
          
          axios.post('https://hastha-123.firebaseio.com/posts.json',this.fdata)
          .then(result => console.log(result))
          .catch(e => console.log(e))
         
        }
        
    }
  }
</script>
<style scoped>
.container{
    text-align: center;
    font-size: 1.8em;
}
.alert{
    padding:2em;
    text-align: justify;
}
.form-control{
height:4em;
font-size:1em;
}
.form-check{
 display: table;
 justify-content: center;
}
.desc{
  font-size: 20px;
  
}
.desc .apply{
  margin-left: 40%;
}
</style>

