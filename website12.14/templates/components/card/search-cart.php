<?php
$is_complete = isset($args['complete']) ? $args['complete'] : null;
$post_type = get_post_type_labels(get_post_type_object(get_post_type()))->singular_name;

?>
<a href="<?= get_permalink(); ?>">
<div class="flex justify-between items-center rounded-3xl   bg-black-2 container p-8 text">
<span class="text-cyn-1">
    <?= get_the_title(); ?>

</span>
         <span class="post-type text-gray-1">
            <?= $post_type ?>
        </span>
 
 </div></a>