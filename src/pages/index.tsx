import {
	Button,
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
				<Intro primary />
				<Testimonials />

				<Container>
					<div className="flex flex-col gap-4 items-start">
						<h1 className="font-heading text-2xl uppercase tracking-widest">
							Hello World
						</h1>
						<p className="font-body text-neutral-500 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde
							eum atque odit maiores cum perspiciatis, odio aut fugiat? Maiores,
							labore aliquam? Nihil deleniti officiis voluptate, magnam tempora
							odit beatae! Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempora ipsa dolore praesentium fuga aperiam tenetur fugit
							minima, hic tempore eligendi consequatur, corporis excepturi
							exercitationem vero ea, esse necessitatibus quibusdam magni?
						</p>
						<Button to="/about">Read More</Button>
					</div>
				</Container>

				<CTA />
			</Spacing>
		</Page>
	);
};

export default Home;
