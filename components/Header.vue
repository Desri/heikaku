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

	}
</script>

<style scoped>

</style>
