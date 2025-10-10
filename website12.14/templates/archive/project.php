<?php /* Template Name: projects */
$actual_link = $_SERVER['REQUEST_URI'];
$project_cats = get_terms([
    'taxonomy' => 'project_type',
    'hide_empty' => false,
]);
get_header(); ?>
<?php
$project = new WP_Query([
    'post_type' => 'project',
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
        <img src="<?= get_stylesheet_directory_uri() . '/assets/imgs/project.png' ?>" />
        <div class="flex flex-col justify-center items-center gap-4	">
            <h1 class="h1">پروژه سایان</h1>
            <p class="h5"> بزن بریم</p>
            <?php get_template_part('/templates/components/scroll') ?>
        </div>

        <div class="flex justify-between items-center rounded-3xl border-b-[3px] border-gray-3 py-4 bg-black-2 w-full px-8 max-lg:flex-col gap-2">
            <div class="  p-4 pi-md-8 search-div max-lg:w-full">
                <form action="<?= get_bloginfo('url') ?>" id="search-container">
                    <div class=" flex flex-row items-center gap-1">
                        					<i class="icon-search"></i>

                        <!-- <i class="iconsax searchtab d-lg-none fs-h6" icon-name="search-normal-2"></i> -->
                        <input type="text" name="s" class="	search " id="search" placeholder="اینجا تایپ کنید"
                            value="<?php the_search_query() ?>">
                    </div>
                </form>
            </div>
            <ul class=" cat flex justify-center [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px]
             [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500   overflow-auto max-lg:text-caption">
                <?php foreach ($project_cats as $category):


                    $term_slug = "/project_type/" . $category->slug . "/";

                    ?>
                    <li class="category_item faqtab  pi-16 pb-4 <?= $_SERVER['REQUEST_URI'] ?> <?php if ($term_slug === $_SERVER['REQUEST_URI'])
                           echo "color" ?>" term-id="<?= $category->slug ?>">
                        <a href="<?= get_category_link($category->term_id) ?>">

                            <h4>
                                <?= $category->name ?>
                            </h4>
                        </a>
                    </li>
                <?php endforeach; ?>


            </ul>
        </div>
    </section>
    <div class="w-full  ">
        <div class="projects">
            <?php
            if (have_posts()) {

                while (have_posts()):
                    the_post();

                    get_template_part('/templates/components/card/archive-project-card', null, ['post_id' => get_the_ID()]);
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