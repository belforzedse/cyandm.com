<?php /* Template Name: projects */

$faq_cats = get_terms([
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
<section class="flex flex-col justify-center items-center	">            
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
        <img src="<?= get_stylesheet_directory_uri() . '/assets/imgs/project' ?>"/>
    <div class="flex flex-col justify-center items-center gap-4	"> 
        <h1 class="h1">پروژه سایان</h1>
        <p class="h5"> بزن بریم</p>
                <?php get_template_part('/templates/components/scroll') ?>
    </div>
   <div class="flex justify-center items-center rounded-3xl border-b-[3px] border-gray-3 py-4 bg-black-2 ">
            <ul class="flex justify-center [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px]
             [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500">

           <?php foreach ($faq_cats as $cat): ?>
            <li term-id="<?php echo $cat->term_id ?>" class="faqtab"> <?php echo $cat->name ?> </li>
        <?php endforeach; ?>
    </ul>
</div>
</section>
    <div class="w-full  ">
                <div class="projects">
                    <?php
                    if ($project->have_posts()) {
                       
 				while ($project->have_posts()):
					$project->the_post();

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