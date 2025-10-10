<?php /* Template Name: projects */
$actual_link = $_SERVER['REQUEST_URI'];

get_header(); ?>
<?php
$project = new WP_Query([
    'post_type' => 'service',
    // 'meta_key' => 'order_home_page',
    'posts_per_page' => 5,
    'orderby' => 'menu_order',
    'order' => 'ASC',

]);
?>
<main class="archive-project">
    <section class="flex flex-col justify-center items-center p-8">
        <div class="bubble">
            <div class=" bubble-orange">
                <span class="orange"></span>
            </div>
            <div class="  bubble-red">
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

        </div>
        <img src="<?= get_stylesheet_directory_uri() . '/assets/imgs/service.png' ?>" />
        <div class="flex flex-col justify-center items-center gap-4	">
            <h1 class="h1">خدمات سایان</h1>
            <p class="h5"> مشاهده خدمات </p>
            <?php get_template_part('/templates/components/scroll') ?>
        </div>

     
    </section>
    <div class="w-full" >  <div class="bubble-service">
            <div class="bubble-fixed" id="fixed_bubble"></div>
         </div>
        <div class="service-pages container" >
         
            <?php
            if (have_posts()) {

                while (have_posts()):
                    the_post();

                    get_template_part('/templates/components/card/archive-service-card', null, ['post_id' => get_the_ID()]);
                endwhile;

                wp_reset_postdata();

            } else {
                echo "No Product Exists";
            }
            ?>
            <?php wp_reset_postdata() ?>
        </div>
    </div>
    <div class="container">
        <?php echo term_description() ?>
    </div>
</main>
<?php get_footer(); ?>