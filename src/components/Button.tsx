import Link from 'next/link';

type Props = {
	children: string;
	to: string;
};

export const Button: React.FC<Props> = ({ children, to }) => {
	return (
		<Link
			href={to}
			className="text-sm text-neutral-500 hover:text-black transition hover:border-black font-heading border py-2 px-4 border-neutral-300 inline-flex"
		>
			{children}
		</Link>
	);
};
