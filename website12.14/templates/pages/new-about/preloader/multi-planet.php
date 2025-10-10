<?php
$seo_landing_url = cyn_get_url_by_page_template('seo');
$web_landing_url = cyn_get_url_by_page_template('ui-design');
$marketing_landing_url = cyn_get_url_by_page_template('marketing');



$planets =
	[
		[
			'title' => 'خدمات سئو',
			'link' => $seo_landing_url,
			'class' => 'red'
		],
		[
			'title' => 'طراحی وبسایت شخصی',
			'link' => $web_landing_url,
			'class' => 'yellow'
		],
		[
			'title' => 'همه خدمات',
			'link' => $marketing_landing_url,
			'class' => 'cyan'
		]
	]
	?>

<section class="multi-planet third">





	<div class="light-planet">

		</div>
	


		<div class="scroll-down cursor-pointer"> 			<img class="" src="<?= get_stylesheet_directory_uri() . '/assets/imgs/puzzle-image.png' ?>" />

	<h1 class="h1">مشاوره و پشتیبانی ۲۴ ساعته</h1>
		<!-- <img class="puzzle" src="<?= get_stylesheet_directory_uri() . '/assets/imgs/puzzle.png' ?>" /> -->
		<div>
			<?php get_template_part('/templates/components/scroll') ?>

		</div>


		</div>

	
</section>