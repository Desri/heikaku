<template>
  <div>

    <section id="searchJob">
      <searchLoker/>
    </section>

    <section id="list-loker">
      <b-container class="customeContainer">
        <div class="heading">
          <b-row>
            <b-col sm="12" lg="6">
              <div class="textHeading">
                <h1>Lowongan Kerja Terbaru dan Terupdate</h1>
              </div>
            </b-col>
            <b-col sm="12" lg="6">
              <div class="filter">
                <label @click="showModal">Filter</label>
              </div>
            </b-col>
          </b-row>
        </div>
        <listLoker/>
      </b-container>
    </section>

    <!-- Modal -->
    <a-modal
      title="Filter"
      v-model="visible"
      @ok="handleOk"
      class="modalFilter"
      :footer="null"
    >
      <a-form
        :form="form"
        class="login-form"
        @submit="handleFilter"
      >
        <a-row>
          <a-col :span="8">
            <div class="colList">
              <label class="labelFilter">Fasilitas</label>
              <div class="listFilter">
                <div class="listCheck" v-for="data in facilities" :key="data.id">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">{{data.name}}</span>
                  </a-checkbox>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="colList">
              <label class="labelFilter">Benefit</label>
              <div class="listFilter">
                <div class="listCheck" v-for="data in benefit" :key="data.id">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">{{data.name}}</span>
                  </a-checkbox>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="colList noBorder">
              <label class="labelFilter">Minimal Pengalaman Kerja</label>
              <div class="listFilter">
                <div class="listCheck" v-for="data in experience" :key="data.id">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">{{data.name}}</span>
                  </a-checkbox>
                </div>
                <div class="colBtn">
                  <a-form-item>
          		      <a-button
          		        type="primary"
          		        html-type="submit"
          		      >
          		        Apply
          		      </a-button>
          		    </a-form-item>
                  <a-form-item>
          		      <a-button
          		        type="primary"
          		        html-type="submit"
          		      >
          		        Reset
          		      </a-button>
          		    </a-form-item>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import searchLoker from '@/components/searchLoker'
  import listLoker from '@/components/listLoker'
  export default {
    components:{
      searchLoker,
      listLoker
    },
    data() {
      return {
        visible: false,
        form: this.$form.createForm(this),
      }
    },
    computed: {
			...mapGetters({
				facilities: 'jobFilter/facilities',
        benefit: 'jobFilter/benefit',
        experience: 'jobFilter/experience',
			}),
		},
    async mounted() {
      await this.$store.dispatch('jobFilter/GET_FACILITIES');
      await this.$store.dispatch('jobFilter/GET_BENEFIT');
      await this.$store.dispatch('jobFilter/GET_EXPERIENCE');
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        this.visible = false
      },
      handleFilter (e) {
	      e.preventDefault();
	      this.form.validateFields((err, values) => {
	        if (!err) {
	          console.log('Your submit data is: ', values);
	        }
	      });
	    },
    }

  }
</script>
