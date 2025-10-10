<?php

use Automattic\WooCommerce\Admin\API\Reports\Coupons\Query;

if (!class_exists('cyn_api')) {
    class cyn_api
    {
        function __construct()
        {
            // add_action('rest_api_init', [$this, 'make_project_form']);
            add_action('rest_api_init', function () {
                register_rest_route(
                    'cynApi/v1',
                    '/projectForm',
                    [
                        'methods' => 'POST',
                        'callback' => [$this, 'cyn_handle_make_form'],
                        'permission_callback' => '__return_true'

                    ]
                );
            });
            add_action('rest_api_init', function () {
                register_rest_route(
                    'cynApi/v1',
                    '/comments',
                    [
                        'methods' => 'POST',
                        'callback' => [$this, 'handle_post_comments'],
                        'permission_callback' => '__return_true'

                    ]
                );
            });

            add_action('rest_api_init', function () {
                register_rest_route(
                    'cynApi/v1',
                    '/like',
                    [
                        'methods' => 'POST',
                        'callback' => [$this, 'handle_like'],
                        'permission_callback' => '__return_true'

                    ]
                );
            });
        }



        public function handle_like(WP_REST_Request $req)
        {

            $comment_Id = $req->get_param('comment-id');
            $user_id = $req->get_param('user-id');
            $users_who_liked = get_comment_meta($comment_Id, 'users_who_liked', true);

            if (!$users_who_liked) {
                $users_who_liked = [];
            }

            if (in_array($user_id, $users_who_liked)) {
                array_splice($users_who_liked, array_search($user_id, $users_who_liked), 1);
                update_comment_meta($comment_Id, 'users_who_liked', $users_who_liked);

                return new WP_REST_Response(['status' => true, 'userLiked' => false,  'message' => 'disliked'], 200);
            } else {
                array_push($users_who_liked, $user_id);
                update_comment_meta($comment_Id, 'users_who_liked', $users_who_liked);

                return new WP_REST_Response(['status' => true, 'userLiked' => true,  'message' => 'liked',], 200);
            }
        }

        public function handle_post_comments(WP_REST_Request $req)
        {
            $author = $req->get_param('author-name');
            $content = $req->get_param('content');
            $parent_Id = $req->get_param('parent-id');
            $post_Id = $req->get_param('post-id');



            $comment_id = wp_insert_comment([
                'comment_author' => $author,
                'comment_content' => $content,
                'comment_post_ID' => $post_Id,
                'comment_parent' => $parent_Id ?? 0,
            ]);

            if (false === $comment_id) {
                return new WP_REST_Response(['status' => false, 'message' => 'something went wrong!'], 500);
            } else {
                return new WP_REST_Response(['status' => true, 'message' => 'comment created', 'comment-id' => $comment_id], 200);
            }
        }





        // public function make_project_form()
        // {
        //     register_rest_route('cynApi/v1', '/projectForm', [
        //         'methods' => 'POST',
        //         'callback' => [$this, 'cyn_handle_make_form']
        //     ]);
        // }

        public function cyn_handle_make_form()
        {
        
   


            $insert_post = wp_insert_post([
                'post_type' => 'make_project_form',
                 'post_title' => sanitize_text_field($_POST['name']),
                'post_content' => sanitize_textarea_field($_POST['describe']),
              'meta_input' => [
                    'project_name' => sanitize_text_field($_POST['project_name']),
                    'tel' => sanitize_text_field($_POST['tel']),
                    'budget' => sanitize_text_field($_POST['budget']),

                ]
            ]);

            if (is_wp_error($insert_post))
                return wp_send_json_error(['insert_row' => false], 500);



            wp_send_json_success(['post_id' => $insert_post], 200);
        }



    }
}
