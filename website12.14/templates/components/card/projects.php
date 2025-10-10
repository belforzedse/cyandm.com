<?php
$post_id = isset($args['project-id']) ? $args['project-id'] : get_the_id();
$add_class = isset($args['additional_class']) ? $args['additional_class'] : '';

$project_color = get_field('main_color', $post_id);
$feature_img = get_post_thumbnail_id($post_id);
?>



<div class="<?php printf('single-project-card %s', $add_class) ?>" style="<?= '--project-color: ' . $project_color ?>"
	data-post-id=<?= $post_id ?>>

	<div class="image-wrapper">
		<?php if ($feature_img): ?>
			<?= wp_get_attachment_image($feature_img, 'large') ?>
		<?php else: ?>
			<img src=<?= get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' ?> alt="place-holder">
		<?php endif; ?>
	</div>
</div>