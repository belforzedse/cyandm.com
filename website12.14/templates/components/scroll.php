<?php
$scroll_color = isset( $args['scroll_color'] ) ? $args['scroll_color'] : '';
?>

<span class="scroll-down cursor-pointer"
	  style="--scroll-color: <?= $scroll_color ?>">
	<!-- <p class="body-2">
		اسکرول کنید
	</p> -->
	<div>
		<i class="icon-arrow"></i>
		<i class="icon-arrow"></i>
	</div>
</span>