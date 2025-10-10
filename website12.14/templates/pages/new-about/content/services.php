<?php
$services_Q = new WP_Query( [ 
	'post_type' => 'service',
	'meta_key' => 'order_home_page',
	'orderby' => 'meta_value',
	'order' => 'ASC'
] );
$link_all = get_post_type_archive_link('service');

?>

<?php if ( $services_Q->have_posts() ) : ?>
	<section class="services-con container">

	
		<div class="section-title">
			<h2 class="h1">چیکار می‌تونم برات بکنم؟</h2>
					<a href=<?= $link_all ?>
								   class="primary-btn">
									مشاهده همه
								</a>
		</div>

		<div class="services-wrapper">
			<?php while ( $services_Q->have_posts() ) :
				$services_Q->the_post();
				$id = get_the_ID();
				$title = get_field( 'alias_title_home_page', $id );
				$pic = wp_get_attachment_image( get_field( 'alias_picture_home_page', $id ), 'full' );
				$url = get_permalink( $id );
				$ball_first_color = get_field( 'ball_first_color_home_page' );
				$ball_second_color = get_field( 'ball_second_color_home_page' );
				$is_color_selected = $ball_first_color && $ball_second_color;
				$related_landing = get_field( 'related_landing' );

				?>

				<a href=<?= $related_landing ? $related_landing : '#' ?>
				   class="single-service-card"
				   style="<?php $is_color_selected &&
				   	printf( '--ball-first-color:%s; --ball-second-color:%s; ', $ball_first_color, $ball_second_color ) ?>">

					<span class="ball">

					</span>

					<div class="img-wrapper">
						<?= $pic ?>
					</div>

					<h3 class="h2">
						<?= $title ?>
					</h3>

					<span class="h3">
						اطلاعات بیشتر
					</span>

				</a>
				<?php
			endwhile;
			wp_reset_postdata();
			?>


			<span class="all-service">
				به کم قانع نشو...
			</span>
		</div>
	</section>
<?php endif; ?>