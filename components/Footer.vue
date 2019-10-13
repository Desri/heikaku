<template>
	<footer>
		<b-container>
			<b-row>
				<b-col lg="4" style="margin-bottom: 20px;">
					<div class="footerAbout">
						<h3>YourWORK</h3>
						<p>YourWork adalah sebuah perusahaan penyedia informasi lowongan pekerjaan terkemuka di Asia yang menghubungkan para pengguna dengan bisnis untuk meningkatkan taraf hidup dengan melalui karier yang lebih baik.</p>
					</div>
				</b-col>

				<b-col lg="4" style="margin-bottom: 20px;">
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
							<!-- <li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li>
							<li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li>
							<li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li>
							<li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li>
							<li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li>
							<li><a href="#" target="_blank"><fa :icon="fas.faEnvelope"/></a></li> -->
						</ul>
					</div>
				</b-col>

			</b-row>
		</b-container>

	</footer>
</template>
