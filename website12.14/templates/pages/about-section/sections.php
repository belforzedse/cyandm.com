 
<?php
$about = get_field('about_us_section');?>


<?php

// $about= $about["section_1"];
// foreach ($about as $aboutus) {
     			for ($i = 1; $i < 4; $i++) {

     ?>
<section class="sections  swiper-slide  ">

    <div class="section-content ">
        <h1 class="h1"><?= get_field("about_title.$i");?></h1>
        <p><?= get_field("about_section.$i")  ?> </p>
             <?php get_template_part('/templates/components/scroll') ?>
 

    </div>
</section>
<?php } ?>