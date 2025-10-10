<?php
$employs_Q = new WP_Query([
	'post_type' => 'employ',
	'posts_per_page' => '4',
	'orderby' => 'menu_order',
	'order' => 'ASC',
	'meta_query' => [
		[
			'key' => 'show_in_front',
			'value' => 1,
		]
	]
]);

$link_all = get_post_type_archive_link('employ');
?>
<?php if ($employs_Q->have_posts()): ?>
	<section class="team-con container  swiper-slide">
		<div class="section-title">
			<h2 class="h1">
				کارای حرفه‌ای یه تیم حرفه‌ای می‌خواد
			</h2>
			<a href=<?= $link_all ?> class="primary-btn">
				مشاهده همه
			</a>
		</div>
		<div class="team-wrapper  w-full">
			<div class="profile-wrapper d-flex gap-4">
				<?php
				while ($employs_Q->have_posts()):
					$employs_Q->the_post();

					get_template_part('/templates/components/card/employ', null, ['post_id' => get_the_ID()]);
				endwhile;

				wp_reset_postdata();
				?>


			</div>
		</div>

		<div class="section-view-all">
			<a href=<?= $link_all ?> class="primary-btn full-width">
				مشاهده همه
			</a>
		</div>
	</section>
<?php endif; ?>