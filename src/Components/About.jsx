import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import styled from "./Item";
import toast from "react-hot-toast";
import "./about.css";
import ReactLoading from "react-loading";
import PageScrollTop from "./PageScrollTop";
import Details from "./Details";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Socalmedia from "./Socalmedia";
import Footer from "./Footer";

function About() {
	return (
		<div className=''>
			<Navbar />
			<Socalmedia />

			<PageScrollTop />
			<>
				<div className='m-about'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className=' '>About Us</h1>
						</div>
					</section>
					<div className='b-breadCumbs s-shadow'>
						<div className='container'>
							<Link to='/' className='b-breadCumbs__page '>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<Link className='b-breadCumbs__page m-active'>About Us</Link>
						</div>
					</div>

					<div className='abot_new1'>
						<div className='container'>
							<div className='col-md-6 col-sm-6 col-xs-12 row abt3_tx'>
								<img
									id=''
									className='img-responsive center-block  '
									alt='best'
									src='images/about/boss.jpg'></img>

								<p className='md_nam'>Mr. SURAM SINGH RAJPUT (MD)</p>
							</div>

							<div className='col-md-6 col-sm-6 col-xs-12 row abt3_tx'>
								<img
									id=''
									className='img-responsive center-block  '
									alt='best'
									src='images/about/boss2.jpg'></img>

								<p className='md_nam'> Mr. VIKRAM  &nbsp; & &nbsp;   SACHIN RAJPUT </p>
							</div>


							<div className=''>
								<div className='col-md-12 col-sm-12 col-xs-12 abt2_tx'>
									<h4>Who we are...</h4>
									<p>
									Since its inception in <b>1980</b> under the visionary leadership of <b>Mr. Suram Singh Rajput,</b> Rajput Motors has been a cornerstone of the new and used car market in Faridabad. Under the stewardship of <b>Mr. Vikram and Sachin Rajput,</b> the company has continued
									 to scale new heights, driven by an unwavering commitment to serving its esteemed customers.
									</p>

									<p><b>Rajput Motors</b> is your one-stop destination for buying and selling a wide range of multi-brand new and pre-owned cars. We provide comprehensive information on financing,
										 pricing, insurance, and vehicle valuation, empowering you to make informed decisions.</p>

										 <p><b>At Rajput Motors,</b> we prioritize transparency and honesty in every transaction. Our goal is to enrich your buying experience and foster long-lasting relationships with our valued customers. Our team of experienced and knowledgeable professionals is dedicated to understanding your specific requirements and guiding you towards the best possible options.
											 We strive to ensure that you leave our showroom with a car that perfectly suits your needs and budget.</p>

										 <p><b>Customer satisfaction</b> is at the heart of everything we do. We invest considerable time and effort in selecting cars that meet the highest standards of quality and performance. After completing a transaction, we remain committed to 
											providing ongoing support, addressing any issues that may arise promptly and effectively.</p>

										 <p><b>Rajput Motors</b> is more than just a car dealership; it's a trusted partner in your automotive journey.
											 We invite you to visit our showroom and experience the Rajput Motor difference.</p>

										


											 <div class='autocar_process_area'>
						<div class=''>
							<div class=''>
								<div class=''></div>
								<div class=''>
									<div class='process_content_inner'>
										
										<div class='witr_section_title'>
											<div class='witr_section_title_inner text-left tx_spc1'>
												
												<h1>WHY CHOOSE US</h1>
											</div>
										</div>

										<div class='em-service2 sleft all_color_service'>
											<div class='em_service_content'>
												<div class='em_single_service_text same2'>
													<div class='text_box witr_s_flex'>
														<div class='service_top_text all_icon_color'>
															<div class='em-service-icon'>
																{" "}
																<i class='flaticon flaticon-call'>
																<a href='#/carloans'><img
																		className='icn_sz'
																		src='images/logo/ic1.png'
																	/></a>
																</i>
															</div>
														</div>
														<div class='em-service-inner'>
															<div class='em-service-title'>
																<h3>
																	<a href='#/carloans'><b>Auto Loans</b></a>
																</h3>
															</div>
															<div class='em-service-desc'>
																<p>
																Are you in need of a reliable and affordable auto loan? Look no further! We will <br></br>
																help in providing auto loans to help you get behind the wheel of your dream car.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class='em-service2 sleft all_color_service'>
											<div class='em_service_content'>
												<div class='em_single_service_text same2'>
													<div class='text_box witr_s_flex'>
														<div class='service_top_text all_icon_color'>
															<div class='em-service-icon'>
																<i class='flaticon flaticon-file'>
																	{" "}
																	<a href='#/insurence'><img
																		className='icn_sz'
																		src='images/logo/ic2.png'
																	/></a>
																</i>
															</div>
														</div>
														<div class='em-service-inner'>
															<div class='em-service-title'>
																<h3>
																	<a href='#/insurence'><b>Auto Insurance</b></a>
																</h3>
															</div>
															<div class='em-service-desc'>
																<p>
																We understand the importance of protecting your valuable asset - your car. With reliable car insurance coverage, <br></br>
																you can drive with peace of mind, knowing that you are financially protected.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class='em-service2 sleft all_color_service'>
											<div class='em_service_content'>
												<div class='em_single_service_text same2'>
													<div class='text_box witr_s_flex'>
														<div class='service_top_text all_icon_color'>
															<div class='em-service-icon'>
																<i class='flaticon flaticon-team'>
																<a href='#/emical'><img
																		className='icn_sz'
																		src='images/logo/ic3.png'
																	/></a>
																</i>
															</div>
														</div>
														<div class='em-service-inner'>
															<div class='em-service-title'>
																<h3>
																	<a href='#/emical'><b>EMI Calculator</b></a>
																</h3>
															</div>
															<div class='em-service-desc'>
																<p>
																I wanted to introduce you to our latest tool that will simplify your financial <br></br>
																planning - our EMI Calculator!
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								
							</div>
						</div>
					</div>


				
									
								</div>
							</div>
						</div>
					</div>

					
				</div>


				<div class="tesmon_mn">
			
				<div class="container">
	<div class="row">
		<div class="col-sm-12">
        <h3 class="clt_tx" ><strong>WHAT OUR CLIENTS SAY</strong></h3>
        
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            
              <div class="carousel-inner">
                <div class="item active">
                  <div class="row">

				  <div class="col-md-4">

				  <div class="star_bx">
                   
				  <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
				   
                    <p class="testimonial_para">I visited the outlet it is near to my house, they have stocked amazing quality Of 
					multi brand pre-owned cars. I highly recommend them as a first choice for Rajput Motors in and around Faridabad.</p>
                    <div class="row">
                    <div class="col-sm-2">
                        <img src="" class="img-responsive" ></img>
                        </div>
                        <div class="col-sm-12 tes_nm">
                        <h4><strong>                               <a href='#'><img
																		className='usr_pc'
																		src='images/logo/user4.jpg'
																	/></a> Mr. Himanshu  
																	<img
																	className='brkt'
																	src='images/logo/brkt.png'/>
																</strong></h4>
                      
                    </div>
                    </div>
                  </div>


				  </div>

				  <div class="col-md-4">

<div class="star_bx">
 
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
 
  <p class="testimonial_para">Very good vareity of cars i have got my dream car form Rajput Motors ? 
  I really like the services which they provided and the staff and owners are to cooperative.
Thanks for the deal. </p>
  <div class="row">
  <div class="col-sm-2">
	  <img src="" class="img-responsive" ></img>
	  </div>
	  <div class="col-sm-12 tes_nm">
	  <h4><strong>                               <a href='#'><img
													  className='usr_pc'
													  src='images/logo/user5.jpg'
												  /></a> Ms. Divyanshi 
												  <img
												  className='brkt'
												  src='images/logo/brkt.png'/>
											  </strong></h4>
	
  </div>
  </div>
</div>


</div>

<div class="col-md-4">

<div class="star_bx">
 
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
 
  <p class="testimonial_para">I was looking for a car which have decent power as well Strongly Recommend
   this place for used cars ...I recently bought  
  from this place and the car condition is just like new....
  Thanks to the owners for smooth dealing!!</p>
  <div class="row">
  <div class="col-sm-2">
	  <img src="" class="img-responsive" ></img>
	  </div>
	  <div class="col-sm-12 tes_nm">
	  <h4><strong>                               <a href='#'><img
													  className='usr_pc'
													  src='images/logo/user6.jpg'
												  /></a> Mr. Ayush  
												  <img
												  className='brkt'
												  src='images/logo/brkt.png'/>
											  </strong></h4>
	
  </div>
  </div>
</div>


</div>

				 

				 

				  </div>



                </div>
               <div class="item">
			   <div class="row">

			   <div class="col-md-4">

<div class="star_bx">
 
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
 
  <p class="testimonial_para">
   I can say this is like one the best 
 if you guys are planning to buy any pre owned 
  so my suggestion is to go with Rajput motors..Amazing Team </p>
  <div class="row">
  <div class="col-sm-2">
	  <img src="" class="img-responsive" ></img>
	  </div>
	  <div class="col-sm-12 tes_nm">
	  <h4><strong>  <a href='#'><img
																		className='usr_pc'
																		src='images/logo/user1.jpg'
																	/></a> Mr.  Shivam pal	<img
																	className='brkt'
																	src='images/logo/brkt.png'/></strong></h4>
	
  </div>
  </div>
</div>


</div>

<div class="col-md-4">

<div class="star_bx">
 
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
 
  <p class="testimonial_para">Excellent experience with Rajput motors from initial booking through to delivery
  I have no hesitation in thoroughly recommending Rajput motors.</p>
  <div class="row">
  <div class="col-sm-2">
	  <img src="" class="img-responsive" ></img>
	  </div>
	  <div class="col-sm-12 tes_nm">
	  <h4><strong>                               <a href='#'><img
													  className='usr_pc'
													  src='images/logo/user2.jpg'
												  /></a> Mr. Ravi Kumar  
												  <img
												  className='brkt'
												  src='images/logo/brkt.png'/>
											  </strong></h4>
	
  </div>
  </div>
</div>


</div>

<div class="col-md-4">

<div class="star_bx">
 
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
 
  <p class="testimonial_para">Very nice and competent contact person, tries very hard to organize everything 
  to the satisfaction of the customer! Very friendly staff
   Many thanks for everything!</p>
  <div class="row">
  <div class="col-sm-2">
	  <img src="" class="img-responsive" ></img>
	  </div>
	  <div class="col-sm-12 tes_nm">
	  <h4><strong>                               <a href='#'><img
													  className='usr_pc'
													  src='images/logo/user3.jpg'
												  /></a> Mr. Naveen 
												  <img
												  className='brkt'
												  src='images/logo/brkt.png'/>
											  </strong></h4>
	
  </div>
  </div>
</div>


</div>






</div>

                </div>
              </div>
            </div>

			<br></br>
            <div class="controls testimonial_control pull-right">
                <a class="left fa fa-chevron-left btn btn-default testimonial_btn" href="#carousel-example-generic"
                  data-slide="prev"></a>

                <a class="right fa fa-chevron-right btn btn-default testimonial_btn" href="#carousel-example-generic"
                  data-slide="next"></a>
              </div>
        </div>

		
	</div>
</div>

</div>



			</>
			<Footer />
		</div>
	);
}

export default About;
