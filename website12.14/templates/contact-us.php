<?php /* Template Name: Contact */
get_header();
use RankMath\Frontend\Breadcrumbs;

$front_page_ID = get_option('page_on_front');

$contant_img = get_field('contact_us_img');
$address = get_option('address_text');
$address_map = get_option('address_map');
$number1 = get_option('phone_number');
$number2 = get_option('phone_number2');
$number3 = get_option('phone_number3');
?>
<?php get_template_part('/templates/components/breadcrumb') ?>
<main class="contact container">
   <div class="contant-img">
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
    			<?= wp_get_attachment_image(get_post_thumbnail_id(), 'full') ?>

 
   </div>
   <div class="contact-info">
      <div class="info">
        <div class="row"><p class="h2">شبکه های اجتماعی</p>
         <div class="social-media">
      <?php
 				for ($i = 1; $i <5; $i++) {
					?>
					<a href="<?= get_option("social_link_$i"); ?>">
												<img class="" src="<?= get_option("social_logo_$i") ?>" />

 					</a>

				<?php } ?>
         </div>
      </div> 
      <div  class="row">
                <p class="h2">شماره تماس های ما</p>
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
  <div class="row">
          <span class=" h2">
            نشانی ما </span>

         <p class="address-text">
            <?= $address ?>
         </p>

      
  </div>

  


      </div>
   </div>
</main>

<?php get_footer(); ?>