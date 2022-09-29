type Props = {
	children: string;
	cite: string;
};

export const BQ: React.FC<Props> = ({ children, cite }) => {
	return (
		<figure className="py-16 flex items-center justify-center flex-col gap-4">
			<blockquote>
				<p className="font-heading text-center text-neutral-500 uppercase tracking-widest">
					{children}
				</p>
			</blockquote>
			<figcaption className="font-body italic text-neutral-500">
				- {cite}
			</figcaption>
		</figure>
	);
};
