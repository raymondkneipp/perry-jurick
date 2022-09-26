import { Button, CTA, Footer, Hero, Meet, Quote, SideNav } from 'components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<SideNav />
			<Hero />
			<div className="ml-64 absolute top-full flex flex-col gap-16 py-16">
				<Quote>
					There is nothing better than loving and being loved in return.
				</Quote>
				<Meet />
				{[1, 2, 3, 4, 5].map((item) => (
					<div className="flex flex-col gap-4 items-start pb-4 px-16">
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
				))}

				<CTA />
				<Footer />
			</div>
		</>
	);
};

export default Home;
