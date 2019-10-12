<template>
	<section>
		<div class="bg-top p-3"></div>
		<div class="bg-login" style="background-image: url('../assets/bg-login.png');">
			<nuxt />
		</div>
		<div class="bg-footer text-center p-2">
			<span>2019 &copy Longrich Bioscience | All Rights Reserved</span>
		</div>
	</section>
</template>

<style>
	.bg-top {
		background-color: #1ab7bc;
		width: 100%;
	}
	.bg-login {
		width: 100%;
		min-height: 725px;
		background-size: cover;
	}
	.bg-footer {
		color: #fff;
	}
	@media (min-width: 1600px){
		.bg-login {
			min-height: 900px;
		}
	}
	@media (min-width: 1900px){
		.bg-login {
			min-height: 1100px;
		}
	}
</style>
