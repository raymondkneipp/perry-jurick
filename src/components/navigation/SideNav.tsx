import { NavLink, Socials } from 'components';

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
			className="hidden md:flex absolute z-40 top-0 left-0 bottom-0 w-64 p-8 flex-col justify-between gap-4 transition-all duration-500 bg-gradient-to-r from-white via-transparent to-transparent"
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

			<Socials />
		</nav>
	);
};
