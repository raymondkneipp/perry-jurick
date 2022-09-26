import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	children: string;
	to: string;
};

export const NavLink: React.FC<Props> = ({ children, to }) => {
	const router = useRouter();

	let path = router.pathname;

	const activeStyles =
		path === to
			? 'scale-110 text-neutral-700'
			: 'text-neutral-500 hover:scale-110 hover:text-neutral-700';

	return (
		<Link
			href={to}
			className={`font-heading text-sm transform origin-left transition uppercase tracking-wide ${activeStyles}`}
		>
			{children}
		</Link>
	);
};
