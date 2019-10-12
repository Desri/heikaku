<template>
  <section id="signup">

    <b-container>
      <b-row>
        <b-col sm="6" class="mx-auto py-5">
          <div class="boxForm">
            <h2>Confirm</h2>
            <b-form>
              <b-form-group
                class="labelForm">
                <b-form-input
                  type="text"
                  v-model="code"
                ></b-form-input>
                <span v-show="isShowCode" class="help is-danger text-left">Invalid confirmation code</span>
                <span class="ph">Code Verification</span>
              </b-form-group>

              <div class="forgot text-right">
                <nuxt-link to="/forgot">Resend confirmation code</a></nuxt-link>
              </div>

              <div class="colBtn">
                <div class="primary btnSubmit" @click="onSubmit">
                  <span>Submit</span>
                </div>
                <div v-show="isShowSpinner" class="spinner"><i class="fa fa-spinner fa-spin"></i></div>
              </div>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {

    components:{

    },
    data() {
      return {
        code: '',
        isShowSpinner: false,
        isShowCode: false
      }
    },
    async mounted() {

    },
    methods: {
      onSubmit() {
        if (this.code != 666666) {
          this.isShowCode = true
        } else {
          this.$router.push('/')
        }
      },
    }

  }
</script>

<style>
  #signup {
    background-color: #03a2de;
  }
  .forgot {
    margin-top: -10px;
    margin-bottom: 15px;
  }
  .forgot a {
    color: #033973;
    font-size: 12px;
    font-weight: 600;
  }
  .forgot a:hover {
    text-decoration: none;
  }


</style>
