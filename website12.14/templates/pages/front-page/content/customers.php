<?php
$customers_Q = new WP_Query( [ 
	'post_type' => 'customer',
	
	'meta_query' => [ 
		[ 
			'key' => 'show_in_front',
			'value' => 1,
		]
	],
	'order' => 'ASC',
	'orderby' => 'menu_order',
] );


?>



<?php if ( $customers_Q->have_posts() ) : ?>
	<section class="customer-con container">

		<div class="section-title">
			<h2 class="h1"> نظرات همراهان ما</h2>
		</div>

		<div class="customer-wrapper swiper">
			<div class="swiper-wrapper">
				<?php

				while ( $customers_Q->have_posts() ) {
					$customers_Q->the_post();
					get_template_part( 'templates/components/card/customer', null, [ 'additional_class' => 'swiper-slide' ] );
				}

				?>
			</div>
		</div>

		<div class="customer-thumbs swiper">
			<div class="swiper-wrapper">


				<?php while ( $customers_Q->have_posts() ) :
					$customers_Q->the_post();
					$feature_img = wp_get_attachment_image( get_post_thumbnail_id(), [ 0, 480 ] );
					?>
					<div class="swiper-slide">
						<?= $feature_img !== '' ?
							$feature_img :
							'<img src="' . get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' . '" />';
						?>
					</div>
					<?php
				endwhile;
				wp_reset_postdata();
				?>


			</div>
		</div>

	</section>
<?php endif; ?>