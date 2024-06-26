import { Nav } from "./components";
import { useEffect, useState } from "react";
import {
	Hero,
	Sidebar,
	Features,
	Howitworks,
	Aboutus,
	Subscribe,
	Footer,
} from "./sections";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SwipableNotification from "./components/SwipeableNotification";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import "./app.css";
import FAQsSection from "./sections/FaqsSection";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const App = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
      toast(
        ({ closeToast }) => (
          <SwipableNotification
            message={`Join Our Waiting List Now!!`}
            onDismiss={closeToast}
          />
        ),
        {
          autoClose: true,
		  timer: 4,
		  position:"bottom-center",
		   // Disable auto-close to allow swipe to dismiss
        }
      );
    }, 4000); // 1-second delay
    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
	}, []);


	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className="relative">
			<Nav isOpen={isOpen} toggle={toggle} />
			<ToastContainer className="text-sm"/>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Fade direction="in" duration={2000}>
				<section className="">
					<Hero />
				</section>
			</Fade>
			<section className="padding">
				<Features />
			</section>
			<section className="padding">
				<Howitworks />
			</section>
			<section className="bg-[#f8f8f8] padding">
				<Aboutus />
			</section>
			<section className="padding">
				<FAQsSection />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className=" bg-black padding-x padding-t pb-8 " id="footer">
				<Footer />
			</section>
		</main>
	);
};

export default App;
