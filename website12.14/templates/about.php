<?php /* Template Name: About_us */ ?>
<?php
cyn_under_construction();
$page_on_front = get_option('page_on_front');
$logo_svg_hard_code = true;
$start_color = isset($args['start_color']) ? $args['start_color'] : '#15EDED';
$end_color = isset($args['end_color']) ? $args['end_color'] : '#04B2E9';
$render = isset($args['render']) ? $args['render'] : true;
$phone_num_1 = get_field('phone_num_1', $page_on_front);
?>
<!DOCTYPE html>
<html <?php language_attributes() ?> data-theme-version="1.0.11.7">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head() ?>
	<?= get_field('before_head', $page_on_front) ?>

</head>

<body <?php body_class() ?>>
	<?php wp_body_open() ?>
	<?php
	get_template_part('/assets/icons/hotdesk');

	?>
	 


  <?php get_template_part('/templates/components/card/make-project'); ?>

  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
 
 

<?php $about = get_field('about_us_section'); ?>

<!-- Swiper -->
<div class="swiper  about">
  <div class="swiper-wrapper">
    <?php get_template_part('/templates/pages/about-section/head'); ?>
    <?php get_template_part('/templates/pages/about-section/sections'); ?>
    <?php get_template_part('/templates/pages/about-section/third'); ?>
    <?php get_template_part('/templates/pages/front-page/content/team'); ?>
    <?php get_template_part('/templates/pages/about-section/last'); ?>



 
    <?php
    $render = isset($args['render']) ? $args['render'] : true;

    $front_page_ID = get_option('page_on_front');
    $address = get_option('address_text');
    $address_map = get_option('address_map');
    $number1 = get_option('phone_number');
    $number2 = get_option('phone_number2');
    $number3 = get_option('phone_number3');
    $footer_image = get_option('logo');


    $social_media_group = get_field('social_media_1', $front_page_ID);
    ?>

    <?php if ($render === true): ?>

      <footer class="relative my-8 swiper-slide">
        <div class="container">
          <div class="columns flex items-start  gap-24 relative max-lg:gap-8 max-md:w-full max-md:flex-col	">
            <div class="flex gap-12  justify-between [&_div]:min-w-28	max-md:w-full">
              <div class="column-1 max-md:w-2/4">
                <span class="footer-title h4">خدمات</span>

                <div class="footer-menu">
                  <?php wp_nav_menu([
                    'theme_location' => 'footer_col_1'
                  ]) ?>
                </div>
              </div>
              <div class="column-2  max-md:w-2/4">
                <span class="footer-title h4">سایان </span>

                <div class="footer-menu">
                  <?php wp_nav_menu([
                    'theme_location' => 'footer_col_2'
                  ]) ?>
                </div>
              </div>
            </div>
            <div class="column-3 flex flex-col gap-8 max-w-60">
              <span class="footer-title h4">آدرس</span>

              <p class="footer-address-text leading-[2.5]">
                <?= $address ?>
              </p>

              <div class="footer-address-map">
                <!-- <a href="<?= $addrekss_html ?>"><iframe src="<?= $address_map ?>" 
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></a> -->
                <?= $address_map ?>
              </div>
            </div>

            <div class="column-4">
              <span class="footer-title h4">شماره تماس
              </span>

              <div class="footer-phones">
                <a href="tel:<?= $number1 ?>">
                  <?= $number1 ?>
                </a>
                <a href="tel:<?= $number2 ?>">
                  <?= $number2 ?>
                </a>
                <a href="tel:<?= $number3 ?>">
                  <?= $number3 ?>
                </a>
              </div>

            </div>
          </div>
          <div class="social-media">

            <?php
            for ($i = 1; $i < 5; $i++) {
              ?>
              <a href="<?= get_option("social_link_$i"); ?>">
                <img class="" src="<?= get_option("social_logo_$i") ?>" />

              </a>

            <?php } ?>

          </div>


        </div>
        <div
          class="footer-image absolute left-0 bottom-0 z-[-2] [&>img]:object-cover [&>img]:max-w-[1000px] max-lg:relative max-lg:max-h-[300px] max-md:max-h-[200px]">
          <img class="" src="<?= $footer_image; ?>" />

        </div>
      </footer>

    <?php endif; ?>
  </div>
  <div class="swiper-pagination"></div>
</div>
<?php get_template_part('/templates/components/popup') ?>

<div class="wp-scripts">
  <?php wp_footer() ?>
</div>
   <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var about = new Swiper(".about", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween:-2,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    </script>

</body>

</html>