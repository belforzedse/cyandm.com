<?php
$bg_img_desktop = get_field('bg_image_desktop');
$bg_img_mobile = get_field('bg_image_mobile');
$number1 = get_option('phone_number');

 
?>
<button class="main-button"> </button>
<?php get_header(null, ['render' => false]) ?>
<div class="single-project-button flex flex-col-reverse gap-12">
	<button class="open-button flex justify-center items-center before:animate-pulse after:animate-pulse" id="OpenButton"><i class="icon-close"></i></button>
	<div class="project-button  flex flex-col-reverse gap-4" >
		<a href="<?= get_home_url(); ?>"><i class="icon-arrowright"></i></a>
 		<a href="tel:<?= $number1 ?>"><i class="icon-call"></i></a>
 
	</div>
</div>

<main div="single-project">
	<picture>
		<source media="(min-width:768px)"
			srcset="<?= wp_get_attachment_image_url(get_field('bg_image_desktop'), 'full'); ?>">
		<source media="(max-width:768px)"
			srcset="<?= wp_get_attachment_image_url(get_field('bg_image_mobile'), 'full'); ?>">

		<img src="<?= $bg_img_desktop ?>" alt="<?= get_the_title() ?>">
	</picture>
</main>


<?php get_footer(null, ['render' => false]) ?>