<?php
$title = get_field( 'faq_title' );
$faq_ids = get_field( 'faqs' );
$image = wp_get_attachment_image( get_field( 'faq_image' ), [ 600, 600 ] );

if(!empty($title)):
?>

<div class="swiper-slide service-faq">

	<div class="container">
		<div class="faq-content">
			<h2 class="faq-title">
				<?= $title ?>
			</h2>

			<?php
			foreach ( $faq_ids as $key => $faq_id ) {
				get_template_part( '/templates/components/card/faq', args: [ 'faq_ID' => $faq_id ] );
			}
			?>
		</div>

		<div class="faq-image">
			<?= $image ?>
		</div>
	</div>


</div>

<?php endif; ?>