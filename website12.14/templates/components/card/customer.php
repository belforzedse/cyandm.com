<?php
$id = isset( $args['customer-id'] ) ? $args['customer-id'] : get_the_ID();
$add_class = isset( $args['additional_class'] ) ? $args['additional_class'] : '';
$related_project_id = get_field( 'project', $id );
$star_count = get_field( 'stars', $id );
$feature_img = wp_get_attachment_image( get_post_thumbnail_id( $id ), [ 0, 480 ] );
$video = get_field( 'video', $id );


?>


<div class="<?php printf( 'single-customer-card %s', $add_class ) ?>">
	<?php if ( $video === false ) : ?>
		<div class="feature-img">
			<?= $feature_img !== '' ?
				$feature_img :
				'<img src="' . get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' . '" />';
			?>
		</div>
	<?php else : ?>
		<div class="feature-video">
			<video class="plyr"
				   id="player"
				   src="<?= $video['url'] ?>"
				   controls
				   data-poster="<?= wp_get_attachment_image_src( get_post_thumbnail_id( $id ), 'full' )[0] ?>">
				<source src="<?= $video['url'] ?>">
			</video>
		</div>


	<?php endif; ?>

	<div class="content">
		<div class="name-wrapper">
			<p class="name">
				<?= get_the_title() ?>
			</p>
			<p class="project-name">
				<?= $related_project_id ? get_the_title( $related_project_id[0] ) : get_field( 'position', $id ) ?>
			</p>
		</div>

		<div class="stars-wrapper">
			<span class="counter">
				<?= '5 / ' . $star_count ?>
			</span>
			<div class="stars">
				<?php for ( $i = 1; $i <= 5; $i++ ) : ?>
					<svg xmlns="http://www.w3.org/2000/svg"
						 width="16"
						 height="15"
						 viewBox="0 0 16 15"
						 fill="none">
						<path fill-rule="evenodd"
							  clip-rule="evenodd"
							  d="M4.92463 14.3747C4.54449 14.5731 4.08459 14.5382 3.73879 14.2846C3.39298 14.031 3.22141 13.6029 3.29638 13.1807L3.90313 9.70294L1.34863 7.25494C1.03639 6.95717 0.921956 6.50705 1.05408 6.09631C1.1862 5.68557 1.54159 5.38658 1.96888 5.32669L5.51563 4.81969L7.11688 1.62544C7.30674 1.24236 7.69733 1 8.12488 1C8.55243 1 8.94303 1.24236 9.13288 1.62544L10.7341 4.81969L14.2809 5.32669C14.7082 5.38658 15.0636 5.68557 15.1957 6.09631C15.3278 6.50705 15.2134 6.95717 14.9011 7.25494L12.3466 9.70294L12.9534 13.1814C13.0284 13.6037 12.8568 14.0318 12.511 14.2853C12.1652 14.5389 11.7053 14.5739 11.3251 14.3754L8.12488 12.7217L4.92463 14.3747Z"
							  fill="<?= $i <= $star_count ? '#F5BE31' : '' ?>"
							  stroke="#F5BE31"
							  stroke-linecap="round"
							  stroke-linejoin="round" />
					</svg>
				<?php endfor; ?>
			</div>
		</div>

		<div class="desc-wrapper">
			<?= get_field( 'comment' ) ?>
		</div>

		<?php if ( $related_project_id ) : ?>
			<a href=<?= get_permalink( $related_project_id[0] ) ?>
			   class="link-btn">
				<i class="icon-arrowright"></i>
				مشاهده پروژه
			</a>
		<?php endif; ?>

	 
	</div>
</div>