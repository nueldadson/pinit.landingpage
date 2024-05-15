import { useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { herobg } from "../assets/images";
import './hero.css';
import { arrowRight } from "../assets/icons";

const Hero = () => {
	// const [bigShoeImg, setBigShoeImg] = useState(bigShoe3);

	return (
		<div
			id="home"
			className="min-w-full flex md:flex-row flex-col text-center justify-center min-h-screen  gap-10 max-container"
		>
			<div className="relative min-h-screen flex flex-col items-center w-full bgHero h-[800px]"> 
				<h1 className="w-full mt-[110px] text-[45px] leading-[50px] max-sm:text-[35px] max-sm:px-8 max-sm:leading-[35px] max-md:px-12 max-md:text-[40px] font-bold">
					<span className="xl:whitespace-nowrap text-white relative z-10">
						Introducing PinIt: 
					</span>{" "}
					<span className="text-[#0437f2] inline-block">
						Your Ultimate
					</span>
					<br />
					<span className="text-[#0437f2] inline-block">
						Solution for Lost Items
					</span>
				</h1>
				<p className="w-full mt-[20px] text-gray-400 text-sm max-sm:text-sm px-60 max-sm:px-16 max-sm:leading-[25px] max-md:px-32 max-md:text-md font-bold">
					Say goodbye to lost items and hello to peace of mind with PinIt. Discover how our innovative solution can help you keep track of your belongings effortlessly.
				</p>

				{/* <Button label="Shop now" iconURL={arrowRight} /> */}

				{/* <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className="text-4xl font-palanquin font-bold">{stat.value}</p>
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div> */}
			</div>

			{/* <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 "> */}
				{/* <img
					src={bigShoeImg}
					alt="shoe colletion"
					width={610}
					height={502}
					className="object-contain relative z-10"
				/> */}

				{/* <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((image, index) => (
						<div key={index}>
							<ShoeCard
								index={index}
								imgURL={image}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div> */}
			{/* </div> */}
		</div>
	);
};

export default Hero;
