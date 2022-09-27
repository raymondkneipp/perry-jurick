import type { IconType } from 'react-icons';
import React from 'react';

type Props = {
	icon: IconType;
	size: number;
	to: string;
};

export const SocialIcon: React.FC<Props> = ({ icon, size, to }) => {
	return (
		<a
			href={to}
			className="text-neutral-500 hover:text-neutral-700 transition"
			target="_blank"
			rel="noreferrer"
		>
			{React.createElement(icon, { size })}
		</a>
	);
};
