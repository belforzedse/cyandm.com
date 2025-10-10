<section class="clock-section container">

	<div class="content">
		<?php
		$about = get_field('about_us_section'); ?>

		<div class="swiper  abouts">
			<div class="swiper-wrapper">
				<?php
				for ($i = 1; $i < 4; $i++) {

					?>
					<div class="sections  swiper-slide  ">

						<div class="section-content ">
							<h1 class="h1"><?= get_field("about_title.$i"); ?></h1>
							<p><?= get_field("about_section.$i") ?> </p>
							<?php get_template_part('/templates/components/scroll') ?>


						</div>
					</div>

				<?php } ?>	<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			</div>
		

		</div>

	</div>

</section>