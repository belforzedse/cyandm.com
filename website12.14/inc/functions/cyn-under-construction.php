<?php


function cyn_under_construction() {
	$is_under_constructed = get_option( 'cyn_under_construction' );
	$is_admin = current_user_can( 'edit_user' );
	$is_on_under_construction_page = $_SERVER['REQUEST_URI'] === '/under-construction/';

	if ( $is_under_constructed === '' )
		return;

	if ( $is_admin )
		return;

	if ( $is_on_under_construction_page )
		return;

	wp_redirect( site_url( '/under-construction/' ) );
}
