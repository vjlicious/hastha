<template>

<div class="container form">

   
  <b-container fluid>
      <div class="has-animation animation-ltr" data-delay="10">
  <h1 id="h">Internship Admission Form</h1></div>
               <div class="alert alert-info" role="alert">
                    <article>
                     <p>Hastha Pvt.Ltd. is looking for motivated and highly-skilled passionate architects to join our team of interns.</p> 
                      <p>Hastha Pvt. Ltd. content internship provides a unique opportunity to learn about our work/marketing/understanding of alternative technology and write engaging, witty and insightful posts.</p> 
                   </br>    
                   <p>Interested? Then check out the requirements below.</p>
<ul>
<li>•	be fluent English speakers with excellent writing and research skills.</li>
<li>•	have joined their first year of university/college.</li>
<li>•	be able to work from home (or school/workplace).</li>
<li>•	be able to dedicate 15 hours per week for research, writing and responding to edits; the schedule is flexible, but you must be reachable Monday through Friday and for contact sessions on weekends.</li>
<li>•	Writing experience is an added advantage.</li>
</br>
<p>If you think that you have what it takes, please fill out the following form  

</br>Applications will be processed on a rolling basis; once we fill the position we will stop accepting applications. (Read: Submit early!)
</br>We will contact potential candidates (and only potential candidates) for follow-ups </p>

 </ul>                   </article>  
             </div>

 <form>
  <div class="form-group is-valid">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email:" required>
   
  </div>
  <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter name:" required>
  </div>
   <div class="form-group">
   
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Contact No:" required>
  </div>
    <div class="form-group">
    
    <input type="text" class="form-control" id="inputAddress" placeholder="Address:" required>
  </div>
    <div class="form-group">
    
    <input type="text" class="form-control" id="inputAddress" placeholder="College/University" required>
  </div>
     <div class="form-group">
      <label for="inputEmail4" ><p class="h3">Year of Admission</p></label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Year of Admission" required>
  </div>
     <div class="form-group">
     <label for="inputEmail4" ><p class="h3">Do you have a website / blog?:If Yes, please include the link here. If not, leave blank:</p></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="">
  </div>
  
  <div class="form-group">
      <label for="inputEmail4" ><p class="h3">Why would you like to work for Hastha?:</p></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="" required>
  </div>
   
   
   
   <div class="form-group">
 
 <label for="inputEmail4" ><p class="h3">Which social media you are present in ?:</p></label>
  
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </b-container>
</div>
</template>
<script>
export default {
    data(){
        return{
      
        }
    }
}
</script>

<style scoped>

.container{
    justify-content: center;
    text-align: center;
}
.alert-info{
    text-align: left;
   
    font-size: 1.8em;
}
.form-group{
    margin-top: 5rem;
}
form{
    text-align: left;
}
.custom-control-label{
    font-size: 1.8em;
}
.custom-checkbox {
    display:inline-block;
    justify-content: space-around;
    align-items: center;
    background-color: aqua;

}

</style>

