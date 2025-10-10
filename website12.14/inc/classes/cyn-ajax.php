<?php

if ( ! class_exists( 'cyn_ajax' ) ) {
	class cyn_ajax {
		function __construct() {
			add_action( 'wp_footer', [ $this, 'cyn_enqueue_ajax' ] );
			add_action( 'wp_ajax_cyn_get_post_by_id', [ $this, 'cyn_get_post_by_id' ] );
			add_action( 'wp_ajax_nopriv_cyn_get_post_by_id', [ $this, 'cyn_get_post_by_id' ] );

		}

		public function cyn_enqueue_ajax() {
			echo "<script>";
			echo "
                    var cyn_ajax_script = {
                        url: '" . admin_url( 'admin-ajax.php' ) . "',
                        nonce: '" . wp_create_nonce( 'ajax-nonce' ) . "'
                    }
	            ";
			echo "</script>";
		}

		public function cyn_get_post_by_id() {
			if ( ! wp_verify_nonce( $_POST['_nonce'], 'ajax-nonce' ) )
				return wp_send_json_error( [ 'verify_nonce' => false ], 403 );

			$post_id = $_POST['data'];

			//because of get template part
			ob_start();
			get_template_part( 'templates/components/card/projects', 'on-hover', [ 'post-id' => $post_id ] );
			$content = ob_get_clean();

			wp_send_json( [ 'content' => $content ], 200 );

		}
	}
}