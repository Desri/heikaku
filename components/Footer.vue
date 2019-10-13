<template>
	<footer>
		<b-container>
			<b-row>
				<b-col lg="5" style="margin-bottom: 20px;">
					<div class="footerAbout">
						<h3>YourWORK</h3>
						<p>YourWork adalah sebuah perusahaan penyedia informasi lowongan pekerjaan terkemuka di Asia yang menghubungkan para pengguna dengan bisnis untuk meningkatkan taraf hidup dengan melalui karier yang lebih baik.</p>
					</div>
				</b-col>

				<b-col lg="3" style="margin-bottom: 20px;">
					<div class="footerLink">
						<h3>USER</h3>
						<ul>
							<li><nuxt-link :to="`#`">About Us</nuxt-link></li>
							<li><nuxt-link :to="`#`">Register User</nuxt-link></li>
							<li><nuxt-link :to="`#`">Terms & Conditions User</nuxt-link></li>
							<li><nuxt-link :to="`#`">FAQ User</nuxt-link></li>
						</ul>
					</div>
				</b-col>

				<b-col lg="4" style="margin-bottom: 20px;">
					<div class="footerSosmed">
						<h3>IKUTI KAMI</h3>
						<ul>
							<li>
								<a href="#" target="_blank">
									<div class="icons fb">
										<i class="fa fa-facebook" aria-hidden="true"></i>
									</div>
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									<div class="icons ig">
										<i class="fa fa-instagram" aria-hidden="true"></i>
									</div>
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									<div class="icons gplus">
										<i class="fa fa-google-plus" aria-hidden="true"></i>
									</div>
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									<div class="icons yt">
										<i class="fa fa-youtube-play" aria-hidden="true"></i>
									</div>
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									<div class="icons twit">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</div>
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									<div class="icons in">
										<i class="fa fa-linkedin" aria-hidden="true"></i>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</b-col>

			</b-row>
		</b-container>

	</footer>
</template>
