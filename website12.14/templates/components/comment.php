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
        '<h3 class="comments__count text-white-1">%s %s</h3>',
        $comments_query->found_comments,
        __('دیدگاه', 'cyn-dm')
    );

    ?>

<section class="comments p-8 max-w-[1000px] container ">
    <div class="p-8 bg-black-2 rounded-3xl min-w-[100%]">
        <div class="comments__count-wrapper mb-8">
            <span class="comments__text">
                <div class="text-lg">
                    <?= $comments_count ?>
                </div>

                <p class="text-gray-1">
                    <?php _e('شما هم توی این بحث شرکت کنید', 'cyn-dm') ?>
                </p>
            </span>
        </div>

        <div id="commentOpener" class="comments__send border-[1px]  rounded-3xl  text-center">
            <a class="btn leading-[4]" variant="primary" size="big" >

                <i class="icon-send"></i>
                <?php _e('ارسال دیدگاه', 'cyn-dm') ?>
            </a>
        </div>
    </div>
</section>
<?php wp_reset_postdata()?>