type Props = {
	children: string;
	name: string;
};

export const TestimonialItem: React.FC<Props> = ({ children, name }) => {
	return (
		<div className="max-w-md flex flex-col gap-4 items-center">
			<h3 className="text-4xl font-script text-neutral-500 tracking-wider text-center">
				{name}
			</h3>
			<p className="text-neutral-500 font-body text-justify">{children}</p>
		</div>
	);
};
