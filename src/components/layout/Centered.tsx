type Props = {
	children: React.ReactNode;
};

export const Centered: React.FC<Props> = ({ children }) => {
	return <div className="flex flex-col items-center gap-4">{children}</div>;
};
