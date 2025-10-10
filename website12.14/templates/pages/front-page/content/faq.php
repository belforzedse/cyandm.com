<?php
$faq_Q = new WP_Query( [ 
	'post_type' => 'faq',
	'posts_per_page' => 5,
	'meta_query' => [ 
		[ 
			'key' => 'show_in_front',
			'value' => 1,
		]
	],
	'order' => 'ASC',
	'orderby' => 'menu_order',
] );

$faq_image = wp_get_attachment_image( get_field( 'faq_section_image' ), 'full' );
$link_all = get_post_type_archive_link( 'faq' );
?>


<?php if ( $faq_Q->have_posts() ) : ?>
	<section class="faq-con container">

		<div class="section-title">
			<h2 class="h1">
				سوالات متداول
			</h2>

			<a href=<?= $link_all ?>
			   class="primary-btn">
				مشاهده همه
			</a>
		</div>

		<div class="faq-content">


			<div class="faq-posts">
				<?php
				while ( $faq_Q->have_posts() ) {
					$faq_Q->the_post();
					get_template_part( '/templates/components/card/faq' );
				}

				wp_reset_postdata();

				?>
			</div>

			<div class="faq-image">
				<?= $faq_image ?>
			</div>
		</div>


		<!-- <div class="section-view-all">
			<a href=<?= $link_all ?>
			   class="primary-btn full-width">
				مشاهده همه
			</a>
		</div> -->
	</section>
<?php endif; ?>