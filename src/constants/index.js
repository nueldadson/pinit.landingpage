import {
	facebook,
	instagram,
	twitter,
} from "../assets/icons";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#features", label: "Features" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#faqs", label: "FAQs" },
	{ href: "#contact-us", label: "Contact Us" },
];


export const footerLinks = [
	{
		title: "Help",
		links: [
			{ name: "About us", link: "#about-us" },
			{ name: "FAQs", link: "#faqs" },
			{ name: "How it works", link: "#hiw" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "pinitenterprise@gmail.com", link: "/" },
			{ name: "+2349017448561", link: "/" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
];
