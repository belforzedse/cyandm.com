<?php
/* Template Name: Faq Page */

use RankMath\Frontend\Breadcrumbs;


$faq_cats = get_terms([
    'taxonomy' => 'faq-type',
    'hide_empty' => false,
]);


$faq_image = wp_get_attachment_image(get_field('faq_section_image'), 'full');
$link_all = get_post_type_archive_link('faq');



?>
<?php get_header() ?>

<div class="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
    <?php if (function_exists('rank_math_the_breadcrumbs')) {
        rank_math_the_breadcrumbs();
    }
    ?>
</div>
<div
    class="container grid grid-flow-row-dense grid-cols-8 grid-rows-8 gap-4 justify-center align-middle [&_img]:min-w-[200px]">
    <div>
        <img src="<?php echo get_stylesheet_directory_uri() . "./assets/imgs/faq.png" ?>" alt="">
        <img src="<?php echo get_stylesheet_directory_uri() . "./assets/imgs/faq.png" ?>" alt="">
    </div>
    <div class="col-span-6">
        <div class="flex justify-center items-center rounded-3xl border-b-[3px] border-gray-3 py-4 bg-black-2">
            <ul class="flex justify-center [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px]
             [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500">

                <?php foreach ($faq_cats as $cat): ?>
                    <li term-id="<?php echo $cat->term_id ?>" class="faqtab"> <?php echo $cat->name ?> </li>
                <?php endforeach; ?>

            </ul>
        </div>



        <section class="faq-con container">

            <?php
            foreach ($faq_cats as $i => $cat):

                $faq_group = get_posts([
                    'fields' => 'ids',
                    'post_type' => 'faq',
                    'posts_per_page' => -1,
                    'tax_query' => [
                        [
                            "taxonomy" => "faq-type",
                            'field' => 'slug',
                            'terms' => [$cat->slug]
                        ]
                    ],
                ]); ?>
                <div term-id="<?php echo $cat->term_id ?>" class="faqcontent <?php if ($i === 0)
                       echo 'active'; ?>">
                    <div class="faq-content">
                        <div class="faq-posts">
                            <?php
                            foreach ($faq_group as $faq) {
                                get_template_part('/templates/components/card/faq', null, ['faq_ID' => $faq]);
                            }
                            wp_reset_postdata();
                            ?>
                        </div>

                    </div>
                </div>

            <?php endforeach; ?>


        </section>
    </div>
    <div>
        <img src="<?php echo get_stylesheet_directory_uri() . "./assets/imgs/faq.png" ?>" alt="">
        <img src="<?php echo get_stylesheet_directory_uri() . "./assets/imgs/faq.png" ?>" alt="">
    </div>
</div>

<?php get_footer() ?>