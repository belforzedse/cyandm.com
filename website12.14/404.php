<?php get_header() ?>

<main class="page-404 container">

	<div class="page-404-image">
		<img src="<?= get_stylesheet_directory_uri() . '/assets/imgs/404.svg' ?>"
			 alt="404">
	</div>

	<div class="page-404-content">
		<div>
			صفحه مورد نظر یافت نشد
		</div>

		<a href="/"
		   class="primary-btn">
			بازگشت به صفحه اصلی
		</a>
	</div>

</main>

<?php get_footer() ?>