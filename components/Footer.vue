<template>
	<footer>
		<div class="bg-footer">
			<!-- <b-container> -->
				<!-- <b-row> -->
					<!-- <b-col lg="6" style="margin-bottom: 20px;">
						<div class="topFooter">
							<div class="titleFooter">
								<h3>FOLLOW & SUBSCRIBE</h3>
							</div>
						</div>

						<div class="topFooter">
							<div class="titleFooter">
								<h3>INFORMASI</h3>
							</div>
						</div>

					</b-col> -->
					<!-- <b-col lg="6" style="margin-bottom: 20px;">
						<div class="topFooter">
							<div class="titleFooter">
								<h3>PEMBAYARAN</h3>
							</div>
							<img src="@/static/assets/payment.png" class="img-payment">
						</div>

						<div class="topFooter">
							<div class="titleFooter">
								<h3>JASA PENGIRIMAN</h3>
							</div>
							<img src="@/static/assets/carrier.png" class="img-payment">
						</div>
					</b-col> -->

				<!-- </b-row> -->
			<!-- </b-container> -->
			<div class="text-center foterBtm">
				<small>&copy 2019 Design by. Dery Aprianto</small>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	.hr-bot{
		border-top: 1px solid #dadada;
	}
	.img-payment{
		height: 40px;
	}
	.bg-footer {
		border-top: 5px solid #4b56dc;
	}
	.foterBtm {
		padding: 15px;
		background: #020a6d;
	}
	
	.footerText h2 {
		font-size: 14px;
		margin-bottom: 15px;
	}
	.footerText small {
		font-size: 10px;
	}
	.footerText .descFooter p {
		font-size: 9px;
    margin-bottom: 7px;
	}


	.btn-hijau {
		background: #008080;
		padding: 6px;
		color: #fff;
	}
	.btn-hijau:hover {
		background: #006969;
	}
</style>
