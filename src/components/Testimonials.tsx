import { Centered, Container } from 'components';

export const Testimonials: React.FC = () => {
	return (
		<Container bordered>
			<Centered>
				<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
					Testimonials
				</h2>

				<div className="max-w-md flex flex-col gap-4 items-center">
					<h3 className="text-4xl font-script text-neutral-500 tracking-wider text-center">
						Drew + Tracy
					</h3>
					<p className="text-neutral-500 font-body text-justify">
						Perry was absolutely amazing to work with. She was responsive,
						understanding, kind, and so flexible to our time constraints,
						changes, and weather issues. She was great with guidance and
						communication. She came early and did her own thing while I was
						getting ready--taking detail shots and working in the background.
						She was amazing at redirecting our family and friends for pictures,
						and she was so good at going with the flow. She was just amazing to
						work with. Her photo style is light, natural, and all things
						beautiful, and we will treasure our pictures forever. I cannot say
						enough great things about this girl. Thanks so much Perry! She will
						not let you down, brides!
					</p>
				</div>
			</Centered>
		</Container>
	);
};
