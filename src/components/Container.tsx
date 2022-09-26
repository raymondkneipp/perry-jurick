import cn from 'variant-classnames';

type Props = {
	children: React.ReactNode;
	bordered?: boolean;
};

export const Container: React.FC<Props> = ({ children, bordered }) => {
	const classes = cn(
		{
			$all: 'px-16',
			bordered: {
				true: 'border-y-8 border-double border-neutral-100 py-16',
			},
		},
		{ bordered }
	);

	return (
		<div className={classes}>
			<div className="container mx-auto max-w-screen-lg">{children}</div>
		</div>
	);
};
