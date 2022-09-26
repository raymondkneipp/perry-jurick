import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { NavLink, SocialIcon } from 'components';

import Image from 'next/future/image';
import { useState } from 'react';

export const SideNav: React.FC = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<nav
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			style={{
				backgroundSize: '200% 200%',
				backgroundPosition: isHover ? '0% 0%' : '50% 50%',
			}}
			className="absolute z-40 top-0 left-0 bottom-0 w-64 p-8 flex flex-col justify-between gap-4 transition-all duration-500 bg-gradient-to-r from-white via-transparent to-transparent"
		>
			<Image src="/img/initials.svg" alt="pj" width="102" height="38" />

			<div className="flex flex-col gap-4">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/portfolio">Portfolio</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/testimonials">Testimonials</NavLink>
				<NavLink to="/inquire">Inquire</NavLink>
				<NavLink to="/dianne-boudoir">Dianne Boudoir</NavLink>
			</div>

			<div className="flex gap-4 items-center">
				<SocialIcon icon={FaFacebookF} size={20} to="https://facebook.com" />
				<SocialIcon icon={FaInstagram} size={25} to="https://instagram.com" />
				<SocialIcon icon={FaPinterestP} size={20} to="https://pinterest.com" />
			</div>
		</nav>
	);
};
