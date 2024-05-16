import { footerLogo } from "../assets/images";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarContent,
	SidebarMenu,
	SidebarLink,
	SidebarIcon,
	LinkedinIcon,
	InstagramIcon,
	TwitterIcon,
} from "./Sidebarelements";
import { HashLink as Link } from "react-router-hash-link";
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer  isOpen={isOpen} onClick={toggle} className="containerr">
				<img
					src={footerLogo}
					alt="logo"
					className=" w-[150px] mt-8 ml-6 absolute"
				/>
				<Icon onClick={toggle} className="mr-8 mt-6">
					<CloseIcon />
				</Icon>
				<SidebarContent>
					<SidebarMenu>
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#features">
							Features
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#about-us">
							About Us
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#faqs">
							FAQs
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#contact-us">
							Contact Us
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink
							onClick={toggle}
							href="https://aquamarine-chaja-0119a9.netlify.app/"
						>
							Join The Waitlist
						</SidebarLink>
					</SidebarMenu>
					<SidebarIcon className="mt-8">
						<LinkedinIcon />
						<InstagramIcon />
						<TwitterIcon />
					</SidebarIcon>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
