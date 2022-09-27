type Props = {
	children: React.ReactNode;
};

export const Spacing: React.FC<Props> = ({ children }) => {
	return <div className="flex flex-col gap-16">{children}</div>;
};
