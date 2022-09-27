import { Popover } from '@headlessui/react';

type Props = {
	open: boolean;
};

export const MenuButton: React.FC<Props> = ({ open }) => {
	return (
		<Popover.Button className="relative z-50 bg-white bg-opacity-50 backdrop-blur-sm group text-sm text-neutral-700 transition hover:border-neutral-700 font-heading border py-2 px-4 border-neutral-200 flex items-center gap-2">
			<div className="flex flex-col items-center">
				<div
					className={`h-px w-4 bg-neutral-700 transform translate-y-px transition ${
						open ? 'rotate-45' : 'group-hover:-translate-y-[3px]'
					}`}
				></div>
				<div
					className={`h-px w-4 bg-neutral-700 transition ${
						open ? 'opacity-0' : 'opactiy-100'
					}`}
				></div>
				<div
					className={`h-px w-4 bg-neutral-700 transform -translate-y-px transition ${
						open ? '-rotate-45' : 'group-hover:translate-y-[3px]'
					}`}
				></div>
			</div>
			<span>Menu</span>
		</Popover.Button>
	);
};
