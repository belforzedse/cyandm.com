<?php
$id = isset($args['id']) ? $args['id'] : 0;

$comments_query = new WP_Comment_Query([
    'count' => false,
    'no_found_rows' => false,
    'number' => 100, //@need Load More
    'post_id' => $id,
    'status' => '1'

]);
$comments = $comments_query->comments;
$comments_count = sprintf(
    '<h2 class="comments__count text-white-1 text-h2">%s %s</h2>',
    $comments_query->found_comments,
    __('دیدگاه', 'cyn-dm')
);

?>



<section class="comments w-full  p-8 ">
    <div class="  rounded-3xl min-w-[100%] flex items-center  justify-between">
        <div class="comments__count-wrapper ">
            <span class="comments__text">
                <div class=" ">
                    <?= $comments_count ?>
                </div>

                <p class="text-gray-1 text-body_s">
                    <?php _e('شما هم توی این بحث شرکت کنید', 'cyn-dm') ?>
                </p>
            </span>
        </div>

        <div id="blog_commentOpener" class="comments__send border-[1px]  rounded-3xl  p-[16px_34px] text-center border border-blue-2">
            <a class="btn  flex items-center gap-4" variant="primary" size="big" class="btn">

                <i class="text-h4 icon-send"></i>
                <?php _e('ارسال دیدگاه', 'cyn-dm') ?>
            </a>
        </div>
    </div>
</section>
<?php wp_reset_postdata() ?>