<?php
$id = isset( $args['post-id'] ) ? $args['post-id'] : get_the_ID();
$terms = get_the_terms($id, 'project_type' );
$feature_img = get_post_thumbnail_id( $id ) ?? null;
$gallery = get_field( 'gallery', $id );
$gallery_show = [ 'pic_1', 'pic_2', 'pic_3', 'pic_4' ];
// var_dump($terms);
?>

<div class="project-on-hover">

	<div class="head">
		<div class="right-col">
			<h3>
				<?= get_the_title( $id ) ?>
			</h3>
			<div>
				<?= get_field( 'short_desc', $id ) ?>
			</div>
		</div>
		<div class="left-col">
		        <?php
				if ($terms):
					foreach ($terms as $cat): ?>
						<a href=<?= get_term_link($cat->term_id) ?>>
							<span class="cat-<?= $cat->slug ?>  p-4 rounded-md"> <?php echo $cat->name ?> </span></a>
					<?php endforeach; endif; ?>
		</div>
	</div>

	<div class="project-content">
		<div class="img-con">
			<?=
				$feature_img ? wp_get_attachment_image( $feature_img, 'large' ) : "<img src='" . get_stylesheet_directory_uri() . "/assets/imgs/placeholder.png' />";
			?>
		</div>
 <a href=<?= get_permalink($id) ?> class="primary-btn">
		مشاهده پروژه
	</a>
	</div>

	<div class="gallery">
		<?php foreach ( $gallery as $index => $img ) {
			if ( in_array( $index, $gallery_show ) && $img )
				printf( '<div class="img-wrapper">%s</div>', wp_get_attachment_image( $img, 'full' ) );
		} ?>
	
	</div>
</div>