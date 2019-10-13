<template>
	<header class="sticky-top">

		<b-navbar toggleable="lg" type="dark" class="navbar-custome">
    	<b-navbar-brand href="#"><span>Your</span> Work</b-navbar-brand>
    	<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	    <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav>
	        <b-nav-item href="#">JOB</b-nav-item>
					<b-nav-item href="#">COUPON</b-nav-item>
					<b-nav-item href="#">PLACE</b-nav-item>
	      </b-navbar-nav>

	      <!-- Right aligned nav items -->
	      <b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<template v-slot:button-content>
	            <span><img src="@/static/assets/ina.png"> IND</span>
	          </template>
	          <b-dropdown-item href="#"><img src="@/static/assets/en.png"> EN</b-dropdown-item>
	        </b-nav-item-dropdown>

					<b-nav-item href="#">
						<div class="btnCompany">
							Perusahaan
						</div>
					</b-nav-item>

					<div class="colAction">
						<div class="colBtns">
							<div class="btnSignin">
								<nuxt-link :to="`#`">Masuk</nuxt-link>
							</div>
							<div class="line"></div>
							<div class="btnSignup">
								<nuxt-link :to="`#`">Daftar</nuxt-link>
							</div>
						</div>
					</div>

	      </b-navbar-nav>
	    </b-collapse>
		</b-navbar>
	</header>
</template>

<script>
	export default {

	}
</script>

<style scoped>

</style>
