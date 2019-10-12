<template>
  <section id="banner">

    <b-container>
      <b-row class="align-items-center py-5">
        <b-col sm="12" lg="6">
          <div class="textSlide">
            <h2>You are at the center of security</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam inventore.</p>
          </div>
        </b-col>
        <b-col sm="12" lg="6">
          <div class="imgSlide">
            <img src="@/static/assets/banner-3.gif" class="img-fluid d-blocks">
          </div>
        </b-col>
      </b-row>
    </b-container>

    <nuxt-link to='/member_area/training'>

    </nuxt-link>


  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {

    components:{

    },
    data() {
      return {

      }
    },
    async mounted() {

    },
    methods: {

    }

  }
</script>

<style>
  #banner {
    background: #0816bf;
  }
  #banner .textSlide h2 {
    color: #ffffff;
    font-size: 54px;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 60px;
  }
  #banner .textSlide p {
    color: #ffffff;
  }
</style>
