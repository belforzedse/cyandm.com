<?php /* Template Name: About_us first version */
get_header();
$about = get_field('about_us_section'); ?>

<main class="about">
  
  <?php get_template_part('/templates/pages/about-section/head');
  get_template_part('/templates/pages/about-section/sections');
  get_template_part('/templates/pages/about-section/mobile-slider');
  
  get_template_part('/templates/pages/about-section/third');
  get_template_part('/templates/pages/front-page/content/team');
  get_template_part('/templates/pages/about-section/last')
    ?>


<?php get_footer(); ?>

</main>
