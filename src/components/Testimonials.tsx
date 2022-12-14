import {
	ArrowControls,
	Centered,
	Container,
	TestimonialItem,
} from 'components';

import { useState } from 'react';

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

	return (
		<Container>
			<Centered>
				<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
					Testimonials
				</h2>
				<TestimonialItem name={testimonials[index].name}>
					{testimonials[index].content}
				</TestimonialItem>

				<ArrowControls
					index={index}
					setIndex={setIndex}
					length={testimonials.length}
				/>
			</Centered>
		</Container>
	);
};
