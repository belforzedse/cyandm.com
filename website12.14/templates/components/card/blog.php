<?php
$rel = isset( $args['rel'] ) ? $args['rel'] : null;
$title = get_the_title();
$author = get_the_author_meta( 'display_name' );
$comment_num = get_comment_count()['approved'];
$thumbnail = wp_get_attachment_image( get_post_thumbnail_id(), 'full' );
$link = get_permalink();

?>

<a class="post-card"
   <?= isset( $rel ) ? 'rel="nofollow"' : '' ?>
   href="<?= $link ?>">
	<div class="post-card__thumbnail">
		<?= $thumbnail ?>
	</div>

	<div class="post-card__content">
		<div class="post-card__title-wrapper">
			<h3 class="post-card__title">
				<?= $title ?>
			</h3>

			<p class="post-card__author">
				<?= 'نویسنده: ' . $author ?>
			</p>
		</div>

		<!-- <div class="post-card__actions">
			<div class="post-card__comment">
				<i class="icon-comment"></i>
				<span>
					<?= $comment_num ?>
				</span>
			</div>
			<div class="post-card__like">
				<i class="icon-like"></i>
			</div>
		</div> -->
	</div>

</a>