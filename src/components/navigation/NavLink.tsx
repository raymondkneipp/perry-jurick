import Link from 'next/link';
import cn from 'variant-classnames';
import { useRouter } from 'next/router';

type Props = {
	children: string;
	to: string;
};

export const NavLink: React.FC<Props> = ({ children, to }) => {
	const router = useRouter();

	const active = router.pathname === to;

	const classes = cn(
		{
			$all: 'font-heading text-sm transform origin-left transition uppercase tracking-wide',
			active: {
				true: 'scale-110 text-neutral-700',
				false: 'text-neutral-500 hover:scale-110 hover:text-neutral-700',
			},
		},
		{ active }
	);

	return (
		<Link href={to} className={classes}>
			{children}
		</Link>
	);
};
