import { Fade, Slide} from "react-awesome-reveal";
import { f1, f2, f3, navbg2 } from "../assets/images";

const Features = () => {
	return (
		<Fade direction="in" duration={300}>
			<section id="features" className=" max-sm:mt-12 scale-95">
						<div className="flex justify-between items-center">
						<h2 className=" lg:text-[45px] md:text-[40px] font-bold text-[30px]">
							Why <span className="text-[#0437f2] font-bold"> Choose </span> Us?
						</h2>
						<img className="w-[90px]" src={navbg2} alt="" />
						</div>
					<div className="flex flex-col justify-start items-center gap-5">
						<div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12">
							<div className="bg-gray-100 rounded-[20px] shadow-[#0080807a] shadow-xl px-10 py-12">
							<Fade direction="in" duration={900} className="">
								<div className="w-11 h-11 flex justify-center items-center bg-white rounded-full mb-4">
									<img
										src={navbg2}
										width={34}
										height={34}
										className="animate-spin "
									/>
								</div>
								<p className="text-2xl font-bold">
									Pin Numbers for Easy Retrieval
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Each item registered on PinIt receives a unique pin number, making it easy to retrieve lost belongings with just a few clicks
								</p>
								<div className="w-[100%] mt-5 ">
									<img src={f1} alt=""/>
								</div>
							</Fade>
							</div>
							<div className="p-8 bg-gray-100 rounded-[20px] shadow-[#0080807a] shadow-xl px-10 py-12">
							<Slide direction="right">
								<div className="w-11 h-11 flex justify-center items-center bg-white rounded-full mb-4">
									<img
										src={navbg2}
										width={34}
										height={34}
										className="animate-spin "
									/>
								</div>
								<p className="text-2xl font-bold">
									Secure Database Management
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Our advanced database management system ensures that your personal information and pin numbers are securely stored and protected at all times.
								</p>
								<div className="w-[100%] mt-5 ">
									<img src={f2} alt=""/>
								</div>
							</Slide>
							</div>
						</div>
							<div className="p-8 w-[max-content] mt-4 bg-gray-100 rounded-[20px] shadow-[#0080807a] shadow-xl px-10 py-12">
							<Slide direction="down">
								<div className="w-11 h-11 flex justify-center items-center bg-white rounded-full mb-4">
									<img
										src={navbg2}
										width={34}
										height={34}
										className="animate-spin "
									/>
								</div>
								<p className="text-2xl font-bold">
									Automated Notifications
								</p>
								<p className=" mt-4 text-slate-gray">
									Receive instant notifications when a matching lost or found item is reported, so you can quickly reunite with your belongings.
								</p>
								<div className="w-[100%] flex items-center justify-center mt-6">
									<img src={f3} alt="" className=""/>
								</div>
							</Slide>
							</div>
					</div>
			</section>
		</Fade>
	);
};

export default Features;
