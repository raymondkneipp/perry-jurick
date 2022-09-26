import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	children: string;
	to: string;
};

export const NavLink: React.FC<Props> = ({ children, to }) => {
	const router = useRouter();

	let path = router.pathname.replace('/_sites/[site]', '');
	if (path === '') {
		path = '/';
	}

	const active = path === to;

	return (
		<Link
			href={to}
			className={`font-heading text-sm transform origin-left transition ${
				active
					? 'scale-125 text-black'
					: 'text-neutral-500 hover:scale-125 hover:text-black'
			}`}
		>
			{children}
		</Link>
	);
};
