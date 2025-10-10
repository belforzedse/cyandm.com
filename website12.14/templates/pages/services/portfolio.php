<?php
$projects = get_field( 'portfolios' );
$portfolio_title = get_field( 'portfolio_title' );
?>

<div class="swiper-slide projects-con ">

	<div class="container">
		<h2>
			<?= $portfolio_title ?>
		</h2>
	</div>

	<div class="swiper"
		 id="portfolioServicePage">
		<div class="swiper-wrapper">
			<?php foreach ( $projects as $key => $project_ID ) :

				get_template_part(
					'/templates/components/card/projects',
					null,
					[ 
						'additional_class' => 'swiper-slide',
						'project-id' => $project_ID,
						'links' => true,
					] );


			endforeach; ?>
		</div>
	</div>

</div>