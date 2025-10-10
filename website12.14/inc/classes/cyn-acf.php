<?php

if (!class_exists('cyn_acf')) {
	class cyn_acf
	{

		function __construct()
		{
			define('MY_ACF_PATH', get_stylesheet_directory() . '/inc/acf/');
			define('MY_ACF_URL', get_stylesheet_directory_uri() . '/inc/acf/');
			include_once (MY_ACF_PATH . 'acf.php');

			add_filter('acf/settings/url', function ($url) {
				return MY_ACF_URL;
			});
			add_filter('acf/settings/show_updates', '__return_false', 100);
			// add_filter('acf/settings/show_admin', '__return_false');

			$this->cyn_acf_actions();
		}
		public function cyn_acf_actions()
		{
			
			add_action('acf/init', [$this, 'cyn_front_page']);
			add_action('acf/init', [$this, 'cyn_footer']);
			add_action('acf/init', [$this, 'cyn_single_project']);
			add_action('acf/init', [$this, 'cyn_single_service']);
			add_action('acf/init', [$this, 'cyn_about']);
			add_action('acf/init', [$this, 'cyn_employer']);
			add_action('acf/init', [$this, 'cyn_landing_setting']);

		}
		public function cyn_front_page()
		{
			$fields = [
				cyn_acf_add_tab(' سوالات متداول '),
				cyn_acf_add_image("faq_section_image", ' تصویر سوالات متداول  ', '', ' 50'),
				cyn_acf_add_tab(' اسکریئت های هد و بادی'),
				cyn_acf_add_text("before_head", ' قبل از بسته شدن تگ هد ', '', ' 50'),
				// cyn_acf_add_tab(' پروژه های سایان'),
				// cyn_acf_add_post_object("before_head", 'انتخاب پروژه ها', 'project', ' 50' ,'1'),

				cyn_acf_add_tab('  برندها'),

			];
			$arr = [];
			for ($i = 1; $i < 12; $i++) {
				array_push(
					$arr,
										cyn_acf_add_group("logos", ' برندها', [

					cyn_acf_add_image("img_$i", ' عکس برند', '', '30'),


										])

				);
			}
			$fields = array_merge($fields, $arr);
			$location = [
				[
					
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/front-page.php',
					],
				],
			];
			cyn_register_acf_group('تنظیمات صفحه اصلی', $fields, $location);

		}
		public function cyn_footer()
		{
			$fields = [
				cyn_acf_add_tab(' عکس فوتر '),
				cyn_acf_add_image("footer_image", ' عکس تزئینی فوتر '),
				cyn_acf_add_tab(' بنر موبایل '),
				cyn_acf_add_image("mobile_hero", ' عکس بنر موبایل'),
				cyn_acf_add_text("mobile_hero_title", '  تیتر بنر موبایل  ', '', ' 50'),
				cyn_acf_add_url('mobile_hero_link', 'لینک بنر موبایل'),
				cyn_acf_add_text("mobile_hero_link_text", '  متن لینک بنر موبایل  ', '', ' 50'),

				cyn_acf_add_tab(' تیتر ستون ها '),
				cyn_acf_add_text("column_1_title", '  تیتر ستون اول  ', '', ' 50'),
				cyn_acf_add_text("column_2_title", '  تیتر ستون دوم  ', '', ' 50'),
				cyn_acf_add_text("column_3_title", '  تیتر ستون سوم  ', '', ' 50'),
				cyn_acf_add_text("column_4_title", '  تیتر ستون چهارم  ', '', ' 50'),

				cyn_acf_add_tab('شماره تماس'),
				cyn_acf_add_text("phone_num_1", ' شماره تماس اول', '', ' 50'),
				cyn_acf_add_text('phone_num_2', 'شماره تماس دوم   ', '', ' 50'),
				cyn_acf_add_text('phone_num_3', 'شماره تماس سوم   ', '', ' 50'),

				cyn_acf_add_tab(' آدرس'),
				cyn_acf_add_text("address_text", ' آدرس سایت', '', '50'),
				cyn_acf_add_text("address_map", ' آدرس گوگل مپ', '', '50'),
				cyn_acf_add_tab('  شبکه های اجتماعی'),

			];
			$arr = [];
			for ($i = 1; $i < 7; $i++) {
				array_push(
					$arr,
					cyn_acf_add_group("social_media_$i", ' اطلاعات شبکه', [
						cyn_acf_add_image("image", '  آیکن شبکه', '', '30'),
						cyn_acf_add_url("link", 'لینک شبکه', '', '30'),

					]),
				);
			}
			$fields = array_merge($fields, $arr);
			$location = [
				[
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/front-page.php',
					],
				],
			];
			cyn_register_acf_group(' تنظیمات فوتر ', $fields, $location);

		}

		function cyn_single_project()
		{
			$fields = [
				// cyn_acf_add_number('established_year', 'Established Year'),
				cyn_acf_add_text('short_desc', 'توضیحات کوتاه', 0, '', 'text-area-acf'),
				cyn_acf_add_color('main_color', 'رنگ اصلی پروژه'),
				// cyn_acf_add_text('phone', 'phone'),
				cyn_acf_add_image('bg_image_desktop', 'تصویر پس زمینه دسکتاپ'),
				cyn_acf_add_image('bg_image_mobile', 'تصویر پس زمینه موبایل'),
				cyn_acf_add_image('archive_img', 'تصویر ارشیو'),

				// cyn_acf_add_options('verified_type', 'Verified Type', ['star-supplier', 'supplier']),
				// cyn_acf_add_url('website', 'website'),
				// cyn_acf_add_color('color', 'Color'),

			];
			$location = [
				[
					[
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'project',
					],
				],
			];
			cyn_register_acf_group('تنظیمات پروژه ها', $fields, $location);

		}
		function cyn_employer()
		{
			$fields = [
 				cyn_acf_add_text('job_position', 'سمت شغلی', 0, ''),
				 

			];
			$location = [
				[
					[
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'employ',
					],
				],
			];
			cyn_register_acf_group('سمت شغلی', $fields, $location);

		}
		function cyn_single_service()
		{
			$fields = [
				cyn_acf_add_text("alias_title_home_page", ' عنوان جایگزین'),
				cyn_acf_add_image('alias_picture_home_page', ' تصویر جایگزین صفحه اصلی'),

				cyn_acf_add_options('order_home_page', 'جانمایی در صفحه اصلی', [
					'1' => 'بالا راست',
					'2' => 'بالا وسط',
					'3' => 'بالا چپ',
					'4' => 'پایین  راست',
					'5' => 'پایین  وسط',
					'6' => 'پایین  چپ'
				]),
				cyn_acf_add_color('ball_first_color_home_page', 'رنگ اول توپ'),
				cyn_acf_add_color('ball_second_color_home_page', 'رنگ دوم توپ'),
				cyn_acf_add_post_object("related_landing", 'لندینگ مرتبط', 'post', ' 50'),



			];
			$location = [
				[
					[
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'service',
					],
				],
			];
			cyn_register_acf_group('تنظیمات سرویس ها', $fields, $location);

		}
		function cyn_about()
		{
			$fields = [
				// cyn_acf_add_text("alias_title_home_page", ' عنوان جایگزین'),

				// cyn_acf_add_text("alias_title_home_page", ' عنوان جایگزین'),

				// cyn_acf_add_image('alias_picture_home_page', ' تصویر جایگزین صفحه اصلی'),

		 
				// cyn_acf_add_color('ball_first_color_home_page', 'رنگ اول توپ'),
				// cyn_acf_add_color('ball_second_color_home_page', 'رنگ دوم توپ'),
				// cyn_acf_add_post_object("related_landing", 'لندینگ مرتبط', 'post', ' 50'),



			];
			$arr = [];
			for ($i = 1; $i < 4; $i++) {
				array_push(
					$arr,
					cyn_acf_add_text("about_title.$i", "$i.عنوان بخش"),
					cyn_acf_add_text("about_section.$i", ' متن بخش'),

				);
			}
			$fields = array_merge($fields, $arr);

			$location = [
				[
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/new-about.php',
					],
				],
			];
			cyn_register_acf_group('تنظیمات درباره ما', $fields, $location);

		}
		function cyn_landing_setting()
		{
			$fields = [
				cyn_acf_add_tab(' اسلاید نمونه کارها'),

				cyn_acf_add_text('portfolio_title', ' عنوان نمونه کارها', 0, ''),
				cyn_acf_add_post_object("portfolios", 'نمونه کارهای مرتبط ', 'project', ' 100','1'),
				cyn_acf_add_tab(' اسلاید سوالات  متداول'),
				cyn_acf_add_text('faq_title', '   عنوان سوالات متداول', 0, ''),
				cyn_acf_add_post_object("faqs", ' سوالات مربوطه  ', 'faq', ' 100','1'),
				cyn_acf_add_image('faq_image', 'تصویر سوال متداول'),
				cyn_acf_add_tab(' اسلاید تماس با سایان'),
				cyn_acf_add_text('contact_title', ' عنوان  تماس با ما', 0, ''),
				cyn_acf_add_text('contact_slogan', ' شعار  تماس با ما', 0, ''),
				cyn_acf_add_url('contact_btn', ' دکمه  تماس با ما', 0, ''),
				cyn_acf_add_image('top_right', 'بالا راست'),
				cyn_acf_add_image('top_left', 'بالا چپ'),
				cyn_acf_add_image('bottom_right', 'پایین  راست'),
				cyn_acf_add_image('bottom_left', 'پایین چپ'),



			];
			$location = [
				[
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/ui-design.php',
					],
				],
				[
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/seo.php',
					],
				],
				[
					[
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'templates/marketing.php',
					],
				]
				 
				
			];
			cyn_register_acf_group('تنظیمات لندینگ', $fields, $location);

		}

	}
}