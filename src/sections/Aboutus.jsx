import { Bounce, Slide } from "react-awesome-reveal";
import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Aboutus = () => {
	return (
		<Slide direction="left">
		<section id="about-us" className=" p-4 max-container ">
			<p className="mb-4 text-slate-gray font-bold">About Us</p>
			<div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-16">
				<div>
					<p className="font-bold lg:text-4xl text-3xl mb-8">
						Our Architectural Journey
					</p>
					<p className="w-[80%]">At PinIt, we're passionate about helping individuals and families avoid the stress and inconvenience of lost items. Our mission is to provide a simple yet effective solution for managing and retrieving lost belongings.</p>
					<div className="mt-16 grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4 w-[90%]">
						<div className=" border-t-4 border-[#008080] w-[90%]">
							<p className="font-bold text-3xl mt-2 mb-2">
								Team
							</p>
							<p className="text-sm text-gray-700 font-semibold">Our dedicated team of experts in technology and customer service is committed to delivering an exceptional experience for every PinIt user.</p>
						</div>
						<div className=" border-t-4 border-[#008080] w-[90%]">
							<p className="font-bold text-3xl mt-2 mb-2">
								Partnerships
							</p>
							<p className="text-sm text-gray-700 font-semibold">We're proud to partner with leading organizations and institutions to bring PinIt to communities across Nigeria and beyond.</p>
						</div>
					</div>
				</div>
				<div className="bg-red-500 w-full rounded-[30px]">
					ddd
				</div>
			</div>
		</section>
		</Slide>
	);
};

export default Aboutus;
