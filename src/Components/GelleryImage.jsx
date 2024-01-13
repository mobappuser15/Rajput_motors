import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import PageScrollTop from "./PageScrollTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Socalmedia from "./Socalmedia";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

const breakPointss = [
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

function GelleryImage() {
	const [zoom, setZoom] = useState(null);
	const galleryImage = [
		{
			id: 1,
			img: "images/gallery/g1.jpg",
		},
		{
			id: 2,
			img: " images/gallery/g2.jpg",
		},
		{
			id: 1000000,
			img: " images/gallery/g3.jpg",
		},
		{
			id: 1100000,
			img: " images/gallery/g4.jpg",
		},

		{
			id: 1500000,
			img: "images/gallery/g5.jpg",
		},

		{
			id: 2000000,
			img: " images/gallery/g6.jpg",
		},

		{
			id: 2500000,
			img: "images/gallery/g8.jpg",
		},

		{
			id: 3000000,
			img: "images/gallery/g9.jpg",
		},
		{
			id: 4000000,
			img: "images/gallery/g1010.jpg",
		},

		{
			id: 5000000,
			img: "images/gallery/g17.jpg",
		},

		{
			id: 50,
			img: "images/gallery/g52.jpg",
		},

		{
			id: 53,
			img: "images/gallery/g53.jpg",
		},

		{
			id: 54,
			img: "images/gallery/g54.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g55.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g56.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g57.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g58.jpg",
		},
	];
	return (
		<div>
			<Navbar />
			<Socalmedia />
			<PageScrollTop />
			<section className='b-pageHeader'>
				<div className='container'>
					<h1 className='wow ' data-wow-delay='0.5s'>
						Gallery
					</h1>
				</div>
			</section>

			<div className='b-breadCumbs s-shadow'>
				<div className='container '>
					<Link to='/' className='b-breadCumbs__page'>
						Home
					</Link>
					<span className='fa fa-angle-right'></span>
					<a className='b-breadCumbs__page m-active'>Gallery</a>
				</div>
			</div>

			<div className='carousel-wrapper cor_mn'>
				{galleryImage.map((item) => (
					<div key={item.id}>
						<a
							id='slider_img'
							class=' '
							href='#'
							data-toggle='modal'
							data-title={item.img}
							data-target='#image-gallery'>
							{/* <img
								className=' card '
								src={item.img}
								onClick={(e) => setZoom(item.img)}
								alt='Another alt text'
								style={{ aspectRatio: "4/4" }}
							/> */}
						</a>

						<div class=''>
							<div class='row'>
								<div
									class='modal fade'
									id='image-gallery'
									tabindex='-1'
									role='dialog'
									aria-labelledby='myModalLabel'
									aria-hidden='true'>
									<div class='modal-dialog modal-lg mdl_wd'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h4 class='modal-title' id='image-gallery-title'></h4>
												<button
													type='button'
													class='close'
													data-dismiss='modal'>
													<span aria-hidden='true'>×</span>
													<span class='sr-only'>Close</span>
												</button>
											</div>

											<section className='b-slider'>
												<div
													id='carouselExampleFade'
													class='carousel slide carousel-fade'
													data-bs-ride='carousel'>
													<Carousel breakPointss={breakPointss}>
														{galleryImage.map((item) => (
															<div class='carousel-item active' key={item.id}>
																<img src={item.img} alt='...' className='' />

																{/* <ThreeSixty
                                                    amount={75}
                                                    imagePath={item.uri}
                                                    fileName='output_{index}.jpeg'
                                                    spinReverse
                                                /> */}
															</div>
														))}
													</Carousel>
												</div>
											</section>

											<div class='modal-footer'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<section className='gallery_mn gallery_mn2'>
				<div className='container'>
					<div className='row'>
						<div className='gallery_pic'>
							<h4>Gallery</h4>
							<div className='gallery_wd row'>
								<div class='col-md-8 col-sm-6 col-xs-12 gr_wd2'>
									<img className='' src='images/gallery/g6.jpg' />
								</div>
								<div class='col-md-4 col-sm-6 col-xs-12 gr_wd2'>
									<img className='' src='images/gallery/g2.jpg' />
								</div>
								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g3.png' />
								</div>
								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g4.png' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g5.png' />
								</div>

								<div class='col-md-8 col-sm-6 col-xs-12 gr_wd2'>
									<img className='' src='images/gallery/g1.jpg' />
								</div>
								<div class='col-md-4 col-sm-6 col-xs-12 gr_wd2'>
									<img className='' src='images/gallery/g8.jpg' />
								</div>
								


								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g9.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g10.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g11.jpg' />
								</div>


								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g12.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g13.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g14.jpg' />
								</div>


								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g15.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g16.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g17.jpg' />
								</div>


								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g18.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g19.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g20.jpg' />
								</div>


								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g21.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g22.jpg' />
								</div>

								<div class='col-md-4 col-sm-6 col-xs-12'>
									<img className='' src='images/gallery/g23.jpg' />
								</div>


								<div class='col-md-12 col-sm-12 col-xs-12 '>
									<img className='' src='images/gallery/g24.jpg' />
								</div>

								
							


							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <div class='youtube_mn'>
<div class='container'>
<div class='row'>
<div class='youtube_tx'>
<h2>Youtube Vlogs</h2>

 

							<div class='row'>
<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?si=HNppf0eq_KF1x7ky&v=Wm6DztYfuQg&feature=youtu.be'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b1.jpg' />
</span>
<h3>
												2014 Toyota Fortuner For Sale | Used Fortuner in Delhi |
												Carz Gallery
</h3>
</div>
</a>
</div>

 

								<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?v=Er6efrw1qj0'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b2.jpg' />
</span>
<h3>
												सबसे सस्ती पर सबसे अच्छी कार ले जाओ | आंख बंद करके ले
												जाओ कार | Meri wali Carr
</h3>
</div>
</a>
</div>

 

								<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?v=PFzCHTYKKYE'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b3.jpg' />
</span>
<h3>
												3 लाख़ में कार ख़रीदें | Buy i20, Thar, Baleno, Xuv 500,
												Venue | Carz Gallery | #mSharifVlogs
</h3>
</div>
</a>
</div>

 

								<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?v=RzlXtO2GzAY'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b4.jpg' />
</span>
<h3>
												Used Cars In Only 2 Lakh | Second Hand Cars | Buy i10,
												I20, Wagnor, Amaze, SX4 | Carz Gallery
</h3>
</div>
</a>
</div>

 

								<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?v=b5o8xmrIp5U'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b5.jpg' />
</span>
<h3>
												Used BMW X1 For Sale | BMW Most Affordable Car | Carz
												Gallery
</h3>
</div>
</a>
</div>

 

								<div class='col-md-4 col-sm-6'>
<a
										href='https://www.youtube.com/watch?v=kUclBopsfdo'
										target='_blank'>
<div class='service-content'>
<span class='service-image'>
<img className='' src='images/about/b6.jpg' />
</span>
<h3>Thar Hi #Thar | #meriwalicarr</h3>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div> */}

			<Footer />
		</div>
	);
}

export default GelleryImage;
