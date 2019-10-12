<template>
	<header class="sticky-top">

		<b-navbar toggleable="lg" type="dark">
    	<b-navbar-brand href="#">Your Work</b-navbar-brand>
    	<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	    <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav>
	        <b-nav-item href="#">JOB</b-nav-item>
					<b-nav-item href="#">COUPON</b-nav-item>
					<b-nav-item href="#">PLACE</b-nav-item>
	      </b-navbar-nav>

	      <!-- Right aligned nav items -->
	      <b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown text="Lang" right>
	          <b-dropdown-item href="#">EN</b-dropdown-item>
	          <b-dropdown-item href="#">ES</b-dropdown-item>
	          <b-dropdown-item href="#">RU</b-dropdown-item>
	          <b-dropdown-item href="#">FA</b-dropdown-item>
	        </b-nav-item-dropdown>

					<b-nav-form>
	          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
	        </b-nav-form>

	      </b-navbar-nav>
	    </b-collapse>
		</b-navbar>
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
