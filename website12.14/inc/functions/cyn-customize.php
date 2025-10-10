<?php
add_action( 'customize_register', 'cyn_basic_settings' );

function cyn_basic_settings( $wp_customize ) {


	$wp_customize->add_section( 'basic_settings', [ 
		'title' => 'Site settings',
		'priority' => 1
	] );

	//ADD Phone Numbers
	$wp_customize->add_setting(
		'cyn_under_construction',
		[ 
			'type' => 'option'
		]
	);

	$wp_customize->add_control( new WP_Customize_Upload_Control(
		$wp_customize,
		'cyn_under_construction',
		array(
			'label' => 'Under Construction',
			'section' => 'basic_settings',
			'type' => 'checkbox',
			'settings' => 'cyn_under_construction'
		)
	) );
}
