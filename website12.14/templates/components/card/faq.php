<?php
$faq_ID = isset( $args['faq_ID'] ) ? $args['faq_ID'] : get_the_ID();
$title = get_the_title( $faq_ID );
$content = get_the_content( post: $faq_ID );

?>


<div class="faq-card bg-black-2 px-4 py-8">
	<div class="faq-card__title-wrapper">

		<h3 class="faq-card__title">
			<?= $title ?>
		</h3>

		<i class="icon-arrow">

		</i>

	</div>

	<div class="faq-card__content-wrapper">
		<div>
			<p class="faq-card__content">
				<?= $content ?>
			</p>
		</div>
	</div>
</div>