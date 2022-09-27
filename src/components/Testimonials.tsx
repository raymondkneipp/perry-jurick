import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Centered, Container, TestimonialItem } from 'components';
import { useEffect, useState } from 'react';

import { Transition } from '@headlessui/react';

const testimonials = [
	{
		name: 'Drew + Tracy',
		content:
			'Perry was absolutely amazing to work with. She was responsive, understanding, kind, and so flexible to our time constraints, changes, and weather issues. She was great with guidance and communication. She came early and did her own thing while I was getting ready--taking detail shots and working in the background. She was amazing at redirecting our family and friends for pictures, and she was so good at going with the flow. She was just amazing to work with. Her photo style is light, natural, and all things beautiful, and we will treasure our pictures forever. I cannot say enough great things about this girl. Thanks so much Perry! She will not let you down, brides!',
	},
	{
		name: 'Casey + Maranda',
		content:
			"My favorite vendor ever! We honestly couldn't have picked a better photographer for our wedding. Perry is so outgoing and kind and we knew she was going to be the perfect match from the moment we met her! She was easily the most responsive and accommodating vendor we had. She traveled for us, shot flawlessly in just about all the elements weather-wise for us and made everyone she photographed feel so comfortable and confident in front of a camera! She is organized, well-prepared, creative with her photos and the cherry on top was her sending me sneak peek images so quickly! I could seriously rave about this sweet girl all day.",
	},
];

export const Testimonials: React.FC = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		console.log(index);
	}, [index]);

	const prev = () => {
		if (index === 0) {
			setIndex(testimonials.length - 1);
		} else {
			setIndex((prev) => prev - 1);
		}
	};

	const next = () => {
		if (index === testimonials.length - 1) {
			setIndex(0);
		} else {
			setIndex((prev) => prev + 1);
		}
	};

	return (
		<Container bordered>
			<Centered>
				<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
					Testimonials
				</h2>
				<Transition
					show={true}
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<TestimonialItem name={testimonials[index].name}>
						{testimonials[index].content}
					</TestimonialItem>
				</Transition>

				<div>
					<button type="button" onClick={prev} className="p-4 text-neutral-500">
						<BsChevronLeft size={20} />
					</button>
					<button type="button" onClick={next} className="p-4 text-neutral-500">
						<BsChevronRight size={20} />
					</button>
				</div>
			</Centered>
		</Container>
	);
};
