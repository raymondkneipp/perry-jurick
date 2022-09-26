import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaPinterestSquare,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import Link from 'next/link';

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

			<div className="flex flex-col font-body gap-2">
				<Link href="/">Home</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/about">About</Link>
				<Link href="/testimonials">Testimonials</Link>
				<Link href="/inquire">Inquire</Link>
				<Link href="/dianne-boudoir">Dianne Boudoir</Link>
			</div>

			<div className="flex gap-2">
				<FaFacebookSquare size={25} />
				<FaInstagramSquare size={25} />
				<FaPinterestSquare size={25} />
			</div>
		</nav>
	);
};
