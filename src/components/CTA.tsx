import { Button } from './Button';

export const CTA: React.FC = () => {
	return (
		<section className="border-y-2 py-8 flex flex-col items-center gap-4 my-8">
			<h2 className="text-center font-heading text-black text-2xl">
				Inquire Today
			</h2>
			<p className="text-center font-body text-neutral-500 max-w-lg">
				Get your event professionaly photographed. I can not wait to work with
				you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<Button to="inquire">Inquire Now</Button>
		</section>
	);
};
