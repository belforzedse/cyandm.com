<?php get_header();
$post_id = isset($args['post_id']) ? $args['post_id'] : get_the_ID();
?>
<?php get_template_part('templates/components/sideBarComment') ?>

<?php get_template_part('/templates/components/breadcrumb') ?>

<main class="post-single container">
	<?php get_template_part('/templates/components/sidebar', 'post') ?>

	<article class="post-single-container p-6">

		<div>
			<div class="img-wrapper post-single-thumbnail">
				<?= wp_get_attachment_image(get_post_thumbnail_id(), 'full') ?>
			</div>

			<div class="post-single-information flex justify-between p-4">
				<div class=" flex gap-2 items-center">
					<span class=" text-white-1 ml-2 text-body_s">
						<?= get_the_author_meta('display_name', get_post_field('post_author', get_the_ID())); ?>
					</span>
					<?= get_the_date('d M') ?>
				</div>
				<div
					class="bg-[rgba(63,60,195,0.06)] text-h5 border text-white-1 rounded-xl items-center gap-4 border-[rgba(251,251,251,0.16)] p-4 flex flex-col">
					<i class="text-[24] icon-comment"></i>
					<span>
						<?= get_comments_number($post_id); ?>

					</span>

				</div>

			</div>

			<div class="post-single-title">
				<h1>
					<?= get_the_title() ?>
				</h1>

			</div>

			<div class="post-single-content [&_img]:py-4 [&_img]:rounded-3xl [&_h2]:text-h2 [&_h4]:text-h4 [&_h4]:text-h4 [&_blockquote]:border-r-2 [&_blockquote]:px-4 
		[&_p]:text-white-3 [&_blockquote]:border-blue-2 
			 [&_blockquote]:text-gray-1 [&_a]:text-cyn-2 ">
				<?php the_content() ?>
			</div>

			<div class="post-single-comment">

			</div>






		</div>
		<div class="blog-comments" id="blog_comment">

			<?php echo comments_template();
			?>
		</div>

	</article>

</main>

<?php get_footer() ?>