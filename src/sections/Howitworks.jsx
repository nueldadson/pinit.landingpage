import { Fade, Slide} from "react-awesome-reveal";
import { hiw1, hiw2, hiw3, } from "../assets/images";

const Howitworks = () => {
	return (
		<section id="hiw" className=" max-sm:mt-12 scale-95">
			<div className="flex justify-between items-center mb-10">
	    		<h2 className=" lg:text-[45px] md:text-[40px] font-bold text-[30px]">
    		    	<span className="text-[#0437f2] font-bold"> How </span> It Works?
				</h2>
			</div>
            <div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mb-16">
                <Slide direction="left" duration={500}>
                <div>
                    <img src={hiw1} alt="" srcset="" />
                </div>
                <div>
        			<p className="text-[25px] font-semibold mb-4">Sign Up for PinIt</p>
        			<p className="text-[15px] leading-6 text-slate-gray font-semibold">
                        Begin your PinIt journey by signing up for an account. Simply visit our website or download the mobile app and follow the prompts to create your profile.
                    </p>
                    <button className="font-semibold text-white mt-5 rounded-full px-8 py-2 bg-black">
                        Get Started
                    </button>
                </div>
                </Slide>
            </div>
            <div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mb-16">
                <Slide direction="left" duration={500}>
                <div>
        			<p className="text-[25px] font-semibold mb-4">Register Your Items</p>
        			<p className="text-[15px] leading-6 text-slate-gray font-semibold">
                        Once you've signed up, start registering your valuable items on PinIt's easy-to-use platform. Provide a description and upload a photo of each item to complete the registration process.
                    </p>
                    <button className="font-semibold text-white mt-5 rounded-full px-8 py-2 bg-black">
                        Get Started
                    </button>
                </div>
                <div>
                    <img src={hiw2} alt="" srcset="" />
                </div>
                </Slide>
            </div>
            <div className="grid lg:grid-cols-2 text-black md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
                <Slide direction="left" duration={500}>
                <div>
                    <img src={hiw3} alt="" srcset="" />
                </div>
                <div>
        			<p className="text-[25px] font-semibold mb-4">Receive Your Unique Pin Numbers</p>
        			<p className="text-[15px] leading-6 text-slate-gray font-semibold">
                        Each registered item will be assigned a unique pin number for easy identification and retrieval. Keep these pin numbers safe and accessible in case you ever need to report a lost item.
                    </p>
                    <button className="font-semibold text-white mt-5 rounded-full px-8 py-2 bg-black">
                        Learn More
                    </button>
                </div>
                </Slide>
            </div>
            <Slide direction="up" duration={500}>
            <div className="text-black mt-16">
                <div>
        			<p className="text-[25px] font-semibold mb-4">- Report Lost Items</p>
        			<p className="text-[15px] leading-6 text-slate-gray font-semibold">
                        If you ever lose an item, log in to your PinIt account and report it as lost. Provide details such as the item description, last known location, and any other relevant information to help us locate your belongings.
                    </p>
                </div>
            </div>
            </Slide>
            <Slide direction="up" duration={500}>
            <div className="text-black mt-16">
                <div>
        			<p className="text-[25px] font-semibold mb-4">- Retrieve Lost Items</p>
        			<p className="text-[15px] leading-6 text-slate-gray font-semibold">
                        Sit back and relax as our system matches your lost item report with any found items in our database. Receive notifications and follow the instructions to reclaim your belongings hassle-free.
                    </p>
                </div>
            </div>
            </Slide>
		</section>
	);
};

export default Howitworks;
