import React from "react";
import { navbg, navbg2 } from "../assets/images";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import "./navs.css";

const Nav = ({ isOpen, toggle }) => {
	const [isFixed, setIsFixed] = useState(false);

	const scrollThreshold = 60; // Adjust this value based on when you want the navbar to become fixed

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`padding-x py-4 z-10 w-full justify-center flex ${
				isFixed ? "fixed top-0" : " absolute"
			}`}
		>
			<nav className="w-[75%] flex justify-between items-center p-1 h-[45px] bg-gray-500 border-[#0437f2] bg-opacity-25 backdrop-blur-[3px] border rounded-full max-sm:h-[40px] max-md:h-[55px]">
				<a href="/" className="h-full w-[17%] max-lg:w-[25%]  max-sm:w-[35%] flex justify-center items-center rounded-full ">
					<img
						src={navbg}
						alt="logo"
						className="w-ull "
					/>
				</a>
				<ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className={` text-xs font-bold ${
				isFixed ? "text-[#008080] bg-white py-1 px-2 rounded-lg" : "text-white"
			}`}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className={`flex text-sm items-center justify-center font-bold leading-normal font-montserrat w-[17%] h-full rounded-full max-lg:hidden ${
						isFixed ? " text-white bg-[#0437f2] " : "text-[#008080] bg-white"
					}`}
				>
					Join Waitlist
				</div>
				<div className="">
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="iconn"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
