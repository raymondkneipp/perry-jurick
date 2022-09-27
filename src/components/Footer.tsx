import { Centered, Container, Initials, Socials } from 'components';

export const Footer: React.FC = () => {
	return (
		<Container>
			<footer className="py-16">
				<Centered>
					<Initials />
					<Socials />
					<a
						href="https://raymondkneipp.com"
						target="_blank"
						rel="noreferrer"
						className="text-center font-heading text-neutral-500 hover:text-neutral-700 text-sm transition"
					>
						Website by Raymond Kneipp
					</a>
				</Centered>
			</footer>
		</Container>
	);
};
