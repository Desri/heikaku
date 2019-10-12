<template>
  <section id="signup">

    <b-container>
      <b-row>
        <b-col sm="6" class="mx-auto py-5">
          <div class="boxForm">
            <h2>Forgot Password</h2>
            <b-form>
              <b-form-group
                class="labelForm">
                <b-form-input
                  type="text"
                  v-model="email"
                ></b-form-input>
                <span v-show="isShowEmail" class="help is-danger text-left">Masukkan Email</span>
                <span class="ph">Email</span>
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
        email: '',
        isShowSpinner: false,
        isShowEmail: false
      }
    },
    async mounted() {

    },
    methods: {
      onSubmit() {
        if (this.email == '') {
          this.isShowEmail = true
        } else {
          let urlSubmit = 'user/forget-password'
          let postData = {
            email: this.email
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
								text: 'Check Your Email'
							})
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
