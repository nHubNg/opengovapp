import Navbar from "../components/Navbar";

import banner_pic from "../assets/Group 222.png";
import img_2 from "../assets/[GetPaidStock 3.png";
import img_3 from "../assets/british.jpg";
import img_4 from "../assets/british2.jpg";
import img_5 from "../assets/british3.webp";

import img_logo from "../assets/logo.png";
import glogo from "../assets/open-global.png";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='wrapper overflow-x-hidden'>
			<div className='header'>
				<Navbar />
				<div className='h-auto bg-primary md:elative'>
					<div className='content py-28 md:w-3/4 md:mx-48 mx-4'>
						<h1 className='text-white text-2xl md:text-5xl font-extrabold capitalize'>
							Plateau state open <br /> government partnership
						</h1>
						<p className='text-white leading-6 font-light text-sm pt-10 md:w-2/4 '>
							The official platform for plateau state branch of the open
							government partnership. <br /> With an action plan centered around
							five(5) thematic area that promote participatory, transparent,
							innovative, inclusive and accountable governance that would lead
							to a safe, secure and adequately enabled environment for the
							socio-economic development of the people of Plateau State.
						</p>
						<div className='heder-btns pt-10'>
							<Link
								to='/auth'
								class='bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one '
							>
								Login / Register
							</Link>
							<a
								href='#'
								class=' ml-8 text-secondary  text-md font-semibold underline underline-offset-8  capitalize  px-4 py-3  '
							>
								Recent Feeds
							</a>
						</div>
					</div>
				</div>

				<div className='post md:mx-48 md:absolute md:top-80 md:pt-64'>
					<div className='card grid grid-cols-1 md:grid-cols-2'>
						<div className='card shadow-2xl bg-white flex py-4 px-4 '>
							<div className='rounded-full h-8 w-auto bg-white'>
								<img
									src={glogo}
									alt=''
									className='rounded-full object-fit w-full'
									style={{maxHeight: '150px'}}
								/>
							</div>
							<div className='content px-10'>
								<h1 className='text-primary capitalize text-lg font-extrabold'>
									Open government partnership
								</h1>
								<p className='pt-2 text-sm leading-6 font-light'>
									OGP, Open Government Partnership is a global partnership made
									up of people from different works of life including;
									government, civil society, business, non-profits, and more.
								</p>
								<div className='mt-6'>
									<a
										href='https://www.opengovpartnership.org/about/who-we-are/'
										className='uppercase text-secondary text-extrabold text-xs'
									>
										read more
									</a>
								</div>
							</div>
						</div>
						<div className='card shadow-2xl bg-primary flex py-4 px-4'>
							<div className='rounded-full h-8 w-auto bg-primary'>
								<img
									src={img_logo}
									alt=''
									className='rounded-full object-fit w-full'
									style={{maxHeight: '150px'}}
								/>
							</div>
							<div className='content px-10'>
								<h1 className='text-white capitalize text-lg font-extrabold'>
									Open government partnership Plateau, Nigeria
								</h1>
								<p className='pt-2 text-white text-sm leading-2 font-light'>
									Plateau State joined OGP as part of the 2020 cohort. We are
									currently implementing six commitments from our 2021-2023
									action plan.
								</p>
								<div className='mt-6'>
									<a
										href='https://www.opengovpartnership.org/about/who-we-are/'
										className='uppercase text-secondary text-extrabold text-xs'
									>
										read more
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='citizen-engament md:mt-80 mx-10 mt-20 md:mb-32 mb-10 md:mx-48 '>
					<div className='content grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='text'>
							<h1 className=' capitalize text-4xl'>
								Government plus click&tell{" "}
							</h1>
							<h1 className='text-secondary text-4xl pt-4'>
								{" "}
								= Citizen engament{" "}
							</h1>
							<p className='pt-6 text-sm leading-6'>
								This is people’s ability to successfully engage in governance
								processes, particularly in terms of planning, implementation,
								monitoring, and evaluation of policies, programs, and projects,
								is hampered by insufficient citizen-government feedback systems
							</p>

							<div className='mt-8'>
								<a
									href='/auth/'
									class='bg-secondary2 shadow-md text-primary capitalize   text-sm font-semibold  hover:text-primary  px-4 py-3 rounded-one '
								>
									Login / Register
								</a>
							</div>
						</div>
						<div className='img bg-primary h-auto'>
							<img src={banner_pic} alt='' width='100%' height='' />
						</div>
					</div>
				</div>

				<section className='bg-secondary2'>
					<div className='current-action md:mx-48 mx-10 pt-20 pb-20'>
						<div className='heading'>
							<h1 className=' capitalize text-4xl'>
								Current <span className='text-secondary'>Action Plan</span>
							</h1>
							<p className='pt-4 text-sm leading-6'>
								Plateau joined OGP as part of the 2020 cohort. We are currently
								executing our first action plan centerd
							</p>
						</div>
						<div className='cards mt-14 grid grid-cols-1 md:grid-cols-3 gap-6'>
							<div className='card shadow-2xl bg-primary py-4 px-4  '>
								<div className='content px-5 py-8'>
									<h1 className='text-white capitalize text-lg font-extrabold'>
										Fiscal transparency
									</h1>
									<p className='pt-6 text-sm leading-6 font-light text-white'>
										To ensure open contracting in public procurement in order to
										optimise financial efficiency and minimise/prevent financial
										recklessness/leakages
									</p>
									<h4
										style={{
											color: "white",
											fontWeight: "bolder",
											textDecoration: "underline",
											marginTop: "1.5rem",
										}}
									>
										Commitment
									</h4>
									<ul class='pt-2'>
										<li
											class='p-2 text-white text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Improving Transparency in Procurement Processes.
										</li>

										<li
											class='p-2 text-white text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Improving Participatory Budgeting
										</li>
									</ul>
								</div>
							</div>

							<div className='card shadow-2xl bg-primary py-4 px-4  '>
								<div className='content px-5 py-8'>
									<h1 className='text-white capitalize text-lg font-extrabold'>
										Citizen engagement
									</h1>
									<p className='pt-6 text-sm leading-6 font-light text-white'>
										To create the space for citizens, organisations and the
										media to thrive, express themselves and participate in the
										different stages of the policy making process without fear
										or intimidation
									</p>
									<h4
										style={{
											color: "white",
											fontWeight: "bolder",
											textDecoration: "underline",
											marginTop: "1.5rem",
										}}
									>
										Commitment
									</h4>
									<ul class='pt-2'>
										<li
											class='p-2 text-white text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Establishing Citizens Dialogue Mechanisms for improved
											Accountability and Transparency
										</li>
									</ul>
								</div>
							</div>
							<div className='card shadow-2xl bg-primary py-4 px-4  '>
								<div className='content px-5 py-8'>
									<h1 className='text-white capitalize text-lg font-extrabold'>
										Extractive Transparency
									</h1>
									<p className='pt-6 text-sm leading-6 font-light text-white'>
										Increasing Transparency and Accountability in Extractive
										Sector through the establishment of the Plateau State
										Extractives Transparency Forum (PSETF)
									</p>

									<h4
										style={{
											color: "white",
											fontWeight: "bolder",
											textDecoration: "underline",
											marginTop: "1.5rem",
										}}
									>
										Commitment
									</h4>

									<ul class='pt-2'>
										<li
											class='p-2 text-white text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Increasing Transparency and Accountability in Extractive
											Sector
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='bottom-cards md:w-2/4 md:mx-auto mx-10  py-10'>
						<div className='cards  grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='card border-4 border-t-0 border-x-0 border-b-secondary shadow-2xl bg-white py-4 px-4  '>
								<div className='content px-5 py-8'>
									<h1 className='text-black capitalize text-lg font-extrabold'>
										Gender Commitments{" "}
									</h1>
									<p className='pt-6 text-sm leading-6 font-light text-black'>
										To enhance participation of women in governance and
										decision-making processes
									</p>
									<h4
										style={{
											color: "Black",
											fontWeight: "bolder",
											textDecoration: "underline",
											marginTop: "1.5rem",
										}}
									>
										Commitment
									</h4>

									<ul class='pt-2'>
										<li
											class='p-2 text-black text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Improving Gender Equality through the establishment of a
											Gender and Equal Opportunities Commission
										</li>
									</ul>
								</div>
							</div>
							<div className='card shadow-2xl bg-white py-4 px-4 border-4 border-t-0 border-x-0 border-b-secondary  '>
								<div className='content px-5 py-8'>
									<h1 className='text-black capitalize text-lg font-extrabold'>
										Peace and Security
									</h1>
									<p className='pt-6 text-sm leading-6 font-light text-black'>
										To create and maintain a peaceful environment for
										development
									</p>
									<h4
										style={{
											color: "Black",
											fontWeight: "bolder",
											textDecoration: "underline",
											marginTop: "1.5rem",
										}}
									>
										Commitment
									</h4>
									<ul class='pt-2'>
										<li
											class='p-2 text-black text-sm font-light'
											style={{ listStyleType: "disc" }}
										>
											Establishing an Independent Peace and Security Trust Fund
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='bg-primary py-10'>
					<div className='citizen-engament pt-5 md:mx-48 mx-10'>
						<div className='content grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='text'>
								<h1 className=' text-white font-extrabold capitalize text-4xl'>
									Open
								</h1>
								<h1 className='text-secondary font-extrabold text-4xl pt-4'>
									Contracting
								</h1>
								<p className='pt-6 text-sm text-white leading-6'>
									One of the achievements in plateau state open government
									reform to date, achieved following the passage of the Plateau
									State Public Procurement Law 2018
								</p>

								<div className='bg-secondary mt-4'>
									<p className='pt-6 text-sm text-white leading-6 py-6 px-6'>
										This was done to increase transparency in the procurement
										process and reduce corruption through the adoption of
										technology. Consequently, the Plateau State open contracting
										portal displays all contracts awarded in the state, the
										contract sum, the contractors handling the projects and the
										implementation status of those projects
									</p>
								</div>
							</div>
							<div className='img bg-white h-auto'>
								<img src={img_2} alt='' width='100%' height='100' />
							</div>
						</div>
					</div>
				</section>

				<section className='bg-white'>
					<div className='current-action md:mx-48 mx-10 pt-20 pb-20'>
						<div className='heading'>
							<h1 className=' capitalize text-2xl'>
								Our latest <span className='text-secondary'>Projects</span>
							</h1>
						</div>
						<div className='cards mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
							<div className='card relative shadow-2xl bg-white '>
								<div className='content'>
									<div className='card-img  bg-primary h-40'>
										<img
											src={img_3}
											alt=''
											className='object-cover h-40 w-96'
										/>
									</div>

									<div className='location absolute top-28 mt-6 shadow-lg  text-sm  bg-secondary w-20 py-2 '>
										<p className='text-white text-center'>Jos North</p>
									</div>

									<p className='pt-6 px-5 py-8 text-sm leading-6 font-light text-black'>
										Plateau state Governor Bako Lalong will flag off the
										construction of the British-American Flyover and dualisation
										to the road to Lamingo junction roundabout.
									</p>
								</div>
							</div>

							<div className='card relative shadow-2xl bg-white  '>
								<div className='content'>
									<div className='card-img bg-primary h-40'>
										<img
											src={img_4}
											alt=''
											className='object-cover h-40 w-96'
										/>
									</div>

									<div className='location absolute top-28 mt-6 shadow-lg text-sm  bg-secondary w-20 py-2 '>
										<p className='text-white text-center'>Jos North</p>
									</div>
									<p className='pt-6 px-5 py-8 text-sm leading-6 font-light text-black'>
										Former Nigerian Head of State General Yakubu Gowon has
										flagged off the construction of a new interchange at the
										British-American Junction in Jos
									</p>
								</div>
							</div>

							<div className='card relative shadow-2xl bg-white    '>
								<div className='content'>
									<div className='card-img bg-primary h-40'>
										<img
											src={img_5}
											alt=''
											className='object-cover h-40 w-96'
										/>
									</div>

									<div className='location absolute top-28 mt-6 shadow-lg  text-sm  bg-secondary w-20 py-2 '>
										<p className='text-white text-center'>Jos North</p>
									</div>
									<p className='pt-6 px-5 py-8 text-sm leading-6 font-light text-black'>
										The commencement of work by the contractor handling the
										British-American interchange flyover road project has caused
										hardship for motorists, pedestrians and residents of Jos
										metropolis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer className='footer bg-secondary2  py-20 h-auto underline-offset-4 '>
					<div className='section md:mx-48 mx-10'>
						<div className='content grid grid-cols-1 font-semi-bold md:grid-cols-4 gap-8'>
							<div className='card'>
								<h1 className='text-primary text-2xl text-center'>
									OGP Plateau
								</h1>
								<p className='pt-8 text-sm'>
									Plateau joined OGP as part of the 2020 cohort. They are
									currently implementing five commitments from their 2021-2023
									action plan.
								</p>
							</div>

							<div className='card'>
								<h1 className='text-primary text-2xl text-center'>
									Our Action Plans
								</h1>
								<div className='link pt-4'>
									<p className='pt-2 text-sm'>
										<a href=''>Fiscal Transparency</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>CItizen Engagement</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Extractive Tranparency</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Gender Commitment</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Peace and Security</a>
									</p>{" "}
								</div>
							</div>
							<div className='card'>
								<h1 className='text-primary text-2xl text-center'>Reports</h1>
								<div className='link pt-4'>
									<p className='pt-2 text-sm'>
										<a href=''>Report of Accountant General</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Quarterly Report</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Audit Reports</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Approved Reports</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Reports</a>
									</p>{" "}
								</div>
							</div>
							<div className='card'>
								<h1 className='text-primary text-2xl text-center'>
									Quick LInks
								</h1>
								<div className='link pt-4'>
									<p className='pt-2 text-sm'>
										<a href=''>Plateau State Government</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>Open Government Partnership</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>GovernmentProjects</a>
									</p>
									<p className='pt-2 text-sm '>
										{" "}
										<a href=''>Open Contracting</a>
									</p>
									<p className='pt-2 text-sm'>
										{" "}
										<a href=''>All Downloads</a>
									</p>{" "}
								</div>
							</div>
						</div>
						<hr className='mt-10 border-2 bg-inputcolor' />
						<p className='text-center text-sm'>
							Copyright © <span>{(new Date().getFullYear())}</span> Designed and Developed by nHub Nigeria. All
							Rights Reserved
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default HomePage;
