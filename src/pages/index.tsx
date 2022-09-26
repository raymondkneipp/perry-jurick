import { Button, Hero, Quote, SideNav } from 'components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div>
			<SideNav />
			<Hero />
			<div className="ml-64 p-8 absolute top-full">
				<Quote>
					There is nothing better than loving and being loved in return.
				</Quote>
				<h1 className="font-heading text-3xl">hello world</h1>
				<p className="font-body text-neutral-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde eum
					atque odit maiores cum perspiciatis, odio aut fugiat? Maiores, labore
					aliquam? Nihil deleniti officiis voluptate, magnam tempora odit
					beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempora ipsa dolore praesentium fuga aperiam tenetur fugit minima, hic
					tempore eligendi consequatur, corporis excepturi exercitationem vero
					ea, esse necessitatibus quibusdam magni?
				</p>
				<Button to="/about">Read More</Button>
			</div>
		</div>
	);
};

export default Home;
