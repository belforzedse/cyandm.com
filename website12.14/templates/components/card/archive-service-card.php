<?php $main_color=get_field("main_color");
$project_id = get_the_ID();
$terms = get_the_terms(get_the_ID(), 'project_type');
$page_on_front = get_option('page_on_front');
$start_color = isset($args['start_color']) ? $args['start_color'] : '#15EDED';
$end_color = isset($args['end_color']) ? $args['end_color'] : '#04B2E9';
$phone_num_1 = get_field('phone_num_1', $page_on_front);

?>
<div class="flex items-center gap-12  service-card  w-full mb-12" style="--primary-color:<?= $main_color ?>">
    <div class=" w-2/4  max-lg:w-full">
        <?= wp_get_attachment_image(get_post_thumbnail_id(), 'full'); ?>

    </div>
    <div class="w-2/4 max-lg:w-full flex flex-col gap-4">
        <h1 class="text-h1"><?=  get_the_title(); ?></h1>
                        <?php echo get_the_content() ?>
        <p>
            <?= get_field('short_desc'); ?>
        </p>
        		<a href="<?= 'tel:' . $phone_num_1 ?>" class="callus flex items-center justify-center gap-4">
                  تماس با سایان
                    <i class="icon-call">
                
                    </i>
                
                </a>
       <div>
         
      </div>
   
    </div>
</div>