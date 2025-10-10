<?php /* Template Name: Team*/
get_header();
$employs_Q = new WP_Query([
    'post_type' => 'employ',
    'posts_per_page' => '15',
    'orderby' => 'menu_order',
    'order' => 'ASC',
]);

$link_all = get_post_type_archive_link('employ');

?>

<?php if ( have_posts()): ?>
    <section class="team-con container py-10">

        <div class="section-title">
            <h2 class="h1">
                کارای حرفه‌ای یه تیم حرفه‌ای می‌خواد
            </h2>
        </div>

        <div class="team-wrapper  w-full ">
            <div class="profile-wrapper gap-4">



                <?php
                while (have_posts()):
                 the_post();

                    get_template_part('/templates/components/card/employ', null, ['post_id' => get_the_ID()]);
                endwhile;

                wp_reset_postdata();
                ?>


            </div>
        </div>


    </section>

<?=  the_pagination(); ?>
<?php endif; ?>
<?php get_footer(); ?>