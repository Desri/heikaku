<template>

	<a-form
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
						]"
						showSearch
						placeholder="Select Status"
						optionFilterProp="children"
						@change="changeStatus"
						:filterOption="filterOption">
						<a-select-option v-for="item in status" :value="item.id" :key="item.id">{{ item.name }}</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>
			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'category',
						]"
						showSearch
						placeholder="Select Category"
						optionFilterProp="children"
						@change="changeCategori"
						:filterOption="filterOption">
						<a-select-option v-for="item in category" :value="item.id" :key="item.id">{{ item.name }}</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>
			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'province',
						]"
						showSearch
						placeholder="Select Province"
						optionFilterProp="children"
						@change="changeProvince"
						:filterOption="filterOption">
						<a-select-option v-for="item in province" :value="item.id" :key="item.id">{{ item.name }}</a-select-option>
					</a-select>
				</a-form-item>
			</b-col>
			<b-col sm="12" lg="2" class="p-2">
				<a-form-item>
					<a-select
						v-decorator="[
							'city',
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
	import {mapGetters} from 'vuex'
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
			...mapGetters({
				status: 'jobSearch/status',
				category: 'jobSearch/category',
				province: 'jobSearch/province',
			}),
		},
		async mounted() {
			await this.$store.dispatch('jobSearch/GET_STATUS');
			await this.$store.dispatch('jobSearch/GET_CATEGORY');
			await this.$store.dispatch('jobSearch/GET_PROVINCE');
		},

		methods: {
			handleSubmit (e) {
	      e.preventDefault();
	      this.form.validateFields((err, values) => {
	        if (!err) {
	          console.log('Your submit data is: ', values);
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
