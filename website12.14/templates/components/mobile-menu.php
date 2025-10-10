<?php
$phone_num_1 = get_field( 'phone_num_1', get_option( 'page_on_front' ) );

?>

<i id="mobileMenuToggle">
	<?php get_template_part( '/assets/temp/menu-icon' ) ?>
</i>

<div class="mobile-menu"
	 id="mobileMenu">

	<a href="<?= 'tel:' . $phone_num_1 ?>"
	   class="primary-btn">
		یه پروژه بساز
	</a>

	<div class="mobile-menu-nav">
		<?php wp_nav_menu( [ 
			'theme_location' => 'header'
		] ) ?>
	</div>
</div>