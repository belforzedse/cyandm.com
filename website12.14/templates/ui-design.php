<?php
/* 
Template Name: UI Design
*/?>


<?php get_header( args: [ 'start_color' => '#FFC806', 'end_color' => '#CB5500' ] ); ?>


<main class="ui-design service-page"
	  style="
		  --start-color: #FFC806;
		--end-color: #CB5500;">
	<div class="swiper"
		 id="uiDesignSwiper">
		<div class="swiper-wrapper">
			<?php get_template_part( '/templates/pages/services/ui-design/slide-0' ) ?>
			<?php get_template_part( '/templates/pages/services/work-steps' ) ?>
			<?php get_template_part( '/templates/pages/services/portfolio' ) ?>
			<?php get_template_part( '/templates/pages/services/faq' ) ?>
			<?php get_template_part( '/templates/pages/services/contact' ) ?>


			<?php get_template_part( '/templates/pages/services/footer' ) ?>
		</div>
	</div>
</main>




<?php get_footer( args: [ 'render' => false ] ); ?>