<?php
/* Template Name: Front Page */?>

<?php get_header(); ?>
<section class="mobile-header  justify-center" style="background-image: url(<?= wp_get_attachment_image_url(get_field('mobile_hero'), 'full'); ?>);">
	<div class="mobile-title">
 

		<p class=""><?= get_field('mobile_hero_title'); ?> </p>
		<a href="<?= get_field('mobile_hero_link'); ?>"><?= get_field('mobile_hero_link_text'); ?></a>
		 
	</div>

</section>
<div class="container preloader">
	<?php get_template_part( '/templates/pages/front-page/preloader/__index' ) ?>
	<div class="bottom-fire home-page-fire">

	</div>
</div>

<main class="front-page">
	<?php get_template_part( '/templates/pages/front-page/content/__index' ) ?>
</main>

<?php get_footer(); ?>