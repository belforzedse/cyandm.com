<?php

/**
 * Summary of cyn_get_url_by_page_template
 * @param string $page_template
 * @return bool|string
 */
function cyn_get_url_by_page_template($page_template)
{
	$query = new WP_Query([
		'post_type' => 'page',
		'meta_key' => '_wp_page_template',
		'meta_value' => 'templates/' . $page_template . '.php'
	]);

	$post_id = $query->posts[0]->ID;
	$url = get_permalink($post_id);

	return $url;
}
function cyn_verify_nonce($nonce)
{
	if (!wp_verify_nonce($nonce, 'wp_rest'))
		return wp_send_json_error(['verify_nonce' => false], 403);
}
function convert_date_for_human($id, $post_type = 'post')
{

	if ('comment' === $post_type) {
		return human_time_diff(get_comment_date('U', $id), current_time('U')) . ' ' . __('پیش', 'cyn-dm');
	}

	return human_time_diff(
		get_the_time('U', $id),
		current_time('U')
	)
		. ' ' . __('پیش', 'cyn-dm');
}
function cyn_get_card($name, $args = [])
{
    get_template_part('/partials/cards/' . $name, null, $args);
}

 function is_user_likes_this_post( $id, $postsUserLiked ) {

	// if ( ! in_array( $id, $postsUserLiked ) ) {
	// 	return false;
	// }

	return $postsUserLiked[ $id ];
}


//Custom pagination
function the_pagination()
{
    if (is_singular())
        return;
    global $wp_query;
    /** Stop execution if there's only 1 page */
    if ($wp_query->max_num_pages <= 1)
        return;
    $paged = get_query_var('paged') ? absint(get_query_var('paged')) : 1;
    $max = intval($wp_query->max_num_pages);
    /** Add current page to the array */
    if ($paged >= 1)
        $links[] = $paged;
    /** Add the pages around the current page to the array */
    if ($paged >= 3) {
        $links[] = $paged - 1;
        $links[] = $paged - 2;
    }
    if (($paged + 2) <= $max) {
        $links[] = $paged + 2;
        $links[] = $paged + 1;
    }

    echo '<ul class="pagination flex container my-12 gap-4 justify-center items-center" itemscope itemtype="http://schema.org/SiteNavigationElement/Pagination">' . "\n";
    /** Previous Post Link */
    if (get_previous_posts_link())
        printf(' <li class="page-item">%s</li>
    ' . "\n", get_previous_posts_link('
    <span aria-hidden="true" class="page-link ripple">&laquo;</span>
     '));
    /** Link to first page, plus ellipses if necessary */
    if (!in_array(1, $links)) {
        $class = 1 == $paged ? '  class="page-item active bg-gray-3"' : '';
        printf('<li%s class="page-item"><a href="%s" class="page-link ripple" itemprop="relatedLink/pagination">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link(1)), '1');
        if (!in_array(2, $links))
            echo '<li>…</li>';
    }
    /** Link to current page, plus 2 pages in either direction if necessary */
    sort($links);
    foreach ((array) $links as $link) {
        $class = $paged == $link ? '  class="page-item active bg-gray-3"' : '';
        printf('<li%s class="page-item"><a href="%s" class="page-link ripple" itemprop="relatedLink/pagination">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link($link)), $link);
    }
    /** Link to last page, plus ellipses if necessary */
    if (!in_array($max, $links)) {
        if (!in_array($max - 1, $links))
            echo '<li>…</li>' . "\n";
        $class = $paged == $max ? '  class="page-item active  bg-gray-3"' : '';
        printf('<li%s class="page-item"><a href="%s" class="page-link ripple" itemprop="relatedLink/pagination">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link($max)), $max);
    }
    /** Next Post Link */
    if (get_next_posts_link())
        printf('<li class="page-item ">%s</li>
    ' . "\n", get_next_posts_link('<span aria-hidden="true" class="page-link ripple">&raquo;</span>
 '));
    echo '</ul>' . "\n";
}

