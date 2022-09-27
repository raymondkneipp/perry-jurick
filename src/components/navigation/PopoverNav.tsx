import { Initials, MenuButton, NavLink, Socials } from 'components';

import { Popover } from '@headlessui/react';

export const PopoverNav: React.FC = () => {
	return (
		<nav className="z-50 flex items-center justify-between p-8 fixed md:sticky top-0 right-0 left-0">
			<Initials />
			<Popover>
				{({ open }) => (
					<>
						<MenuButton open={open} />
						<Popover.Panel className="absolute z-10 right-0 left-0 top-0 bg-white p-8 flex flex-col gap-8 shadow-lg bg-opacity-50 backdrop-blur-sm">
							<Initials />
							<div className="flex flex-col gap-4 items-start">
								<NavLink to="/">Home</NavLink>
								<NavLink to="/portfolio">Portfolio</NavLink>
								<NavLink to="/about">About</NavLink>
								<NavLink to="/testimonials">Testimonials</NavLink>
								<NavLink to="/inquire">Inquire</NavLink>
								<NavLink to="/dianne-boudoir">Dianne Boudoir</NavLink>
							</div>
							<Socials />
						</Popover.Panel>
					</>
				)}
			</Popover>
		</nav>
	);
};
