<?php $about = get_field('about_us_section');
// $about= $about["section_1"];

?>
<div class="sections-mobile">
 <div class="swiper about-sections">
    <div class="swiper-wrapper">
      
        
                    <?php foreach ($about as $aboutus) {
                    ?>
                    <div class="swiper-slide">
        
        
                             <h1 class="h1"><?= $aboutus['title']; ?></h1>
                            <p><?= $aboutus['text']; ?> </p>
                            <?php get_template_part('/templates/components/scroll') ?>
        
        
                        </div>
                    <?php } ?>
     

    </div></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>



        <div class="swiper about-sections">
            <div class="swiper-wrapper">
  
                </div>
        
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>