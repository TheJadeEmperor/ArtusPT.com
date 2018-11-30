<?php

$templateDir = get_bloginfo('template_directory').'/'; 


//Home page
$home_intro = get_field("home_intro");

$home_slide_image_1 = get_field("home_slide_image_1");
$home_slide_image_2 = get_field("home_slide_image_2");
$home_slide_image_3 = get_field("home_slide_image_3");
$home_slide_image_4 = get_field("home_slide_image_4");

$home_slide_image_1_url = $home_slide_image_1['url'];
$home_slide_image_1_alt = $home_slide_image_1['alt'];

$home_slide_image_2_url = $home_slide_image_2['url'];
$home_slide_image_2_alt = $home_slide_image_2['alt'];

$home_slide_image_3_url = $home_slide_image_3['url'];
$home_slide_image_3_alt = $home_slide_image_3['alt'];

$home_slide_image_4_url = $home_slide_image_4['url'];
$home_slide_image_4_alt = $home_slide_image_4['alt'];



//About Us
$about_treatment = get_field("about_treatment");
$about_treatment_image = get_field("about_treatment_image");

$about_treatment_image_url = $about_treatment_image['url'];
$about_treatment_image_alt = $about_treatment_image['alt'];

$about_therapist_profile_1 = get_field("about_therapist_profile_1");
$about_therapist_profile_2 = get_field("about_therapist_profile_2");


$about_therapist_profile_1_url = $about_therapist_profile_1['url'];
$about_therapist_profile_1_alt = $about_therapist_profile_1['alt'];

$about_therapist_profile_2_url = $about_therapist_profile_2['url'];
$about_therapist_profile_2_alt = $about_therapist_profile_2['alt'];


$about_therapist_text_1 = get_field("about_therapist_text_1");
$about_therapist_text_2 = get_field("about_therapist_text_2");


$about_space = get_field("about_space");

$about_space_image_1 = get_field("about_space_image_1");
$about_space_image_2 = get_field("about_space_image_2");
$about_space_image_3 = get_field("about_space_image_3");
$about_space_image_4 = get_field("about_space_image_4");

$about_space_image_1_url = $about_space_image_1['url'];
$about_space_image_1_alt = $about_space_image_1['alt'];

$about_space_image_2_url = $about_space_image_2['url'];
$about_space_image_2_alt = $about_space_image_2['alt'];

$about_space_image_3_url = $about_space_image_3['url'];
$about_space_image_3_alt = $about_space_image_3['alt'];

$about_space_image_4_url = $about_space_image_4['url'];
$about_space_image_4_alt = $about_space_image_4['alt'];


//Conditions Treated 
$conditions_treated_intro = get_field("conditions_treated_intro");

$condition_back = get_field("condition_back"); 

$condition_neck = get_field("condition_neck");

$condition_shoulder = get_field("condition_shoulder");

$condition_elbow = get_field("condition_elbow");

$condition_hip = get_field("condition_hip");

$condition_knee = get_field("condition_knee");

$condition_foot = get_field("condition_foot");


$condition_back_url = $condition_back['url'];
$condition_back_alt = $condition_back['alt'];

$condition_neck_url = $condition_neck['url'];
$condition_neck_alt = $condition_neck['alt'];

$condition_shoulder_url = $condition_shoulder['url'];
$condition_shoulder_alt = $condition_shoulder['alt'];

$condition_elbow_url = $condition_elbow['url'];
$condition_elbow_alt = $condition_elbow['alt'];

$condition_hip_url = $condition_hip['url'];
$condition_hip_alt = $condition_hip['alt'];

$condition_knee_url = $condition_knee['url'];
$condition_knee_alt = $condition_knee['alt'];

$condition_foot_url = $condition_foot['url'];
$condition_foot_alt = $condition_foot['alt'];


//Hand therapy
$hand_therapy_intro = get_field("hand_therapy_intro");

$hand_therapy_text_left = get_field("hand_therapy_text_left");

$hand_therapy_text_right = get_field("hand_therapy_text_right");

$hand_therapy_cert_logo = get_field("hand_therapy_cert_logo");

$hand_therapy_main_image = get_field("hand_therapy_main_image");

$hand_therapy_society_logo = get_field("hand_therapy_society_logo");


$hand_therapy_cert_logo_url = $hand_therapy_cert_logo['url'];
$hand_therapy_cert_logo_alt = $hand_therapy_cert_logo['alt'];

$hand_therapy_main_image_url = $hand_therapy_main_image['url'];
$hand_therapy_main_image_alt = $hand_therapy_main_image['alt'];

$hand_therapy_society_logo_url = $hand_therapy_society_logo['url'];
$hand_therapy_society_logo_alt = $hand_therapy_society_logo['alt'];


//Insurance page
$insurance_text_left = get_field("insurance_text_left");

$insurance_text_right = get_field("insurance_text_right");


//First Visit
$first_visit_text = get_field("first_visit_text");

$first_visit_title = get_field("first_visit_title");

$location_text = get_field("location_text");

$first_visit_image = get_field("first_visit_image");

$first_visit_image_url = $first_visit_image['url'];
$first_visit_image_alt = $first_visit_image['alt'];


//header & footer fields
$footer_address = get_field("footer_address");

$footer_social_media = get_field("footer_social_media");

$footer_contact_us = get_field("footer_contact_us");

$header_hours = get_field("header_hours");

$header_phone = get_field("header_phone");

$header_email = get_field("header_email");


?>
<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8>
	<title>ARTUS</title>
	<meta name=description content="">
	<meta name=viewport content="width=device-width,initial-scale=1">
	<meta name=format-detection content="telephone=no">
	<link rel="shortcut icon" href="<?php echo $templateDir ?>images/favicon.4f5fd530.ico" />
	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel=stylesheet href="<?php echo $templateDir ?>styles/main.6de058db.css">
</head>
<body>
	<!--[if lt IE 10]>
	<p class="browsehappy">You are using an 
		<strong>outdated</strong> browser. Please 
		<a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
	</p>
	<![endif]-->
	<!-- begin conten area -->
	<div class="info-top inline-block center text-center">
		<div class="col-md-6 col-md-offset-3 hidden-sm hidden-xs plain-link">
			<div class="col-xs-4">
				<?php echo $header_hours ?>
			</div>
			<div class=col-xs-4>
				<?php echo $header_phone ?>	
			</div>
			<div class=col-xs-4>
				<?php echo $header_email ?>
			</div>
		</div>
		<div class="span-12 visible-sm visible-xs plain-link">
			<div class=col-xs-4>
				<?php echo $header_hours ?>
			</div>
			<div class=col-xs-4>
				<?php echo $header_phone ?>	
			</div>
			<div class=col-xs-4>
				<?php echo $header_email ?>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="top-logo">
				<div class="text-center">
					<img class="img-responsive img-center" id="logo" src="<?php echo $templateDir ?>images/logo4.8b15c980.png">
				</div>
			</div>
		</div>
	</div>
	<div class=main>
		<nav class="navbar navbar-default">
			<div class=container-fluid>
				<div class=navbar-header>
					<button type=button class=navbar-toggle data-toggle=collapse data-target=#myNavbar>
						<span class=icon-bar></span>
						<span class=icon-bar></span>
						<span class=icon-bar></span>
					</button>
					<!-- <a class="navbar-brand" href="#">WebSiteName</a> -->
				</div>
				<div class="collapse navbar-collapse" id=myNavbar>
					<ul class="nav navbar-nav">
						<li class=active>
							<a class=nav-links href=# id=home>Home</a>
						</li>
						<li>
							<a href=# class=nav-links id=about>About Us</a>
						</li>
						<li>
							<a href=# class=nav-links id=conditions>Conditions Treated</a>
						</li>
						<li>
							<a href=# class=nav-links id=hands>Hand Therapy</a>
						</li>
						<li>
							<a href=# class=nav-links id=insurance>Insurance</a>
						</li>
						<li>
							<a href=# class=nav-links id=first>First Visit</a>
						</li>
						<li>
							<a href=# class=nav-links id=contact>Location</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class=slider>
			<div id=slider1_container style="position: relative; top: -0px; left: 0px; width: 600px; height: 240px">
				<div u=slides style="cursor: move; position: absolute; overflow: hidden; left: 0px; top: 0px; width: 600px; height: 240px">
					<div>
						<img class=img-responsive u=image src="<?php echo $home_slide_image_1_url ?>" alt="<?php echo $home_slide_image_1_alt ?>">
						</div>
						<div>
							<img class=img-responsive u=image src="<?php echo $home_slide_image_2_url ?>" alt="<?php echo $home_slide_image_2_alt ?>">
						</div>
						<div>
							<img class=img-responsive u=image src="<?php echo $home_slide_image_3_url ?>" alt="<?php echo $home_slide_image_3_alt ?>">						
						</div>
						<div>
							<img class=img-responsive u=image src="<?php echo $home_slide_image_4_url ?>" alt="<?php echo $home_slide_image_4_alt ?>">
						</div>
						</div>
					</div>
				</div>
				<div class=container>
					<div class=row>
						<div class="page-section hidden" id=home-page>
						<div class=headline>
						<?php echo $home_intro ?>			
						</div>
						</div>
						<div class="page-section hidden" id=about-page data-page-id=about>
						<div class="nav-bar">
							<ul class="nav nav-tabs" role=tablist>
								<li role=presentation>
									<a role=tab data-toggle=tab class=active href=#philosophy>Treatment Philosophy</a>
								</li>
								<li role=presentation>
									<a role=tab data-toggle=tab href=#therapists>Our Therapists</a>
									</li>
								<li role=presentation>
									<a role=tab data-toggle=tab href=#space>Our Space</a>
								</li>
								<li role=presentation>
									<a role=tab data-toggle=tab href=#testimonials>Testimonials</a>
								</li>
							</ul>
						</div>
						
						<div class=tab-content>
							<div class="tab-pane active jumbotron about clearfix" role=tabpanel id=philosophy>
								<div class=col-md-6>
									<?php echo $about_treatment ?>
								</div>
								<div class=col-md-6>
									<img class=img-responsive src="<?php echo $about_treatment_image_url ?>" alt="<?php echo $about_treatment_image_alt ?>">
								</div>
							</div>
							<div class="tab-pane about bios clearfix" role=tabpanel id=therapists>
								<div class="bios-wrapper col-md-6" id=bio-1>
								
	<div class="mug-container bio text-center">
		<img class="img-rounded img-responsive img-center mug" src="<?php echo $about_therapist_profile_1_url ?>" alt="<?php echo $about_therapist_profile_1_alt ?>">
	</div>
	
	<div class=bio>
		<?php echo $about_therapist_text_1 ?>
	</div>
	</div>
	<div class="bios-wrapper col-md-6" id=bio-2>
	<div class="mug-container text-center">
		<img class="img-rounded img-responsive img-center mug"  src="<?php echo $about_therapist_profile_2_url ?>" alt="<?php echo $about_therapist_profile_2_alt ?>">
	</div>  

	<div class=bio>
		<?php echo $about_therapist_text_2 ?>
	</div>
	</div>
	</div>

	<div class="about clearfix about-space tab-pane" role=tabpanel id=space>
	   <div class=col-md-5>
			<img class=img-responsive src="<?php echo $about_space_image_1_url ?>" alt="<?php echo $about_space_image_1_alt ?>">
	   </div>	
	   <div class=col-md-7>
			<?php echo $about_space ?>
	   </div>
	   <div class=row>
		  <div class=col-md-12>
			 <span class=col-xs-6>
			 <img class="img-responsive pic-two-up" src="<?php echo $about_space_image_2_url ?>" alt="<?php echo $about_space_image_2_alt ?>">
			 </span>
			 <span class=col-xs-6>
			 <img class="img-responsive pic-two-up" src="<?php echo $about_space_image_3_url ?>" alt="<?php echo $about_space_image_3_alt ?>">
			 </span>
		  </div>
	   </div>
	   <div class="col-xs-12 col-xs-offset-0">
		  <div class="top-pad-20 visible-sm visible-xs"></div>
		  <center><img class="img-responsive pic-two-up" src="<?php echo $about_space_image_4_url ?>" alt="<?php echo $about_space_image_4_alt ?>"></center>
	   </div>
	</div>
	<div class="about clearfix testimonials tab-pane" role=tabpanel id=testimonials>
	   <iframe src=http://www.yelp.com/biz/artus-physical-therapy-new-york width=100% height=800px></iframe>
	</div>
	</div>
</div>
<div class="page-section hidden" id=conditions-page>
<div class="nav-bar">
   <ul class="nav nav-tabs conditions-list list-inline" id=conditions-loader-list>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=backpain-pic id=load_back>Back</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=neckpain-pic id=load_neck>Neck/Head</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=sholderpain-pic id=load_shoulder>Shoulder</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=elbow-pic id=load_elbow>Elbow/Wrist/Hand</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=hippain-pic id=load_hip>Hip</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=kneepain-pic id=load_knee>Knee</a>
      </li>
      <li>
         <a class=conditions-loader href=#loader data-hover-target=foot-pic id=load_foot>Foot</a>
      </li>
   </ul>
</div>

<div class="jumbotron conditions-head">
	<div class=pic-icons>
	<span>
		<img data-hover-target=load_back id=backpain-pic class="pic-icon img-circle" src="<?php echo $condition_back_url ?>" alt="<?php echo $condition_back_alt ?>">
	</span>
	<span>
		<img data-hover-target=load_neck id=neckpain-pic class="pic-icon img-circle" src="<?php echo $condition_neck_url ?>" alt="<?php echo $condition_neck_alt ?>">
	</span>
	<span>
		<img data-hover-target=load_shoulder id=sholderpain-pic class="pic-icon img-circle" src="<?php echo $condition_shoulder_url ?>" alt="<?php echo $condition_shoulder_url ?>">
	</span>
	<span>
		<img data-hover-target=load_elbow id=elbow-pic class="pic-icon img-circle" src="<?php echo $condition_elbow_url ?>" alt="<?php echo $condition_elbow_url ?>">
	</span>
	<span>
		<img data-hover-target=load_hip id=hippain-pic class="pic-icon img-circle" src="<?php echo $condition_hip_url ?>" alt="<?php echo $condition_hip_url ?>">
	</span>
	<span>
		<img data-hover-target=load_knee id=kneepain-pic class="pic-icon img-circle" src="<?php echo $condition_knee_url ?>" alt="<?php echo $condition_knee_url ?>">
	</span>
	<span>
		<img data-hover-target=load_foot id=foot-pic class="pic-icon img-circle" src="<?php echo $condition_foot_url ?>" alt="<?php echo $condition_foot_url ?>">
	</span>
	</div>

	<?php echo $conditions_treated_intro ?>

	</div>
<div class=row>
   <div class=conditions-content-box id=conditions-content></div>
</div>
</div>
<div class="jumbotron page-section hidden clearfix" id=contact-page>
<div class=location-page-background></div>
<div class=hidden>
   <h2>Contact Us!</h2>
   
   <div class=phone>
		<?php echo $footer_contact_us ?>
   </div>
   <div class=email>
		<?php echo $header_email ?>
   </div>
   
   <?php echo $header_hours ?>

</div>
<div class=directions>
	<?php echo $location_text ?>
	<p>&nbsp;</p>

	<div class="map col-sm-12 hidden-xs">
	   <iframe width=600 height=450 frameborder=0 style=border:0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXk4uItYwokRX3KFbt2IyOs&key=AIzaSyAz_8nt4oXqvCMz2XYwvHze46re8yC9MRs" allowfullscreen></iframe>
	</div>
	<div class="map visible-xs">
	   <iframe width=320 height=300 frameborder=0 style=border:0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXk4uItYwokRX3KFbt2IyOs&key=AIzaSyAz_8nt4oXqvCMz2XYwvHze46re8yC9MRs" allowfullscreen></iframe>
	</div>
</div>
</div>
<div>
   <br /><br />
</div>
<div class="jumbotron page-section hidden clearfix" id=hands-page>
	<div class=hands-page-background></div>
	<div class=col-md-9>

		<?php echo $hand_therapy_intro ?>

	</div>
	<div class=col-md-3>
	   <br /><br />
	   <img class="img-responsive img-center" src="<?php echo $hand_therapy_cert_logo_url ?>" alt="<?php echo $hand_therapy_cert_logo_alt ?>">
	   <br /><br />
	</div>
	<div class=col-md-12>
	   <img class="img-responsive img-center" src="<?php echo $hand_therapy_main_image_url ?>" alt="<?php echo $hand_therapy_main_image_alt ?>">
	</div>
	<div class=col-md-6>
		<?php echo $hand_therapy_text_left ?>
		
	</div>
	<div class=col-md-6>
		<?php echo $hand_therapy_text_right ?>
		
	</div>																

	<div class=col-md-12>
		<img id=asht-logo class=img-responsive src="<?php echo $hand_therapy_society_logo_url ?>" alt="<?php echo $hand_therapy_society_logo_alt ?>">
		
	</div>
</div>

<div class="jumbotron page-section clearfix hidden insurance-div" id=insurance-page>
	<div class=col-md-6>
   
		<?php echo $insurance_text_left ?>
   
	</div>
	<div class=col-md-6>

		<?php echo $insurance_text_right ?>

	</div>
</div>

<div class="jumbotron page-section hidden clearfix" id=first-page>
   <div class=first-page-background></div>
   <div class=col-xs-12>
		<?php echo $first_visit_title ?>
   </div>
   <div class=col-md-7>
		<?php echo $first_visit_text ?>
   </div>
   <div class=col-md-5>  
      <img class=img-responsive src="<?php echo $first_visit_image_url ?>" alt="<?php echo $first_visit_image_alt ?>">
   </div>
</div>

</div>
</div>
<footer class=scut-sticky-footer>
   <div class="footer-body xs-padding-0">
      <div class=footer-children>
         <div class=container>
            <div class=row>
               <div class="col-md-3 col-sm-6">
                  <?php echo $footer_address ?>								
               </div>
            </div>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 col-xs-offset-0">
               <div class="visible-xs top-pad-20"></div>

               <?php echo $footer_social_media ?>

               <div class=footer-icon-container>
                  <a href=https://facebook.com/artuspt alt=Facebook target=blank>
                  <span class=footer-icons>
                  <i class="fa fa-facebook"></i>
                  </span>
                  </a>
               </div>
               <div class=footer-icon-container>
                  <a href=https://instagram.com/artuspt alt=Instagram target=blank>
                  <span class=footer-icons>
                  <i class="fa fa-instagram"></i>
                  </span>
                  </a>
               </div>
               <div class=footer-icon-container>
                  <a href=https://www.linkedin.com/in/artus-physical-therapy-52786b90 alt=linked-in target=blank>
                  <span class=footer-icons>
                  <i class="fa fa-linkedin"></i>
                  </span>
                  </a>
               </div>
               <div class=flow-bottom visibility=hidden>
                  <p visibility=hidden> &nbsp; </p>
               </div>
            </div>
            <div class="plain-link fix-responsive-footer">
               <p class=visible-xs>
                  <br>
               </p>
			   <?php echo $footer_contact_us ?>
               
            </div>
         </div>
      </div>
   </div>
</footer>
</div>
																		
<!-- end content area -->
<script src="<?php echo $templateDir ?>scripts/vendor.d5368804.js"></script>
<script src="<?php echo $templateDir ?>scripts/plugins.164733a1.js"></script>
<script src="<?php echo $templateDir ?>scripts/main.d6d986b4.js"></script>

<!-- Google Analytics -->
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
   
   ga('create', 'UA-69749517-1', 'auto');
   ga('send', 'pageview');
</script>
</body>