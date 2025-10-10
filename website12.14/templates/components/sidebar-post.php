<?php
$categories = get_categories(
	[ 'hide_empty' => false ]
);

$posts = new WP_Query( [ 
	'post_type' => 'post',
	'tax_query' => [ 
		[ 
			'taxonomy' => 'post_tag',
			'field' => 'slug',
			'terms' => [ 'recommended' ]
		]
	]
] );



?>

<aside class="post-sidebar">

	<span class="h2">
		دسته بندی ها
	</span>

	<div class="post-sidebar-categories">
		<?php foreach ( $categories as $cat ) : ?>

			<div class="category-wrapper">
				<div class="category-image">
					<?= wp_get_attachment_image( get_field( 'custom_thumbnail', 'category_' . $cat->term_id ), 'thumbnail' ) ?>
				</div>
				<div class="category-name">
					<a href="<?= get_term_link( $cat ) ?>"
					   rel="nofollow">
						<?= $cat->name ?>
					</a>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

	<span class="h2">
		شاید بپسندید
	</span>

	<div class="post-sidebar-recommended">
		<?php
		if ( $posts->have_posts() ) :
			while ( $posts->have_posts() ) :
				$posts->the_post();
				get_template_part( '/templates/components/card/blog', null, [ 'rel' => 'nofollow' ] );
			endwhile;
		endif;

		wp_reset_postdata();
		?>
	</div>




</aside>