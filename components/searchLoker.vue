<template>

	<a-form
		id="components-form-login"
		:form="form"
		class="login-form"
		@submit="handleSubmit"
	>
		<b-row>
			<b-col sm="12" lg="3" class="p-2">
				<a-form-item>
		      <a-input
		        v-decorator="[
		          'posisi',
		          {rules: [{ required: true, message: 'Please input your posisi!' }]}
		        ]"
		        placeholder="Posisi jabatan yang dicari"
		      >
		      </a-input>
		    </a-form-item>
			</b-col>

			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'status',
							{rules: [{ required: true, message: 'Please select your province!' }]}
						]"
						showSearch
						placeholder="Select Status"
						optionFilterProp="children"
						@change="changeStatus"
						:filterOption="filterOption">
						<!-- <a-select-option v-for="item in provinces" :value="item.value">{{ item.text }}</a-select-option> -->
						<a-select-option value="1">Full Time</a-select-option>
						<a-select-option value="2">Part Time</a-select-option>
						<a-select-option value="3">Freelance</a-select-option>
						<a-select-option value="4">Internship</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>

			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'categori',
							{rules: [{ required: true, message: 'Please select your categori!' }]}
						]"
						showSearch
						placeholder="Select Category"
						optionFilterProp="children"
						@change="changeCategori"
						:filterOption="filterOption">
						<!-- <a-select-option v-for="item in provinces" :value="item.value">{{ item.text }}</a-select-option> -->
						<a-select-option value="1">Acara</a-select-option>
						<a-select-option value="2">Administrasi</a-select-option>
						<a-select-option value="3">Desain</a-select-option>
						<a-select-option value="4">Digital Influencer</a-select-option>
						<a-select-option value="5">Hukum</a-select-option>
						<a-select-option value="6">Human Resource</a-select-option>
						<a-select-option value="7">Jurnalistik</a-select-option>
						<a-select-option value="8">Keamanan</a-select-option>
						<a-select-option value="9">Kecantikan</a-select-option>
						<a-select-option value="10">Kesehatan</a-select-option>
						<a-select-option value="11">Keuangan</a-select-option>
						<a-select-option value="12">Komputer</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>

			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'categori',
							{rules: [{ required: true, message: 'Please select your province!' }]}
						]"
						showSearch
						placeholder="Select Province"
						optionFilterProp="children"
						@change="changeProvince"
						:filterOption="filterOption">
						<!-- <a-select-option v-for="item in provinces" :value="item.value">{{ item.text }}</a-select-option> -->
						<a-select-option value="1">Aceh</a-select-option>
						<a-select-option value="2">Bali</a-select-option>
						<a-select-option value="3">Banten</a-select-option>
						<a-select-option value="4">Bengkulu</a-select-option>
						<a-select-option value="5">Di Yogyakarta</a-select-option>
						<a-select-option value="6">DKI Jakarta</a-select-option>
						<a-select-option value="7">Gorontalo</a-select-option>
						<a-select-option value="8">Jambi</a-select-option>
						<a-select-option value="9">Jawa Barat</a-select-option>
						<a-select-option value="10">Jawa Tengah</a-select-option>
						<a-select-option value="11">Jawa Timur</a-select-option>
						<a-select-option value="12">Kalimantan Barat</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>
			
			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'categori',
							{rules: [{ required: true, message: 'Please select your city!' }]}
						]"
						showSearch
						placeholder="Select City"
						optionFilterProp="children"
						@change="changeCity"
						:filterOption="filterOption">
						<!-- <a-select-option v-for="item in provinces" :value="item.value">{{ item.text }}</a-select-option> -->
						<a-select-option value="1">Aceh</a-select-option>
						<a-select-option value="2">Bali</a-select-option>
						<a-select-option value="3">Banten</a-select-option>
						<a-select-option value="4">Bengkulu</a-select-option>
						<a-select-option value="5">Di Yogyakarta</a-select-option>
						<a-select-option value="6">DKI Jakarta</a-select-option>
						<a-select-option value="7">Gorontalo</a-select-option>
						<a-select-option value="8">Jambi</a-select-option>
						<a-select-option value="9">Jawa Barat</a-select-option>
						<a-select-option value="10">Jawa Tengah</a-select-option>
						<a-select-option value="11">Jawa Timur</a-select-option>
						<a-select-option value="12">Kalimantan Barat</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>

			<b-col sm="12" lg="1" class="p-2">
				<a-form-item>
		      <a-button
		        type="primary"
		        html-type="submit"
		        :disabled="hasErrors(form.getFieldsError())"
		      >
		        Search
		      </a-button>
		    </a-form-item>
			</b-col>

		</b-row>



	</a-form>
</template>

<script>
	function hasErrors (fieldsError) {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}
	export default {
		data() {
			return {
				hasErrors,
				form: this.$form.createForm(this),
			}
		},
		computed: {

		},
		async mounted() {

		},

		methods: {
			handleSubmit (e) {
	      e.preventDefault();
	      this.form.validateFields((err, values) => {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
			filterOption(input, option) {
	      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	    },
			changeStatus() {

			},
			changeCategori() {

			},
			changeProvince() {

			},
			changeCity() {

			}
		},
	}
</script>

<style scoped>

</style>
