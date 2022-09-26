import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import { NavLink } from 'components';

export const SideNav: React.FC = () => {
	const [isTransparent, setIsTransparent] = useState(true);

	const listenScrollEvent = (event: Event) => {
		if (window.scrollY > 70) {
			return setIsTransparent(false);
		}
		return setIsTransparent(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () => window.removeEventListener('scroll', listenScrollEvent);
	}, []);

	return (
		<nav
			className={`fixed z-40 top-0 left-0 bottom-0 w-64 p-8 flex flex-col justify-between gap-4 transition duration-500 ${
				isTransparent ? '' : 'bg-white'
			}`}
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
				<a
					href="https://www.google.com"
					className="text-neutral-500 hover:text-black transition"
				>
					<FaFacebookF size={20} />
				</a>
				<a
					href="https://www.google.com"
					className="text-neutral-500 hover:text-black transition"
				>
					<FaInstagram size={25} />
				</a>
				<a
					href="https://www.google.com"
					className="text-neutral-500 hover:text-black transition"
				>
					<FaPinterestP size={20} />
				</a>
			</div>
		</nav>
	);
};
