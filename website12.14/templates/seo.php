<?php /* Template Name: SEO */?>

<?php get_header( null, [ 'start_color' => '#FF0000', 'end_color' => '#370000' ] ) ?>

<main class="seo service-page"
	  style="
		  --start-color: #FF0000;
		--end-color: #370000;">

	<div class="swiper"
		 id="seoMainSwiper">
		<div class="swiper-wrapper">
			<?php get_template_part( '/templates/pages/services/seo/slide-0' ) ?>
			<?php get_template_part( '/templates/pages/services/work-steps' ) ?>
			<?php get_template_part( '/templates/pages/services/portfolio' ) ?>
			<?php get_template_part( '/templates/pages/services/faq' ) ?>
			<?php get_template_part( '/templates/pages/services/contact' ) ?>


			<?php get_template_part( '/templates/pages/services/footer' ) ?>
		</div>
	</div>

</main>

<?php get_footer( null, [ 'render' => false ] ) ?>