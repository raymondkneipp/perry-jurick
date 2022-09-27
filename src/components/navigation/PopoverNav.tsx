import { Initials, MenuButton } from 'components';

import Link from 'next/link';
import { Popover } from '@headlessui/react';

export const PopoverNav: React.FC = () => {
	return (
		<nav className="flex items-center justify-between p-8 sticky top-0">
			<Initials />
			<Popover className="relative">
				{({ open }) => (
					<>
						<MenuButton open={open} />
						<Popover.Panel className="absolute z-10">
							<div className="grid grid-cols-2">
								<Link href="/">Home</Link>
								<Link href="/portfolio">Portfolio</Link>
								<Link href="/about">About</Link>
								<Link href="/testimonials">Testimonials</Link>
								<Link href="/inquire">Inquire</Link>
								<Link href="/dianne-boudoir">Dianne Boudoir</Link>
							</div>
						</Popover.Panel>
					</>
				)}
			</Popover>
		</nav>
	);
};
