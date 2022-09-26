type Props = {
	children: string;
};

export const Quote: React.FC<Props> = ({ children }) => {
	return (
		<section className="p-8 flex items-center justify-center">
			<q className="font-heading text-xl text-center">{children}</q>
		</section>
	);
};
