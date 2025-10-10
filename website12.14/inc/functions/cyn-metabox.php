<?php
add_action('add_meta_boxes', 'cyn_form_meta_box');

add_filter('manage_form_posts_columns', 'cyn_form_table_head');
add_action('manage_form_posts_custom_column', 'cyn_form_table_column', 10, 2);

$meta = [

    [
        'name' => 'email',
        'label' => __('email', 'cyn-dm'),
    ],


];

function cyn_form_meta_box()
{
    add_meta_box('information', __('information', 'cyn-dm'), function () {
        global $post, $meta;
        ?>
        <table>


            <?php
            foreach ($meta as $meta_item):
                if (get_post_meta($post->ID, $meta_item['name'], true)):
                    ?>
                    <tr>
                        <td colspan="6"><?= $meta_item['label'] ?></td>
                        <td colspan="6"><?= get_post_meta($post->ID, $meta_item['name'], true) ?></td>
                    </tr>

                    <?php
                endif;
            endforeach;
            ?>


        </table>
        <?php

    }, 'form', 'advanced', 'high');
}

function cyn_form_table_head($columns)
{
    $columns['email'] = __('email', 'cyn-dm');
    return $columns;
}

function cyn_form_table_column($column_name, $post_id)
{
    if ($column_name == 'email') {
        echo get_post_meta($post_id, 'email', true);
    }
}








add_action('add_meta_boxes', 'cyn_form_make_project');

// add_filter('manage_form_posts_columns', 'cyn_form_table_head');
// add_action('manage_form_posts_custom_column', 'cyn_form_table_column', 10, 2);

$meta = [

    [
        'name' => 'project_name',
        'label' => 'نام پروژه ',
    ],

    [
        'name' => 'tel',
        'label' => 'شماره تماس ',
    ],

    [
        'name' => 'budget',
        'label' => 'بودجه مورد نظر برای  پروژه ',
    ],
];

function cyn_form_make_project()
{
    add_meta_box('information', 'اطلاعات پروژه درخواستی', function () {
        global $post, $meta;
        ?>
        <table class="admin-project-information">


            <?php
            foreach ($meta as $meta_item):
                if (get_post_meta($post->ID, $meta_item['name'], true)):
                    ?>
                    <tr>
                        <td  colspan="6"><?= $meta_item['label'] ?>:</td>
                        <td colspan="6"><?= get_post_meta($post->ID, $meta_item['name'], true) ?></td>
  </tr>
                    <?php
                endif;
            endforeach;
            ?>


        </table>
        <?php

    }, 'make_project_form', 'advanced', 'high');
}

// function cyn_form_table_head($columns)
// {
//     $columns['email'] = __('email', 'cyn-dm');
//     return $columns;
// }

// function cyn_form_table_column($column_name, $post_id)
// {
//     if ($column_name == 'email') {
//         echo get_post_meta($post_id, 'email', true);
//     }
// }