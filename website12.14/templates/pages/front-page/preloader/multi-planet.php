<?php
$seo_landing_url = cyn_get_url_by_page_template( 'seo' );
$web_landing_url = cyn_get_url_by_page_template( 'ui-design' );
$marketing_landing_url = cyn_get_url_by_page_template( 'marketing' );



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

<section class="multi-planet">
	<?php foreach ( $planets as $index => $planet ) : ?>
		<div <?php printf( 'class="planet-con planet-%s"', $planet['class'] ); ?>>
	 
			<div class="cta">
				<a href=<?= $planet['link'] ?>>
					<?= $planet['title'] ?>
				</a>
			</div>
		</div>
	<?php endforeach; ?>

	<div class="scroll-down cursor-pointer">
 	</div>

	<div class="light-planet">

	</div>
</section>