<template>
  <div class="container">
    <b-container fluid>
      <div class="has-animation animation-ltr" data-delay="10">
        <h1 id="h">Internship Admission Form</h1>
      </div>
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
    <div class="form-group is-valid">

      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email:"
        required>

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
      <label for="inputEmail4">
        <p class="h3">Year of Admission</p>
      </label>
      <input type="date" class="form-control" id="inputAddress" placeholder="Year of Admission" required>
    </div>
    <div class="form-group">
      <label for="inputEmail4">
        <p class="h3">Do you have a website / blog?:If Yes, please include the link here. If not, leave blank:</p>
      </label>
      <input type="text" class="form-control" id="inputAddress" placeholder=" ">
    </div>

    <div class="form-group">
      <label for="inputEmail4">
        <p class="h3">Why would you like to work for Hastha?:</p>
      </label>
      <input type="text" class="form-control" id="inputAddress" placeholder="" required>
    </div>



    <div class="form-group">

      <label for="inputEmail4">
        <p class="h3">Which social media you are present in ?:</p>
      </label>

      <div class="col-md-4">


        <div class="form-check">
          <label>
            <input type="checkbox" name="check"> <span class="label-text" style="font-size:20px">Linked in</span>
          </label>
        </div>
        <div class="form-check">
          <label>
            <input type="checkbox" name="check"> <span class="label-text" style="font-size:20px">Facebook</span>
          </label>
        </div>
        <div class="form-check">
          <label>
            <input type="checkbox" name="check"> <span class="label-text" style="font-size:20px">Twitter</span>
          </label>
        </div>
        <div class="form-check">
          <label>
            <input type="checkbox" name="check"> <span class="label-text" style="font-size:20px">Instagram</span>
          </label>
        </div>
        <div class="form-check">
          <label>
            <input type="checkbox" name="check"> <span class="label-text" style="font-size:20px">Others</span>
          </label>
        </div>


      </div>

    </div>
    <button type="submit" class="btn btn-primary">Submit</button>

    <div class="post" v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id">
      <p class="text"> {{ post.email }}</p>
    </div>

  </div>
</template>

<script>
  import PostService from '@/server/postServices';
  export default {
    name: 'PostComponent',
    data() {
      return {
        labels: ['Enter Email', 'Enter Name', 'Enter Address'],
        types: ['text', 'text', 'text'],
        posts: [],
        error: '',
        email: '',
        name: ''
      }
    },
    async created() {
      try {
        this.posts = await PostService.getPosts();
      } catch (err) {
        this.error = err.message;
      }
    },
    methods: {
      async createPost() {
        await PostService.insertPost(this.email, this.name);
        this.posts = await PostService.getPosts();
      }
    }
  }

</script>
<style scoped>
  .container {
    text-align: center;
    font-size: 1.8em;
  }

  .alert {
    padding: 2em;
    text-align: justify;
  }

</style>
