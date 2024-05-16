// import { products } from "../constants";
// import { PopularProductCard } from "../components";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";
import { automaten } from "../assets/images";

const Features = () => {
	return (
		<Fade direction="in" duration={300}>
			<section id="features" className=" max-sm:mt-12">
					<div className="flex flex-col justify-start gap-5">
						<h2 className="text-[35px] font-palanquin font-bold">
							Why <span className="text-[#0437f2] font-bold"> Choose </span> Us?
						</h2>
						<div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
							<Fade direction="in" duration={900}>
							<div className="p-8 bg-gray-100 rounded-[40px]">
								<p className="text-lg font-bold">
									Pin Numbers for Easy Retrieval
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Each item registered on PinIt receives a unique pin number, making it easy to retrieve lost belongings with just a few clicks
								</p>
								<div className="w-[100%] mt-5 ">
									<img src={automaten} alt=""/>
								</div>
							</div>
							</Fade>
							<Slide direction="right">
							<div className="p-8 bg-gray-100 rounded-[40px]">
								<p className="text-lg font-bold">
									Secure Database Management
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Our advanced database management system ensures that your personal information and pin numbers are securely stored and protected at all times.
								</p>
								<div className="w-[100%] mt-5 ">
									<img src={automaten} alt=""/>
								</div>
							</div>
							</Slide>
						</div>
							<Slide direction="down">
							<div className="p-8 bg-gray-100 rounded-[40px]">
								<p className="text-lg font-bold">
									Automated Notifications
								</p>
								<p className=" mt-4 text-slate-gray">
									Receive instant notifications when a matching lost or found item is reported, so you can quickly reunite with your belongings.
								</p>
								<div className="w-[100%] mt-5 ">
									<img src={automaten} alt=""/>
								</div>
							</div>
							</Slide>
					</div>
				{/* </Slide> */}
				{/* <Slide direction="left">
					<div
						className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-4
"
					>
						{products.map((product) => (
							<PopularProductCard key={product.name} {...product} />
						))}
					</div>
				</Slide> */}
			</section>
		</Fade>
	);
};

export default Features;
