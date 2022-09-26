type Props = {
	children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
	return <section className="container mx-auto px-16">{children}</section>;
};
