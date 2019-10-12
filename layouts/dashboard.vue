<template>
	<section class="col-12">
		<main class="row wrap-page">
			<div class="col-lg-1 px-0">
				<Sidebar/>
			</div>
			<div class="main col-lg-11 col-12 pdl-0">
				<nuxt/>
			</div>
		</main>
		<div class="row page-footer">
			<div class="col-12 col-lg-1"></div>
			<div class="col-lg-11 pdl-0">
				<Footer />
			</div>
		</div>
	</section>
</template>

<script>
	import Sidebar from '@/components/Sidebar'
	import Footer from '@/components/Footer-2'
	export default {
		components : {
			Sidebar,
			Footer
		},
		Head: {
			link: [
	      { rel: 'stylesheet', href: '~/static/css/member.css' }
	    ]
		}
	}
</script>

<style scoped>
	.page-footer {
		position: relative;
		bottom: 0;
	}
	.wrap-page {
		min-height: 710px;
	}
	.pdl-0 {
		padding-left: 0;
	}
	@media (max-width: 780px) {
		.pdl-0 {
			padding-left: 15px;
		}
		.main {
			margin-top: 70px;
		}
	}
	@media (max-width: 480px) {
		.main {
			margin-top: 50px;
		}
		.col-lg-1 {
			width: auto;
		}
	}
	@media (max-width: 1366px) {
		.wrap-page {
			min-height: 620px;
		}
	}
</style>