<?php
cyn_under_construction();
$page_on_front = get_option('page_on_front');
$logo_svg_hard_code = true;
$start_color = isset($args['start_color']) ? $args['start_color'] : '#15EDED';
$end_color = isset($args['end_color']) ? $args['end_color'] : '#04B2E9';
$render = isset($args['render']) ? $args['render'] : true;
$phone_num_1 = get_field('phone_num_1', $page_on_front);
?>
<!DOCTYPE html>
<html <?php language_attributes() ?> data-theme-version="1.0.11.7">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head() ?>
	<?= get_field('before_head', $page_on_front) ?>

</head>

<body <?php body_class() ?>>
	<?php wp_body_open() ?>
	<?php
	get_template_part('/assets/icons/hotdesk');

	?>
	<div class="preloader-div">
					  <div class="loader"></div> 

		</div>
	<?php if ($render === true) : ?>
		<header class="container" style="--start-color: <?= $start_color ?> ; --end-color: <?= $end_color ?>;">

			<?php get_template_part('/templates/components/mobile-menu') ?>

			<div class="right-col">
					<a href="<?= get_home_url(); ?>">
				
				<div class="logo">
					<?php
					if ($logo_svg_hard_code) :
						get_template_part('/templates/components/logo');
					elseif (has_custom_logo()) :
						the_custom_logo();
					else : ?>
						<img src=<?= get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' ?> alt="">
					<?php endif; ?>
				</div>
</a>
				<div class="header-menu desktop-menu">
					<?php
					wp_nav_menu([
						'theme_location' => 'header'
					])
					?>
				</div>
			</div>

			<div class="left-col">

				<a href="#"
					   class="primary-btn" id="customize_button">
						یه پروژه بساز
					</a>
 <a class="search-link" href="<?= get_home_url()."?s="; ?>">                    <i class="icon-search"></i>
</a>
				<a href="<?= 'tel:' . $phone_num_1 ?>" class="icon-btn">

					<i class="icon-call">

					</i>

				</a>

			</div>
		</header>
	<?php endif; ?>


  <?php get_template_part('/templates/components/card/make-project'); ?>

  