    <?php
    $employs_Q = new WP_Query([
        'post_type' => 'employ',
        'posts_per_page' => '40',
    
    ]);

    $link_all = get_post_type_archive_link('employ');

    ?>

    
    <?php if ($employs_Q->have_posts()): ?>
        
        <section class="team-con container  py-10 fade-in-down" anim-delay="0.8">
    
            <div class="section-title">
                <h2 class="h1">
                   کارای خفن یه تیم خفن هم میخواد
                </h2>
    
             
            </div>
    
    
            <div class="team-wrapper  w-full ">
                <div class="profile-wrapper gap-4">
    
    
    
                    <?php
                    while ($employs_Q->have_posts()):
                        $employs_Q->the_post();

                        get_template_part('/templates/components/card/employ', null, ['post_id' => get_the_ID()]);
                    endwhile;

                    wp_reset_postdata();
                    ?>
    
    
                </div>
            </div>
    
 
        </section>
    <?php endif; ?>
</section>