<?php
$id = isset($args['customer-id']) ? $args['customer-id'] : get_the_ID();
$add_class = isset($args['additional_class']) ? $args['additional_class'] : '';
$related_project_id = get_field('project', $id);
$star_count = get_field('stars', $id);
$feature_img = wp_get_attachment_image(get_post_thumbnail_id($id), [0, 480]);
$video = get_field('about_video');


?>
<section class="last  " >
    <div class="bubble">
    <div class=" bubble-orange">
        <span class="orange"></span>
    </div>
    <div class="  bubble-red">
        <span class="red"></span>
    </div>
    <div class=" bubble-red-2">
        <span class="red"></span>
    </div>
    <div class=" bubble-blue">
        <span class="blue"></span>
    </div>
    <div class=" bubble-green">
        <span class="green"></span>
    </div>
    <div class=" bubble-pink">
        <span class="pink"></span>
    </div>
    <div class=" bubble-grey">
        <span class="grey"></span>
    </div>
    <div class="bubble-grey-2">
        <span class="grey-2"></span>
    </div>
    <div class=" bubble-orange-2">
        <span class="orange-2"></span>
    </div>
       <div class=" bubble-blue-2">
        <span class="blue"></span>
    </div>
    </div>



    <div class=" about-video">
        <?php if ($video === false): ?>
            <div class="feature-img">
                <?= $feature_img !== '' ?
                    $feature_img :
                    '<img src="' . get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' . '" />';
                ?>
            </div>
        <?php else: ?>
            <div class="video">
                <video class=" plyr player" id="player" controls data-poster="<?= $video['poster'] ?>">
                    <source src="<?= $video['video'] ?>">
                </video>
            </div>


        <?php endif; ?>
    </div>
</section>