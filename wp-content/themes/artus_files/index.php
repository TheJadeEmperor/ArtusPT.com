<?php

$templateDir = get_bloginfo('template_directory').'/'; 


//Home page
$home_intro = get_field("home_intro");

$home_slide_image_1 = get_field("home_slide_image_1");
$home_slide_image_2 = get_field("home_slide_image_2");
$home_slide_image_3 = get_field("home_slide_image_3");
$home_slide_image_4 = get_field("home_slide_image_4");

//About Us
$about_treatment = get_field("about_treatment");

$about_therapists = get_field("about_therapists");

$about_space = get_field("about_space");



//Conditions Treated 
$conditions_treated_intro = get_field("conditions_treated_intro");

$condition_back = get_field("condition_back"); 

$condition_neck = get_field("condition_back");

$condition_shoulder = get_field("condition_shoulder");

$condition_elbow = get_field("condition_elbow");

$condition_hip = get_field("condition_hip");

$condition_knee = get_field("condition_knee");

$condition_foot = get_field("condition_foot");


//Hand therapy
$hand_therapy_intro = get_field("hand_therapy_intro");

$hand_therapy_cert_logo = get_field("hand_therapy_cert_logo");

$hand_therapy_main_image = get_field("hand_therapy_main_image");

$hand_therapy_text_left = get_field("hand_therapy_text_left");

$hand_therapy_text_right = get_field("hand_therapy_text_right");

$hand_therapy_society_logo = get_field("hand_therapy_society_logo");


//Insurance page
$insurance_text_left = get_field("insurance_text_left");

$insurance_text_right = get_field("insurance_text_right");


//First Visit
$first_visit_text = get_field("first_visit_text");

$first_visit_image = get_field("first_visit_image");

$location_text = get_field("location_text");


//header & footer fields

$footer_address = get_field("location_text");

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
			<div class=col-xs-4>
				<i class="glyphicon glyphicon-calendar"></i>Hrs: M-F 7am-8pm
			</div>
			<div class=col-xs-4>
				<a href="tel:646.559.2656">
					<i class="glyphicon glyphicon-earphone"></i> 646-559-2656
				</a>
			</div>
			<div class=col-xs-4>
				<a href="mailto:info@artuspt.com">
					<i class="glyphicon glyphicon-envelope"></i> Email
				</a>
			</div>
		</div>
		<div class="span-12 visible-sm visible-xs plain-link">
			<div class=col-xs-4>
				<i class="glyphicon glyphicon-calendar"></i>Hrs: 7am-8pm
			</div>
			<div class=col-xs-4>
				<a href="tel:646.559.2656">
					<i class="glyphicon glyphicon-earphone"></i> 646-559-2656
				</a>
			</div>
			<div class=col-xs-4>
				<a href="mailto:info@artuspt.com">
					<i class="glyphicon glyphicon-envelope"></i> Email
				</a>
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
						<img class=img-responsive u=image src="<?php echo $templateDir ?>images/s2.82b7b041.jpg">
						</div>
						<div>
							<img class=img-responsive u=image src="<?php echo $templateDir ?>images/s1.800a7eaa.jpg">
							</div>
							<div>
							<img class=img-responsive u=image src="<?php echo $templateDir ?>images/s3.62145b27.jpg">
						</div>
						<div>
						<img class=img-responsive u=image src="<?php echo $templateDir ?>images/s4.e908d39a.jpg">
							</div>
						</div>
					</div>
				</div>
				<div class=container>
					<div class=row>
						<div class="page-section hidden" id=home-page>
							<div class=headline> Artus Physical Therapy specializes in orthopedic rehabilitation. We treat a wide variety of musculoskeletal conditions. Whether you are suffering with low back pain from sitting at a desk all day or need to get back to basketball after an ACL repair, we can help. We have a combined 25 years of experience and a state of the art facility to get you back into the best physical condition of your life. We spend the necessary time with each patient to identify the cause of the problem and cure it. </div>
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
											<p>Artus Physical Therapy does not use a simple protocol approach to our patient's rehabilitation.  Our goal is to look deeper at the underlying causes of the problem, so the condition can be properly treated and resolved without recurrence.  This approach looks at the whole body and requires more time and clinical skill. We provide 45 minutes of one-on-one treatment and never leave our patients unsupervised to do rote gym exercises.</p>
										</div>
										<div class=col-md-6>
											<img class=img-responsive src=<?php echo $templateDir ?>images/chick.e7c57116.jpg alt="space">
											</div>
										</div>
										<div class="tab-pane about bios clearfix" role=tabpanel id=therapists>
											<div class="bios-wrapper col-md-6" id=bio-1>
												<div class="mug-container bio text-center">
													<img class="img-rounded img-responsive img-center mug" src="<?php echo $templateDir ?>images/chris.6619b9cd.jpg">
																																					</div>
												<div class=bio>
													<strong>Chris Rosen, DPT</strong> received his masters and doctorate in physical therapy from Columbia University in 2004. He has extensive training in hands on manual therapy as well as orthotic fabrication. Dr. Rosen is an addicted golfer. He has trained and competed in jiu-jitsu and kickboxing and enjoys snowboarding and mountain biking. 
												</div>
											</div>
											<div class="bios-wrapper col-md-6" id=bio-2>
												<div class="mug-container text-center">
																																						<img class="img-rounded img-responsive img-center mug" src="<?php echo $templateDir ?>images/charles.bb41bd1b.jpg">
																																					</div>
												<div class=bio>
																																						<strong>Charles Polit, DPT, CHT</strong> graduated with his doctorate in physical therapy from Columbia University in 2004.  He has more than ten years experience in orthopedic physical therapy, holding the management position of clinical director for most of that time.  Dr. Polit received his certification in hand therapy six years ago and specializes in hand and upper extremity disorders.  He is an avid runner, swimmer, and neophyte golfer. 
																																						</div>
																								</div>
																							</div>
																							<div class="about clearfix about-space tab-pane" role=tabpanel id=space>
																								<div class=col-md-5>
																									<img class=img-responsive src=<?php echo $templateDir ?>images/space1.1f1c89e3.jpg alt="space">
																									</div>
																									<div class=col-md-7>
																										<p> We are located in the 
																											<strong>
																												<a href="http://www.elysiumfitness.net/" target=_blank>Elysium Fitness Club</a>
																											</strong> at 117 West 72nd Street, 2nd Floor. Elysium Fitness Club is a private trainer fitness gym providing personal training, massage and nutritional counseling. We have state of the art Cybex, Free Motion and cardiovascular machines, as well as private treatment rooms and locker rooms with showers. 
																										</p>
																										<br>
																										</div>
																										<div class=row>
																											<div class=col-md-12>
																												<span class=col-xs-6>
																													<img class="img-responsive pic-two-up" src="<?php echo $templateDir ?>images/space2.091126db.jpg">
																													</span>
																													<span class=col-xs-6>
																														<img class="img-responsive pic-two-up" src=<?php echo $templateDir ?>images/space3.084de20b.jpg>
																														</span>
																													</div>
																												</div>
																												<div class="col-xs-12 col-xs-offset-0">
																													<div class="top-pad-20 visible-sm visible-xs"></div>
																													<img class="img-responsive pic-two-up" src=<?php echo $templateDir ?>images/treadmills.7466924d.jpg alt="space">
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
																														<img data-hover-target=load_back id=backpain-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/backpain.03bebda1.jpg">
																														</span>
																														<span>
																															<img data-hover-target=load_neck id=neckpain-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/neckpain.993e0f80.jpg">
																															</span>
																															<span>
																																<img data-hover-target=load_shoulder id=sholderpain-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/shoulderpain.a0819bec.jpg">
																																</span>
																																<span>
																																	<img data-hover-target=load_elbow id=elbow-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/elbow.3454c295.jpg">
																																	</span>
																																	<span>
																																		<img data-hover-target=load_hip id=hippain-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/hippain.62c0a372.jpg">
																																		</span>
																																		<span>
																																			<img data-hover-target=load_knee id=kneepain-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/kneepain.0b0b3f54.jpg">
																																			</span>
																																			<span>
																																				<img data-hover-target=load_foot id=foot-pic class="pic-icon img-circle" src="<?php echo $templateDir ?>images/foot.0dfa52a9.jpg">
																																				</span>
																																			</div>
																																			<h3>Conditions Treated</h3>
																																			<p> Artus Physical Therapy specializes in treating a wide variety of musculoskeletal conditions, from chronic low back pain to sports-related injuries and post-operative rehabilitation. Our full body approach ensures that the source of the issue is identified and treated properly, whether you have low back pain caused by tightness in your hips or shoulder issues as a result of an upper spine issue. All too often, patients only receive treatment at the location of their pain, ignoring the underlying causes of the injury. We understand the intricate relationships in the musculoskeletal system and are experts in evaluating the whole body to determine the biomechanical source of injury. </p>
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
																																				<a href=tel:6465592656>
																																					<p>
																																						<i class="glyphicon glyphicon-earphone"></i> 646-559-2656 
																																					</p>
																																				</a>
																																			</div>
																																			<div class=email>
																																				<a href=mailto:info@artuspt.com>
																																					<p>
																																						<i class="glyphicon glyphicon-envelope"></i> Email Us 
																																					</p>
																																				</a>
																																			</div>
																																			<h3>Hours of Operation</h3>
																																			<p> Monday - Friday, 7am - 8pm </p>
																																		</div>
																																		<div class=directions>
																																			<h3>Directions</h3>
																																			<p> We're conveniently located on the Upper West Side and easily accessible by car, taxi, bus, or subway. 
																																				<div class=subways>
																																					<a href=#>
																																						<span>
																																							<a href=http://www.mta.info/schedules target=_blank>
																																								<img src="http://www.mta.info/sites/default/files/mtaimgs/1_36px.png" alt="1-train">
																																								</a>
																																							</span>
																																							<span>
																																								<a href=http://www.mta.info/schedules target=_blank>
																																									<img src=http://www.mta.info/sites/default/files/mtaimgs/2_36px.png alt="1-train">
																																									</a>
																																								</span>
																																								<span>
																																									<a href=http://www.mta.info/schedules target=_blank>
																																										<img src=http://www.mta.info/sites/default/files/mtaimgs/3_36px.png alt="1-train">
																																										</a>
																																									</span>
																																									<span>
																																										<a href=http://www.mta.info/schedules target=_blank>
																																											<img src=http://www.mta.info/sites/default/files/mtaimgs/b_36px.png alt="1-train">
																																											</a>
																																										</span>
																																										<span>
																																											<a href=http://www.mta.info/schedules target=_blank>
																																												<img src=http://www.mta.info/sites/default/files/mtaimgs/c_36px.png alt="1-train">
																																												</a>
																																											</span>
																																										</a>
																																									</div>
																																								</p>
																																								<div class="map col-sm-12 hidden-xs">
																																									<iframe width=600 height=450 frameborder=0 style=border:0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXk4uItYwokRX3KFbt2IyOs&key=AIzaSyAz_8nt4oXqvCMz2XYwvHze46re8yC9MRs" allowfullscreen></iframe>
																																								</div>
																																								<div class="map visible-xs">
																																									<iframe width=320 height=300 frameborder=0 style=border:0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXk4uItYwokRX3KFbt2IyOs&key=AIzaSyAz_8nt4oXqvCMz2XYwvHze46re8yC9MRs" allowfullscreen></iframe>
																																								</div>
																																							</div>
																																						</div>
																																						<div>
																																							<br>
																																								<br>
																																								</div>
																																								<div class="jumbotron page-section hidden clearfix" id=hands-page>
																																									<div class=hands-page-background></div>
																																									<div class=col-md-9>
																																										<h3>Hand Therapy</h3>
																																										<p> Artus Physical Therapy offers comprehensive and individualized hand therapy by a Certified Hand Therapist (CHT). </p>
																																										<p> A CHT is a Physical Therapist who specializes in the rehabilitation of the hand, wrist, elbow, and shoulder. CHT's have received rigorous training in the examination and treatment of the upper extremity. They require a minimum of 5 years of training and 4000 hours of mentorship. </p>
																																									</div>
																																									<div class=col-md-3>
																																										<br>
																																											<br>
																																												<img class="img-responsive img-center" src="<?php echo $templateDir ?>images/cht.19c5472e.png" alt="cbt">
																																													<br>
																																														<br>
																																														</div>
																																														<div class=col-md-12>
																																															<img class="img-responsive img-center" src=<?php echo $templateDir ?>images/hand-big.02a881bd.jpg alt="hands">
																																															</div>
																																															<div class=col-md-6>
																																																<h3 class="text-center list-heading">Some of the conditions a CHT treats:</h3>
																																																<ul class=ul-centered>
																																																	<li>Fractures, dislocations, and sprains </li>
																																																	<li>Tendon and nerve injuries</li>
																																																	<li>Soft tissue injuries</li>
																																																	<li>Cumulative trauma disorders </li>
																																																	<li>Rheumatoid arthritis and osteoarthritis </li>
																																																	<li>Carpal tunnel syndrome </li>
																																																	<li>Wounds and infections</li>
																																																	<li>Amputations, burns, and frostbite</li>
																																																	<li>Sports injuries </li>
																																																	<li>Dupuytren's contracture</li>
																																																	<li>Tendonitis such as tennis elbow</li>
																																																</ul>
																																															</div>
																																															<div class=col-md-6>
																																																<h3 class="text-center list-heading">Treatment techniques we offer:</h3>
																																																<ul class=ul-centered>
																																																	<li>Deep Tissue Massage</li>
																																																	<li>Range of Motion Exercises </li>
																																																	<li>Strengthening Exercises </li>
																																																	<li>Electrical stimulation</li>
																																																	<li>Ultrasound</li>
																																																	<li>Cryotherapy</li>
																																																	<li>Wound and Pin Care </li>
																																																	<li>Pain Management</li>
																																																	<li>Scar and Edema Management </li>
																																																	<li>Ergonomic Recommendations</li>
																																																	<li>Joint Protection Techniques</li>
																																																	<li>Customized Splinting</li>
																																																</ul>
																																															</div>
																																															<div class=col-md-12>
																																																<img id=asht-logo class=img-responsive src=<?php echo $templateDir ?>images/asht-logo.e15bfc32.jpg alt="asht-logo">
																																																</div>
																																															</div>
																																															<div class="jumbotron page-section clearfix hidden insurance-div" id=insurance-page>
																																																<!-- <div class="insurance-page-background"></div> -->
																																																<div class=col-md-6>
																																																	<h3>Insurance</h3>
																																																	<p>We accept most commercial and private insurance plans on an out-of-network basis.</p>
																																																	<ul class="list-unstyled custom-ul">
																																																		<li>Aetna</li>
																																																		<li>Cigna</li>
																																																		<li>United Health Care</li>
																																																		<li>Oxford</li>
																																																		<li>Empire BCBS </li>
																																																		<li>Medicare (In-Network)</li>
																																																	</ul>
																																																	<br>
																																																		<p> Unfortunately we do not accept HMO's, GHI, HIP or Medicaid. We will thoroughly verify your insurance benefits and inform you of all out-of- pocket costs prior to your first visit. For those without insurance coverage, we offer a self-pay rate of $150.00 per visit with package deals available. We accept payment via cash, check, American Express, Visa, MasterCard, debit card, Health Savings Account (HSA) or Flex Spending Account (FSA). </p>
																																																	</div>
																																																	<div class=col-md-6>
																																																		<h3>Prescriptions/Referrals</h3>
																																																		<p> A prescription/referral is not legally required in the state of New York to receive physical therapy services. However, some insurance companies may require a patient to have a referral before they will pay for physical therapy. In those instances we will notify you before your first visit so that you will not incur any unexpected charges. </p>
																																																	</div>
																																																</div>
																																																<div class="jumbotron page-section hidden clearfix" id=first-page>
																																																	<div class=first-page-background></div>
																																																	<div class=col-xs-12>
																																																		<h3>What To Expect For Your Initial Visit:</h3>
																																																	</div>
																																																	<div class=col-md-7>
																																																		<p> Please arrive 15 minutes prior to your appointment time to fill out the necessary paperwork. Remember to bring your insurance card and prescription for physical therapy (if you have one). Please be sure to wear comfortable, nonrestrictive clothing since your initial evaluation will typically involve exercises - shorts for knee injuries, sports bra for women with shoulder injuries. Sneakers or similar footwear is also suggested. </p>
																																																		<p> During your first visit, your physical therapist will evaluate your injury and discuss an appropriate plan of treatment. This will include what interventions will be used, expected outcomes, and the duration and frequency of required treatment. </p>
																																																	</div>
																																																	<div class=col-md-5>
																																																		<img class=img-responsive src=<?php echo $templateDir ?>images/intake.7bff528a.jpg alt="intake">
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
																												<?php echo $footer_address ?>																					<h4>Our Address</h4>
																																																					
																																																					<div class="address plain-link"> 117 W 72nd Street 2nd Fl. 
																																												<br> New York, NY 11023 
																																																							<br>
																																																								<div class=plain-link>
																																																									<a href=#location id=map-directions>Map & Directions</a>
																																																								</div>
																																																							</div>
																																																						</div>
																																																						<div class="col-sm-5 col-sm-offset-1 col-xs-12 col-xs-offset-0">
																																																							<div class="visible-xs top-pad-20"></div>
																																																							<h4><?php echo $footer_social_media ?></h4>
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
																																																								<h4>Contact Us</h4>
																																																								<div>
																																																									<a href=tel:646.559.2656>
																																																										<i class="glyphicon glyphicon-earphone"></i> Call Us: 646-559-2656
																																																									</a>
																																																								</div>
																																																								<div>
																																																									<i class="fa fa-fax fa-standard" id=fa-standard></i> Fax Us: 212-721-4254 
																																																								</div>
																																																								<div>
																																																									<a href=mailto:info@artuspt.com>
								<i class="glyphicon glyphicon-envelope"></i> Email Us
							</a>
																																																								</div>
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
      ga('send', 'pageview');</script>
</body>