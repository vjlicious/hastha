<template>
  <div>
    <div>
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
        <b-btn v-b-modal.modal2 class="apply">APPLY NOW</b-btn>
      </b-modal>
      <b-modal id="modal2" class="desc" title="">
        <form>
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
        </form>
      </b-modal>
    </div>
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
  .container {
    text-align: center;
    font-size: 1.8em;
  }

  .alert {
    padding: 2em;
    text-align: justify;
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

  #modal2 {
    width: 400px;
  }
</style>
