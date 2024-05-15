// import { products } from "../constants";
// import { PopularProductCard } from "../components";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";

const Features = () => {
	return (
		<Fade direction="in" duration={500}>
			<section id="features" className=" max-sm:mt-12">
				<Slide direction="up">
					<div className="flex flex-col justify-start gap-5">
						<h2 className="text-[35px] font-palanquin font-bold">
							Why <span className="text-[#0437f2] font-bold"> Choose </span> Us?
						</h2>
						<div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-4">
							<div className="p-8 bg-gray-100 rounded-[40px]">
								<p className="text-lg font-bold">
									Pin Numbers for Easy Retrieval
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Each item registered on PinIt receives a unique pin number, making it easy to retrieve lost belongings with just a few clicks
								</p>
							</div>
							<div className="p-8 bg-gray-100 rounded-[40px]">
								<p className="text-lg font-bold">
									Secure Database Management
								</p>
								<p className="lg:max-w-lg mt-4 text-slate-gray">
									Our advanced database management system ensures that your personal information and pin numbers are securely stored and protected at all times.
								</p>
							</div>
						</div>
					</div>
				</Slide>
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
