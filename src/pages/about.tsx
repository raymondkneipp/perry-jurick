import {
	BQ,
	CTA,
	Container,
	Inspirations,
	Intro,
	Love,
	Meet,
	Page,
	PopoverNav,
	Spacing,
} from 'components';

import type { NextPage } from 'next';

const About: NextPage = () => {
	return (
		<Page>
			<PopoverNav />
			<Spacing>
				<Intro primary />
				<Meet />
				<Inspirations />
				<Love />
				<Container>
					<BQ cite="Chloé Williams">
						I would like to live a life where saying I love you is redundant.
						One that makes it so clear I really do but must say it anyway in
						fear it might burst from me, might cause a scene, might split me in
						two.
					</BQ>
				</Container>
				<CTA />
			</Spacing>
		</Page>
	);
};

export default About;
