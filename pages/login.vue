<template>
  <section id="signup">

    <b-container>
      <b-row>
        <b-col sm="6" class="mx-auto py-5">
          <div class="boxForm">
            <h2>Login</h2>
            <b-form>
              <b-form-group
                class="labelForm">
                <b-form-input
                  type="text"
                  v-model="username"
                ></b-form-input>
                <span class="ph">Username</span>
              </b-form-group>

              <b-form-group
                class="labelForm">
                <b-form-input
                  type="password"
                  v-model="password"
                ></b-form-input>
                <span class="ph">Password</span>
              </b-form-group>

              <div class="forgot text-right">
                <nuxt-link to="/forgot">Forgot Password</a></nuxt-link>
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
        username: '',
        password: '',
        isShowSpinner: false
      }
    },
    async mounted() {

    },
    methods: {
      onSubmit() {
        if (this.username == '') {
          console.log('Username Harus Diisi')
        } else if (this.password == '') {
          console.log('Password Harus Diisi')
        } else {
          let urlSubmit = 'user/login'
          let postData = {
            username: this.username,
            password: this.password
          }
          this.isShowSpinner = true
          let submitindex = this.postDataAPI(urlSubmit, postData).then(
            (data) => {
              this.$swal({
								toast: true,
								position: 'top-end',
								showConfirmButton: false,
								timer: 2000,
								type: 'success',
								text: 'Your logged'
							})
              this.$auth.login({data: postdata});
              this.$router.push('/confirm')
            },
            (error) => {
              this.isShowSpinner = false
              this.$swal({
    						toast: true,
    						position: 'top-end',
    						showConfirmButton: false,
    						timer: 2000,
    						type: 'error',
    						text: 'Something went wrong!'
    					})
            }
          )
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
