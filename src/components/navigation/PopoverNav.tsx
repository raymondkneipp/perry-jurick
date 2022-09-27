import { Initials } from 'components';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

export const PopoverNav: React.FC = () => {
	return (
		<nav className="flex items-center justify-between p-8 sticky top-0">
			<Initials />
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button className="bg-white group text-sm text-neutral-500 hover:text-neutral-700 transition hover:border-neutral-700 font-heading border py-2 px-4 border-neutral-200 flex items-center gap-2">
							<div className="flex flex-col items-center">
								<div
									className={`h-px w-4 bg-neutral-500 group-hover:bg-neutral-700 transform translate-y-px transition ${
										open ? 'rotate-45' : 'group-hover:-translate-y-[3px]'
									}`}
								></div>
								<div
									className={`h-px w-4 bg-neutral-500 group-hover:bg-neutral-700 transition ${
										open ? 'opacity-0' : 'opactiy-100'
									}`}
								></div>
								<div
									className={`h-px w-4 bg-neutral-500 group-hover:bg-neutral-700 transform -translate-y-px transition ${
										open ? '-rotate-45' : 'group-hover:translate-y-[3px]'
									}`}
								></div>
							</div>
							<span>Menu</span>
						</Popover.Button>

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
