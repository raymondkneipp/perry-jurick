import {
	Button,
	CTA,
	Container,
	Footer,
	Hero,
	Meet,
	PopoverNav,
	Quote,
	Showcase,
	Testimonials,
} from 'components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<main>
			<Hero />
			<PopoverNav />
			<div className="flex flex-col gap-16 py-16">
				<Quote>
					There is nothing better than loving and being loved in return.
				</Quote>
				<Showcase />
				<Meet />
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
				<Footer />
			</div>
		</main>
	);
};

export default Home;
