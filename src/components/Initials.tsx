import Image from 'next/future/image';
import Link from 'next/link';

export const Initials: React.FC = () => {
	return (
		<Link href="/">
			<Image src="/img/initials.svg" alt="pj" width="102" height="38" />
		</Link>
	);
};
