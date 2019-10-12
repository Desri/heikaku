<template>
  <section id="signup">

    <b-container>
      <b-row>
        <b-col sm="6" class="mx-auto py-5">
          <div class="boxForm">
            <h2>Signup</h2>
            <b-form>
              <b-form-group
                class="labelForm">
                <b-form-input
                  type="email"
                  name="email"
                  v-model="email"
                ></b-form-input>
                <span class="ph">Email</span>
              </b-form-group>

              <b-form-group
                class="labelForm">
                <b-form-input
                  type="text"
                  name="username"
                  v-model="username"
                ></b-form-input>
                <span class="ph">Username</span>
              </b-form-group>

              <b-form-group
                class="labelForm">
                <b-form-input
                  type="password"
                  name="password"
                  v-model="password"
                ></b-form-input>
                <span class="ph">Password</span>
              </b-form-group>

              <b-form-group
                class="labelForm">
                <b-form-input
                  type="text"
                  v-model="referral"
                ></b-form-input>
                <span class="ph">Referral</span>
              </b-form-group>

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
        email: '',
        password: '',
        referral: '',
        isShowSpinner: false
      }
    },
    async mounted() {

    },
    methods: {
      onSubmit() {
        if (this.username == '') {
          console.log('Username Harus Diisi')
        } else if (this.email == '') {
          console.log('Email Harus Diisi')
        } else if (this.password == '') {
          console.log('Password Harus Diisi')
        } else {
          let urlSubmit = 'user/register'
          let postData = {
            username: this.username,
            email: this.email,
            password: this.password,
            referral: this.referral
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
								text: 'Your register account is created'
							})
              this.$router.push('/login')
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
</style>
