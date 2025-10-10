<?php $main_color = get_field("main_color");
$project_id = get_the_ID();
$terms = get_the_terms(get_the_ID(), 'project_type');


?>
<div class="flex items-center p-28 gap-12 project-card bg-[var(--primary-color)] max-lg:p-8  max-lg:gap-8 max-md:flex-col"
    style="--primary-color:<?= $main_color ?>">
    <div class=" w-2/4 max-md:w-full">
        <?= wp_get_attachment_image(get_field('archive_img'), 'full'); ?>

    </div>
    <div class="w-2/4 flex flex-col gap-8 max-md:w-full">
        <h1 class="text-h1"><?= get_the_title(); ?></h1>
        درباره پروژه
        <p>
            <?= get_field('short_desc'); ?>
        </p>
        <a href="<?= get_permalink(); ?>"> مشاهده پروژه</a>
        <div class="flex max-md:flex-col gap-4 ">
            <?php
            if ($terms):
                foreach ($terms as $cat): ?>
                    <a href="<?= get_term_link($cat->term_id) ?>" class=" cat-<?= $cat->slug ?> mx-1  p-4 rounded-md ">
                        <span class=" "> <?php echo $cat->name ?> </span></a>
                <?php endforeach; endif; ?>
        </div>

    </div>
</div>