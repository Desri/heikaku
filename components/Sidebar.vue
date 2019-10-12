<template>
	<div class="w-100">
		<div class="side1 position-fixed text-center d-none d-lg-block">


			

		</div>


	  <b-navbar toggleable="sm" type="dark" variant="info" class='position-fixed w-100 d-lg-none' style='z-index: 100;'>


	    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	    <b-collapse id="nav-collapse" is-nav>

	    </b-collapse>
	  </b-navbar>
	</div>
</template>

<style scoped>
	.bg-info {
		background-color: #006666 !important;
	}
	.side1 {
		color: #fff;
		background-color: #006666;
		min-height: 770px;
	}
	.navbar-dark .navbar-nav .nav-link {
		color: #fff;
	}
	.navbar-dark .navbar-toggler {
		border-color: transparent;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
	hr{
		border-top: 3px #59b2aa solid;
	}
	.logout {
		position: absolute;
		bottom: 20px;
		left: 10%;
		width: 80%;
	}
	@media (max-width: 1366px){
		.logout {
			bottom: 19%;
		}
	}
	@media (min-width: 768px){
		.d-blocks {
			display: block;
			margin-right: auto;
			margin-left: auto;
		}
	}
</style>
