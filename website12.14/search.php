<?php
defined('ABSPATH') || exit;
get_header(); ?>
<?php get_template_part('assets/icons/hotdesk'); 
 
$searchQuery = get_search_query();
$paged = get_query_var('paged') ? get_query_var('paged') : 1;

if (isset($_GET['section']) && $_GET['section'] == 'blog') {
    $section = "blog";
} elseif (isset($_GET['section']) && $_GET['section'] == 'project') {
    $section = "project";
} else {
    $section = "all";
}

$productQuery = new WP_Query(
    array(
        'post_type' => 'project',
        's' => $searchQuery,
        'paged' => $paged,
        'posts_per_page' => 8,
    )
);

$postQuery = new WP_Query(
    array(
        'post_type' => 'post',
        's' => $searchQuery,
        'paged' => $paged,
        'posts_per_page' => 8,
    )
);
?>


<main role="main" class="search-page">

   <div class="  search-bread    p-4 my-8">
        <p class="container text-caption  gap-2  flex"> <a href="<?= get_home_url(); ?>">صفحه اصلی </a><svg
            class="icon text-cyn-1 w-[24px]">
            <use href="#icon-Arrow-6" />
        </svg> جستجو </p>

</div>
    <div
        class="flex justify-between items-center rounded-3xl border-b-[3px] border-gray-3    bg-black-2 container p-8 max-md:flex-col max-md:gap-4 ">

        <div class="  p-4 pi-md-8 search-div max-md:w-full ">
            <form action="<?= get_bloginfo('url') ?>" id="search-container">
                <div class=" flex flex-row items-center gap-1">
                    <i class="icon-search"></i>
    
                    <!-- <i class="iconsax searchtab d-lg-none fs-h6" icon-name="search-normal-2"></i> -->
                    <input type="text" name="s" class="	  search " id="search" placeholder="اینجا تایپ کنید"
                        value="<?php the_search_query() ?>">
                </div>
            </form>
        </div>
        <div class="flex gap-8 max-md:flex-col max-md:w-full  max-md:items-center ">
            <ul class="flex justify-center max-md:w-full [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px]  [&_li]:w-2/6
                 [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500">
    
                    <li class="color" id="alltab"> همه </li>

                 <li  id="projects"> پروژه ها </li>
                <li  id="blogs"> مقالات </li>
    
            </ul>
            <div class=" flex items-center gap-4 px-4 ">
                <span id="foundPosts"><?= $wp_query->found_posts ?> نتیجه</span>
    
            </div>
        </div>
    
    
    </div>



    <section class="result" id="allResult">
 
             <?php if (have_posts()): ?>
                <div class=" grid gap-4 mb-32">
                    <?php
                    while (have_posts()):
                       the_post();
                        get_template_part('/templates/components/card/search-cart', null);
                    endwhile;
                    wp_reset_postdata();
                    ?>
                </div>

           
            <?php else: ?>
                <h4 class="container">هیچ موردی یافت نشد.</h4>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>
                            <?= the_pagination(); ?>

     </section>
    <div class="clearfix s-11"></div>
 











 
    <section class="  search-result" id="projectsResult">
        <?php if ($section != "blog"): ?>

                 <?php if ($productQuery->have_posts()): ?>
                <div class=" grid gap-4 mb-32">
                        <?php
                        while ($productQuery->have_posts()):
                            $productQuery->the_post();
                            get_template_part('/templates/components/card/search-cart', null);
                        endwhile;
                        wp_reset_postdata();
                        ?>
                    </div>
 
                <?php else: ?>
                    <h4 class="container">هیچ موردی یافت نشد.</h4>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
         </section>
        <div class="clearfix s-11"></div>
 
    <?php endif; ?>
 
        <?php if ($section != "product"): ?>



            <section class="search-result container m-be-24" id="blogsResult">


                     <?php if ($postQuery->have_posts()): ?>
                <div class=" grid gap-4 mb-32">
                            <?php
                            while ($postQuery->have_posts()):
                                $postQuery->the_post();
                                get_template_part('/templates/components/card/search-cart', null);
                            endwhile;
                            ?>
                        </div>
                        <div class="clearfix s-8"></div>

                       <?php else: ?>
                        <h4 class="container">هیچ موردی یافت نشد.</h4>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>
             </section>
            <div class="clearfix s-11"></div>
        <?php endif; ?>
</main>

<?php get_footer(); ?>