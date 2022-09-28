import {
	CTA,
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
				<CTA />
			</Spacing>
		</Page>
	);
};

export default About;
