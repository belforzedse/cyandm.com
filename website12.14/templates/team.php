<?php /* Template Name: Team*/
get_header();
$employs_Q = new WP_Query([
	'post_type' => 'employ',
	'meta_key' => 'order_home_page',
	'orderby' => 'menu_order',
	'order' => 'ASC',
	'posts_per_page' => 40,

]);

$link_all = get_post_type_archive_link('employ');

?>

<?php if ($employs_Q->have_posts()): ?>
	<section class="team-con container">

		<div class="section-title">
			<h2 class="h1">
				کارای حرفه‌ای یه تیم حرفه‌ای می‌خواد
			</h2>
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


	</section>
<?php endif; ?>