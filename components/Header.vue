<template>
	<header class="sticky-top">
		<div class="headTop">
			<div class="nav-uper container">
				<div class=" col-xl-10 col-lg-6">
					<nuxt-link to="/">
						<img src="@/static/assets/logo.png" class="img-fluid" style="height: 60px;"/>
					</nuxt-link>
				</div>
				<div v-if="authenticated" class="col-xl-2 col-lg-2 pl-0 d-flex justify-content-end">
					<div class="btn btn-outline-login btnLogout" @click.prevent="signOut"><span>Logout</span></div>
				</div>
				<div v-else class="col-xl-2 col-lg-3 pl-0 d-flex justify-content-end">
					<nuxt-link to="/login" class="btn btn-outline-login mr-2">Masuk</nuxt-link>
					<nuxt-link to="/signup" class="btn btn-outline-login">Daftar</nuxt-link>
				</div>
			</div>
		</div>

	</header>
</template>

<script>
export default {
	methods: {
		signOut() {
			//console.log('test')
			this.$auth.logout();
		}
	}
}
</script>

<style scoped>
	header {
		background: #ffffff;
	}
	#mainNav {
		padding-bottom: 0px;
	}
	.btn-outline-hijau {
		border: 1px solid #008080;
		color: #008080;
		padding: 1px 10px 2px 10px;
	}
	.navbar-nav li a.nav-link {
		color: #333333;
		font-size: 12px;
		position: relative;
	}
	.navbar-nav li a.nav-link em {
		color: #ffffff;
    font-style: normal;
    font-size: 7px;
    padding: 2px 5px 1px 5px;
    border-radius: 3px;
    font-weight: 600;
    background: #f2300c;
    position: absolute;
    top: -2px;
    right: 0;
	}
	.dropdown-toggle::after {
		display: none;
	}
	hr {
		border-top: #fff solid 1px;
	}
	.align-center {
		align-items: center;
	}
	.mgr-4 {
		margin-right: 1rem;
	}
	.btn-hijau {
		background-color: #008080;
		padding: 6px;
		color: #fff;
	}
	.navbar-dark .navbar-nav .nav-link{
		color: #fff;
	}
	.btnLogout {
		cursor: pointer;
	}
	.btnLogout span{
		top: -1px;
		position: relative;
	}
	.boxShadow {
		box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.29);
	}
	.bg-biru {
		background-color: #ffffff !important;
		color: #333 !important;

	}
	.btn-outline-login{
		padding: 4px 23px;
		border-radius: 5px;
		border: 1px #fff solid;
		background-color: #fff;
		color: #ffffff;
		background: #0816bf;
	}
	.btn-outline-login:hover {
		color: #fff;
		background: #4b56dc;
	}
	.headTop {
		border-bottom: 2px solid #319a75;
	}
	.nav-uper{
		display: flex;
		align-items: center;
		height: 85px;
		background: #ffffff;
		color: #fff;
	}
	a {
		text-decoration: none;
	}
	@media (max-width: 1030px){
	}
	@media (max-width: 780px){
		.mgr-4{
			margin-right: 0px;
		}
		.align-center {
			align-items: flex-start;
		}
	}
</style>
