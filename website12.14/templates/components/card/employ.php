<?php
$ID = isset($args['post_id']) ? $args['post_id'] : get_the_ID();

$name = get_the_title($ID);
$special = get_field('job_position', $ID);
$biography = get_field('biography', $ID);
$image = wp_get_attachment_image(get_post_thumbnail_id($ID), 'full');

?>
<div clas="fade-in-down" anim-delay="0.3">
	<div class="employ-card transition8 | relative w-full border-2 min-h-[420px] flex flex-col bg-black-2 rounded-3xl max-md:flex-col max-md:justify-center 
	max-md:items-center
	max-md:p-4 max-md:gap-4">


		<div
			class="front  transition8 | opacity-100 flex flex-col content-start justify-center gap-4 [&>img]:object-cover [&>img]:rounded-lg [&>img]:aspect-[9/10] [&>img]:max-lg:aspect-square">
			<?= $image ?>
			<div class="flex justify-between	">
				<div class="employ-name flex flex-col gap-4">
					<span class="text-h4">
						<?= $name ?>
					</span>
					<span class="employ-special">
						<?= $special ?>
					</span>
				</div>
				<div class="flex items-center  ">
					<button class="employ_detail">اطلاعات بیشتر</button>

				</div>

			</div>

		</div>

		<div class=" behind-card | transition8 absolute w-full ">
			<div class="flex items-start flex-col justify-start gap-8">
				<span class="behind-card_name h4">
					<?php if ($name)
						echo $name; ?>
				</span>
				<span class="employ-card__special">
					<?= $special ?>
				</span>
				<p class="employ-card__biography ">
					<?= the_content(); ?>
				 
				</p>
				<button class="back-button my-7">بازگشت </button>

			</div>


		</div>
	</div>
</div>