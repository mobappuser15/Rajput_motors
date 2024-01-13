import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<div class='b-info'>
				<div class='container'>
					<div class='row'>

						


<div class="col-md-3 col-xs-12">
							
						
							<aside class='b-info__aside abo_clr'>
								
								<article class='b-info__aside-article'>
									<h3>About us</h3>
									<p>
									Established in 1980, under the visionary leadership of Mr. Suram Singh Rajput, Rajput Motor Pvt Ltd has been a 
									cornerstone of the new and used car market in Faridabad. Under the stewardship of Mr. Vikram and Sachin Rajput, the company
									 has continued to scale new heights, 
									Over the past 42+ years,
									 we have always prioritized total customer satisfaction as our main motive.
									</p>
								</article>
							</aside>
						

						</div>

						<div class="col-md-2 col-xs-12">

						<aside class='b-info__aside abo_clr'>
								
								<article class='b-info__aside-article footer_menu1'>
									<h3>Menu</h3>

									<ul>
										<li><Link to='/'>HOME</Link></li>
										<li><Link to='/salecar'>SELL CAR</Link></li>
										<li><Link to='/detailsdata'>BUY CAR</Link></li>
										<li><Link to='/gellery'>GALLERY</Link></li>
										<li><Link to='/about'>ABOUT US</Link></li>
										<li><Link to='/contact'>CONTACT US</Link></li>

											
									</ul>
									
								</article>
							</aside>

						</div>



						<div class="col-md-3 col-xs-12">

						
							<aside class='b-info__aside abo_clr '>
								<article class=''>
									
									<address class='b-info__contacts'>
								<p class='fot_cont '>contact us</p>
								
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol class='det_tx1'>
									Plot No-6 Wazir Market, Bypass Road, Opposite Sector-9 CNG Pump,, Faridabad, 121006
									</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol class='det_tx1'>
									Shop no-G 40,Dlf centre point,DLF sector 11,Faridabad
									</ol>
								</div>
								
								

								<div class='b-info__contacts-item'>
									<span class='fa fa-envelope'></span>
									<em>
										<ol class='det_tx1'><a href="mailto:rajputmotorpvtltd@yahoo.com"> rajputmotorpvtltd@yahoo.com</a></ol>
									</em>
<br></br>
									<span class='fa fa-envelope'></span>
									<em>
										<ol class='det_tx1'><a href="mailto:motorrajput@yahoo.com"> motorrajput@yahoo.com</a></ol>
									</em>
<br></br>
									<address class='b-info__map'>
										<Link
											style={{
												marginLeft: "-125px",
												marginTop: "-30px",

												textDecoration: "none",
											}}
											to='/contact'>
											Open Location Map
										</Link>
									</address>
								</div>
							</address>
								</article>
								
							</aside>
						

						</div>

	


<div class="col-md-4 col-xs-12">
                    <div class="nadox-iconbox style2">
                        <div class="iconbox-inner">
                            <div class="box-icon">
                                <div class="icon"><span class=" flaticon-phone fa fa-phone"></span></div>
                                <p class="text-1">OPEN HOURS</p>
                            </div>
                            <div class="content">
                                <h4 class="title">Call Us Free</h4>
                                <p class="text-2"><a href="tel: +91 9871888833"> +91 9871888833</a></p>

								<p class="text-2"><a href="tel: +91 9311510061"> +91 9311510061</a></p>

								<p class="text-2"><a href="tel: +91 9891400061"> +91 9891400061</a></p>

                                <p class="text">M O N - F R I<br></br>
                                    10:00am - 7:00pm</p>
                                <p class="text">S A T - S U N<br></br>
                                    11:00am - 8:00pm</p>
                            </div>
                        </div>
                    </div>
                  
                </div>




					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
