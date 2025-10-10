<section class="head swiper-slide">
    <?php $logo_svg_hard_code = true;
    $start_color = isset($args['start_color']) ? $args['start_color'] : '#15EDED';
    $end_color = isset($args['end_color']) ? $args['end_color'] : '#04B2E9';
?>
 <header class="container" style="--start-color: <?= $start_color ?> ; --end-color: <?= $end_color ?>;">

      <?php get_template_part('/templates/components/mobile-menu') ?>

      <div class="right-col">
        <a href="<?= get_home_url(); ?>">

          <div class="logo">
            <?php
            if ($logo_svg_hard_code):
              get_template_part('/templates/components/logo');
            elseif (has_custom_logo()):
              the_custom_logo();
            else: ?>
              <img src=<?= get_stylesheet_directory_uri() . '/assets/imgs/placeholder.png' ?> alt="">
            <?php endif; ?>
          </div>
        </a>
        <div class="header-menu desktop-menu">
          <?php
          wp_nav_menu([
            'theme_location' => 'header'
          ])
            ?>
        </div>
      </div>

      <div class="left-col">

        <a href="#" class="primary-btn" id="customize_button">
          یه پروژه بساز
        </a>
        <a class="search-link" href="<?= get_home_url() . "?s="; ?>"> <i class="icon-search"></i>
        </a>
        <a href="<?= 'tel:' . $phone_num_1 ?>" class="icon-btn">

          <i class="icon-call">

          </i>

        </a>

      </div>
      <div id="overlay"
        class="backdrop-blur-sm bg-[#6a777b42] fixed bottom-0 top-0 right-0 left-0 min-h-[100vh] blur-xl hidden"></div>
    </header>
 

   <div class="bubble">
        <div class=" bubble-orange">
            <span class="orange"></span>
        </div>
        <div class="  bubble-red">
            <span class="red"></span>
        </div>
        <!-- <div class="  bubble-red-2">
            <span class="red"></span>
        </div> -->
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
        <div class="bubble-grey-2">
            <span class="grey-2"></span>
        </div>
        <div class=" bubble-orange-2">
            <span class="orange-2"></span>
        </div>
        <div class=" bubble-blue-2">
            <span class="blue"></span>
        </div>
    </div>

    <div class="content">
        <h1 class="t1">میخوای با سایان بیشتر آشنا شی؟</h1>
        <p class="h3">پس کمربندتو ببند و آماده شو</p>
        <p class="body-2">بزن بریم</p>
        <?php get_template_part('/templates/components/scroll') ?>
 
    </div>
   
</section>