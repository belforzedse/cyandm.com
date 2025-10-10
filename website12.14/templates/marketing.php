<?php /* Template Name: Marketing */?>

<?php get_header( null, [ 'start_color' => '#23F144', 'end_color' => '#04E97B' ] ) ?>

<main class="marketing service-page"
	  style="
		  --start-color: #23F144;
		--end-color: #04E97B;">

	<div class="swiper"
		 id="marketingMainSwiper">
		<div class="swiper-wrapper">
			<?php get_template_part( '/templates/pages/services/marketing/slide-0' ) ?>
			<?php get_template_part( '/templates/pages/services/work-steps' ) ?>
			<?php get_template_part( '/templates/pages/services/portfolio' ) ?>
			<?php get_template_part( '/templates/pages/services/faq' ) ?>
			<?php get_template_part( '/templates/pages/services/contact' ) ?>


			<?php get_template_part( '/templates/pages/services/footer' ) ?>
		</div>
	</div>

</main>

<?php get_footer( null, [ 'render' => false ] ) ?>