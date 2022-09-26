import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { NavLink, SocialIcon } from 'components';
import { useEffect, useState } from 'react';

import Image from 'next/future/image';

export const SideNav: React.FC = () => {
	const [bgPos, setBgPos] = useState(100);

	const listenScrollEvent = (event: Event) => {
		let height = screen.height;
		let scroll = window.scrollY;

		if (scroll < height) {
			return setBgPos((100 * (-scroll + height)) / height);
		} else {
			setBgPos(0);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () => window.removeEventListener('scroll', listenScrollEvent);
	}, []);

	return (
		<nav
			style={{
				backgroundSize: '200% 200%',
				backgroundPosition: `${bgPos}% ${bgPos}%`,
			}}
			className="fixed z-40 top-0 left-0 bottom-0 w-64 p-8 flex flex-col justify-between gap-4 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent"
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
