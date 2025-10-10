<?php
for ( $i = 1; $i <= 5; $i++ ) :

	$title = get_field( 'title_slide_' . $i );
	$content = get_field( 'content_slide_' . $i );
	$media = wp_get_attachment_image( get_field( 'media_slide_' . $i ), [ 400, 400 ] );

	if ( ! $title || ! $content || ! $media )
		continue;
	?>


	<div class="swiper-slide  work-step">

		<div class="container">
			<div class="work-step-content">
				<h2 class="work-step-title"><?= $title ?></h2>

				<div>
					<?= $content ?>
				</div>

			</div>

			<div class="work-step-image">
				<?= $media ?>
			</div>


		</div>



	</div>

<?php endfor; ?>