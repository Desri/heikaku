<template>
  <div>

    <section id="searchJob">
      <searchLoker/>
    </section>

    <section id="list-loker">
      <b-container>
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

                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Parkir Khusus Karyawan</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Antar Jemput Karyawan</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Ruangan Kerja Ber-AC</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Internet 24 jam</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Telepon Kantor</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Ruangan Meeting</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Ruangan Kerja Outdoor</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Ruangan Makan</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Seragam Bebas</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Cemilan Gratis</span>
                  </a-checkbox>
                </div>
                <div class="listCheck">
                  <a-checkbox
                    v-decorator="[
                      'remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,
                      }
                    ]"
                  >
                    <span class="textFilter">Kartu Nama Karyawan</span>
                  </a-checkbox>
                </div>
            </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="colList">
              <label class="labelFilter">Benefit</label>
              <div class="listFilter">
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Parkir Khusus Karyawan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Antar Jemput Karyawan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Kerja Ber-AC</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Internet 24 jam</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Telepon Kantor</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Meeting</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Kerja Outdoor</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Makan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Seragam Bebas</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Cemilan Gratis</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Kartu Nama Karyawan</span>
                </a-checkbox>
              </div>
            </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="colList noBorder">
              <label class="labelFilter">Minimal Pengalaman Kerja</label>
              <div class="listFilter">
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Parkir Khusus Karyawan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Antar Jemput Karyawan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Meeting</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Kerja Outdoor</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Ruangan Makan</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Seragam Bebas</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Cemilan Gratis</span>
                </a-checkbox>
              </div>
              <div class="listCheck">
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    }
                  ]"
                >
                  <span class="textFilter">Kartu Nama Karyawan</span>
                </a-checkbox>
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
    async mounted() {

    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
      },
      handleFilter (e) {
	      e.preventDefault();
	      this.form.validateFields((err, values) => {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
    }

  }
</script>
