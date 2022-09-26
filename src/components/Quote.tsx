type Props = {
	children: string;
};

export const Quote: React.FC<Props> = ({ children }) => {
	return (
		<section className="p-8 flex items-center justify-center">
			<q className="font-heading text-2xl text-center text-neutral-500 max-w-2xl uppercase tracking-widest">
				{children}
			</q>
		</section>
	);
};
