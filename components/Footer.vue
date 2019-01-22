   <template>
    <div class="bg footer">
      <div class="foot_items">
        <div class="foot links">
          <nav class="navbar">
            <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
            <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
            <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
            <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
          </nav>
        </div>
        <div class="foot copyright">
          ©2018 by Hastha - Alternate Building Technology and Research Pvt Ltd.
        </div>
        <div class="foot address">
          Hastha Alternate Building Technology & Research Pvt Ltd
          +91 98-86-456000.
          # 287/A, 7 A Main Road, HRBR Layout,1st Block,
          Subbaiahnapalya, Banaswadi, Bengaluru, Karnataka - 560 043
        </div>
      </div>
    </div>
   </template>
   
<style>

  .foot_items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
  }

  .foot {
    width: 50%;
  }
</style>
