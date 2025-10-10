<?php /* Template Name: Under Construction */?>

<?php


?>


<?php get_header( null, [ 'render' => false ] ) ?>

<main class="under-construction container">

	<div class="under-construction-image">
		<?php cyn_render_image( get_post_thumbnail_id() ) ?>
	</div>

	<div class="under-construction-content">
		<?php the_content() ?>
	</div>

</main>

<?php get_footer( null, [ 'render' => false ] ) ?>