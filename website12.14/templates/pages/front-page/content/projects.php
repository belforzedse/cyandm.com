<?php
$projects_Q = new WP_Query([
	'post_type' => 'project',
	// 'posts_per_page' => 3,
	'meta_query' => [
		[
			'key' => 'show_in_front',
			'value' => 1,
		]
	],
	'order' => 'ASC',
	'orderby' => 'menu_order',
]);

$link_all = get_post_type_archive_link('project');


?>


<?php if ($projects_Q->have_posts()): ?>
	<section class="projects-con">
		<div class="section-title container">
			<h2 class="h1">گوشه ای از پروژه‌های موفق سایان</h2>

			<a href=<?= $link_all ?>
			   class="primary-btn">
				مشاهده همه
			</a>
		</div>

		<div class="projects-wrapper swiper">
			<div class="swiper-wrapper">


				<?php
				while ($projects_Q->have_posts()):
					$projects_Q->the_post();
					get_template_part(
						'templates/components/card/projects',
						null,
						['additional_class' => 'swiper-slide']
					);
				endwhile;

				wp_reset_postdata();

				?>


			</div>
		</div>

		<div class="section-view-all">
			<a href=<?= $link_all ?>
			   class="primary-btn full-width">
				مشاهده همه
			</a>
		</div>

	</section>
<?php endif; ?>