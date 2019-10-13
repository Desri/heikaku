<template>

	<b-row>
		<b-col sm="12" lg="6" v-for="data in listJob" :key="data.id" class="mb-3 pl-2 pr-2">
			<div class="listCard">
				<b-card header-tag="header" footer-tag="footer">
		      <template v-slot:header>
		        <h6 class="mb-0">{{data.company_name}}</h6>
		      </template>
					<div class="mediaList">
						<div class="img">
							<img src="@/static/assets/company1.jpg">
						</div>
						<div class="descList">
							<h2>{{data.job_name}}</h2>
							<div class="sallary">
								<span>Rp {{ formatPrice (data.min_sallary) }} <span v-if="data.max_sallary != null">- Rp. {{ formatPrice (data.max_sallary) }}</span> / Bulan</span><br>
								<em class="green" v-if="data.negotiable == true">Gaji Dapat Dinegosiasi</em>
								<em class="red" v-else>Gaji Tidak Dapat Dinegosiasi</em>
							</div>
							<div class="jobs-info">
								<p>Lowongan Pekerjaan di <strong>{{data.place}}</strong></p>
								<p>Lowongan Pekerjaan di Bidang <strong>{{data.job_category}}</strong></p>
								<p>Lowongan Pekerjaan <strong>{{data.job_status}}</strong></p>
							</div>
							<div class="static">
								<div class="views">
									<span>Dilihat: {{data.views}} Orang</span>
								</div>
								<div class="applicants">
									Pelamar: {{data.applicants}} Orang
								</div>
							</div>
						</div>
					</div>
		    </b-card>
			</div>
		</b-col>
	</b-row>

</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				listJob: [],
			}
		},
		computed: {

		},
		async mounted() {
			this.getData('/api/list.json').then(
				(data) => {
					this.listJob = data
				},
				(error) => {
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
		},
		methods: {

		},
	}
</script>

<style scoped>

</style>
