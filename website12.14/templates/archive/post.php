<?php
$title = isset( $args['title'] ) ? $args['title'] : get_the_archive_title();
?>

<?php get_header() ?>

<main class="archive-post container">

	<h1><?= $title ?></h1>

	<div class="archive-post-wrapper">
		<?php

		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post();
				get_template_part( '/templates/components/card/blog' );
			endwhile;
		endif;

		?>
	</div>


</main>

<?php get_footer() ?>