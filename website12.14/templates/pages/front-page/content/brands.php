<?php
$logos =  get_field( 'img_1' );
 ?>
<?php if ( $logos) : ?>

	<section class=" container brands-con">
		<h2 class="h1">برندهایی که افتخار همکاری باهاشون را داشتیم</h2>

		<div class="brands-wrapper swiper"
			 id="brandsSwiper">
			<div class="swiper-wrapper">

				<?php
				for ($i = 1; $i < 12; $i++) {
					$logo = get_field("img_$i");

					?>
	<div class="img-wrapper swiper-slide">
						<?= wp_get_attachment_image( $logo, 'full' ) ?>
					</div>

				<?php } ?>
			</div>
		</div>
	</section>

<?php endif; ?>