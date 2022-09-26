import { Container } from 'components';

type Props = {
	children: string;
};

export const Quote: React.FC<Props> = ({ children }) => {
	return (
		<Container>
			<div className="py-16 flex items-center justify-center">
				<q className="font-heading text-2xl text-center text-neutral-500 max-w-2xl uppercase tracking-widest">
					{children}
				</q>
			</div>
		</Container>
	);
};
