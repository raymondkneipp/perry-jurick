import {
	CTA,
	Intro,
	Page,
	PopoverNav,
	Quote,
	Spacing,
	Testimonials,
} from 'components';

import type { NextPage } from 'next';

const About: NextPage = () => {
	return (
		<Page>
			<PopoverNav />
			<Spacing>
				<Intro primary />

				<Testimonials />

				<Quote>
					There is nothing better than loving and being loved in return.
				</Quote>

				<CTA />
			</Spacing>
		</Page>
	);
};

export default About;
