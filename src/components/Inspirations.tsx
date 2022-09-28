import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Container } from 'components';
import Image from 'next/future/image';
import { useState } from 'react';

const inspirations = [
	{
		name: 'Culture',
		image: '1.jpg',
		content:
			"I have a thirst for knowledge, and therefore learning about something different from what I know is fascinating to me. There's a feeling certain cultures give you that we don't have in America, and I want to explore them all.",
	},
	{
		name: 'The Arts',
		image: '2.jpg',
		content:
			"From literature to dancing, museums to tattoos, I love it all. I could never picture myself being anything but an artist. It's truly deep in my soul and something I will never tire of. It's a community I will always feel at home in.",
	},
	{
		name: 'Travel',
		image: '3.jpg',
		content:
			"I'm that person who loves long car rides. Wanna go on a road trip? I'm down! Though I've never been on a plane (I know!), I've always wanted to travel overseas. My top two places to visit are France and Japan!",
	},
	{
		name: 'Animals',
		image: '4.jpg',
		content:
			"Meet Ikarus! This girl right here is my best friend in the entire world and I have no idea what I would do without her. I've had as many as six animals at once and even though my mother called it the zoo I was in heaven!",
	},
	{
		name: 'Family',
		image: '5.jpg',
		content:
			"I'm hugely family oriented, probably because I have such an amazing family! I've always considered my mom one of my best friends and this adorable guy here is my wonderful nephew Carson! The more lovin' I can give to this little guy the better. And I'm so excited to have three new nieces! And guess what, I only have one sister! Yup, she had triplets! I couldn't be more excited to see Quinn, Dani & Ozzy grow alongside their wonderful, loving big brother!",
	},
];

export const Inspirations: React.FC = () => {
	const [index, setIndex] = useState(0);

	const prev = () => {
		if (index === 0) {
			setIndex(inspirations.length - 1);
		} else {
			setIndex((prev) => prev - 1);
		}
	};

	const next = () => {
		if (index === inspirations.length - 1) {
			setIndex(0);
		} else {
			setIndex((prev) => prev + 1);
		}
	};

	return (
		<Container>
			<div className="grid grid-cols-2 gap-16">
				<div className="flex flex-col gap-4">
					<h2 className="text-neutral-500 font-body italic">Inspirations</h2>
					<h3 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
						{inspirations[index].name}
					</h3>
					<p className="text-neutral-500 font-body text-justify">
						{inspirations[index].content}
					</p>
				</div>
				<div className="relative h-64">
					<Image
						src={`/img/inspiration/${inspirations[index].image}`}
						alt={inspirations[index].name}
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="">
				<button type="button" onClick={prev} className="p-4 text-neutral-500">
					<BsChevronLeft size={20} />
				</button>
				<button type="button" onClick={next} className="p-4 text-neutral-500">
					<BsChevronRight size={20} />
				</button>
			</div>
		</Container>
	);
};
