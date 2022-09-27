import { Centered, Container, Initials, Socials } from 'components';

export const Footer: React.FC = () => {
	return (
		<Container>
			<footer>
				<Centered>
					<a
						href="https://raymondkneipp.com"
						target="_blank"
						rel="noreferrer"
						className="text-center font-heading text-neutral-500 hover:text-neutral-700 text-sm transition"
					>
						Website by Raymond Kneipp
					</a>

					<Socials />
					<Initials />
				</Centered>
			</footer>
		</Container>
	);
};
