<?
get_template_part('assets/icons/hotdesk');
 get_header(); ?>

<?php get_template_part('templates/components/sideBarComment') ?>

     <main class="max-w-[1000px] p-8 rounded-3xl container landing">
        <div class="thumbnail bg-black-2 rounded-3xl p-8 pb-16 [&_h2]:text-h2  [&_blockquote]:border-r-2 [&_blockquote]:px-4 
		[&_p]:text-white-3 [&_blockquote]:border-blue-2 
			  [&_a]:text-cyn-2 ">
                                    <h1 class="text-h1"><?= get_the_title(); ?></h1>

            <div class="mb-8 flex justify-center ">

                <!-- <article class="prose lg:prose-xl">{{ markdown }}</article> -->
                <?= the_post_thumbnail('full', ['class' => '']); ?>
            </div>
            <?= the_content(); ?>
        </div>
    </main>
    <?php get_template_part('templates/components/comment') ?>
 
<?php get_footer(); ?>