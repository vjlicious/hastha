<template>
    <div class="content">
        <h1>Internship Application Form</h1>
        <b-btn v-b-modal.modal2 size="lg" class="holla" variant="outline-success">APPLY NOW</b-btn>
          <b-modal id="modal2" centered title="">
           <div class="container">
    <form @submit.prevent="onSave">
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

</div>
  </b-modal>
    </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        fdata: {
          email: '',
          name: '',
          contact_no: '',
          address: '',
          college: '',
          year: '',
          blog: '',
          why: '',
          socio: []
        }
      }
    },
    methods: {
      onSave() {
        axios.post('https://hastha-123.firebaseio.com/posts.json', this.fdata)
          .then(result => console.log(result))
          .catch(e => console.log(e))
      }
    }
  }
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
    width:400px;
}
.holla{
    margin: 2em;
    color:rgb(88, 88, 88);
    border-color:black;
}
.holla:hover{
    background-color: rgb(211, 211, 211);
}
.form-control {
    height: 4em;
    font-size: 1em;
  }
  .form-check {
    display: table;
    justify-content: center;
  }
  .desc {
    font-size: 20px;
  }

  .desc .apply {
    margin-left: 40%;
  }

</style>

