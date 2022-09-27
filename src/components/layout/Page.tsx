import { Footer } from 'components';

type Props = {
	children: React.ReactNode;
};

export const Page: React.FC<Props> = ({ children }) => {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
};
