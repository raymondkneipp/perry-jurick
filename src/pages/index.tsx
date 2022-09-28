import {
	CTA,
	Container,
	Hero,
	Intro,
	Page,
	PopoverNav,
	Quote,
	Showcase,
	Spacing,
	Testimonials,
} from 'components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Page>
			<Hero />
			<PopoverNav />
			<Spacing>
				<Container>
					<Quote>
						There is nothing better than loving and being loved in return.
					</Quote>
				</Container>
				<Showcase />
				<Intro />
				<Testimonials />
				<CTA />
			</Spacing>
		</Page>
	);
};

export default Home;
