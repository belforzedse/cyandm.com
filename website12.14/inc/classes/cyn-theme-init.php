<?php

if ( ! class_exists( 'cyn-theme-init' ) ) {
	class cyn_theme_init {


		function __construct() {
			add_action( 'init', [ $this, 'cyn_theme_init' ] );
			add_action( 'wp_enqueue_scripts', [ $this, 'cyn_enqueue_files' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'cyn_admin_files' ] );
			add_action( 'wp_logout', [ $this, 'cyn_logout_user' ] );
			add_action( 'after_setup_theme', [ $this, 'cyn_theme_setup' ] );

			add_filter( 'wp_check_filetype_and_ext', [ $this, 'cyn_allow_svg' ], 10, 4 );
			add_filter( 'upload_mimes', [ $this, 'cyn_mime_types' ] );
			add_filter( 'big_image_size_threshold', '__return_false' );
			add_filter( 'get_the_archive_title_prefix', '__return_false' );

		}


		public function cyn_enqueue_files() {

			wp_enqueue_style( 'cyn-compiled', get_stylesheet_directory_uri() . '/assets/css/compiled.css' );
			wp_enqueue_style( 'cyn-tailwind', get_stylesheet_directory_uri() . '/assets/css/final-tailwind.css' );
			wp_enqueue_style( 'cyn-style', get_stylesheet_directory_uri() );
			wp_dequeue_style( 'wp-block-library' );

			wp_enqueue_script( 'cyn-global', get_stylesheet_directory_uri() . '/assets/js/dist/scripts.bundle.js', [ 'jquery' ], false, true );
			wp_localize_script('cyn-global', 'restDetails', [
				'url' => rest_url(),
				'nonce' => wp_create_nonce('wp_rest')
			]);
			wp_dequeue_script( 'global-styles' );
		}

		public function cyn_remove_unneccesaries() {
			// REMOVE WP EMOJI
			remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
			remove_action( 'wp_print_styles', 'print_emoji_styles' );
			remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
			remove_action( 'admin_print_styles', 'print_emoji_styles' );

			remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
			remove_action( 'wp_enqueue_scripts', 'wp_enqueue_classic_theme_styles' );
			remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );
		}

		public function cyn_admin_files() {
			wp_enqueue_style( 'cyn-admin', get_stylesheet_directory_uri() . '/css/admin.css' );
		}

		public function cyn_logout_user() {
			wp_redirect( home_url() );
			exit();
		}

		public function cyn_theme_setup() {
			add_theme_support( 'custom-logo' );
			add_theme_support( 'post-thumbnails' );
			add_theme_support( 'title-tag' );
			add_theme_support( 'automatic-feed-links' );

			register_nav_menus( [ 
				'header' => 'Header',
				'footer_col_1' => 'Footer - Column 1',
				'footer_col_2' => 'Footer - Column 2',
			] );
		}

		public function cyn_theme_init() {
			add_filter( 'use_block_editor_for_post', '__return_false' );
			add_filter( 'login_errors', function () {
				return null;
			} );
			$this->cyn_remove_unneccesaries();
		}

		public function cyn_allow_svg( $data, $file, $filename, $mimes ) {
			$filetype = wp_check_filetype( $filename, $mimes );

			return [ 
				'ext' => $filetype['ext'],
				'type' => $filetype['type'],
				'proper_filename' => $data['proper_filename']
			];

		}

		public function cyn_mime_types( $mimes ) {
			$mimes['svg'] = 'image/svg+xml';
			return $mimes;
		}


	}
}