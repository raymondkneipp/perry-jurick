type Props = {
	children: string;
};

export const Quote: React.FC<Props> = ({ children }) => {
	return (
		<div className="py-16 flex items-center justify-center">
			<q className="font-heading text-xl text-center text-neutral-500 max-w-2xl uppercase tracking-widest">
				{children}
			</q>
		</div>
	);
};
