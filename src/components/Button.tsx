import Link from 'next/link';

type Props = {
	children: string;
	to: string;
};

export const Button: React.FC<Props> = ({ children, to }) => {
	return (
		<Link
			href={to}
			className="text-sm text-neutral-500 hover:text-neutral-700 transition hover:border-neutral-700 font-heading border py-2 px-4 border-neutral-200 inline-flex"
		>
			{children}
		</Link>
	);
};
