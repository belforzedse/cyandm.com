<?php
add_action('pre_get_posts', 'order_query');

function order_query($query)
{
    if (
        is_admin() ||
        !$query->is_main_query() ||
        !$query->is_archive('product') || !$query->is_archive('service')    )
        return;

    $query->set('orderby', 'menu_order');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', '12');


}