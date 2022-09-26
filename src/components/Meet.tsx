import { Button } from 'components';
import Image from 'next/future/image';

export const Meet: React.FC = () => {
	return (
		<section>
			<div className="grid grid-cols-2 gap-16 items-center justify-center px-16">
				<Image
					src="/img/perry/1.jpg"
					width="275"
					height="275"
					alt="Perry Jurick"
					className="mx-auto"
				/>

				<div className="flex flex-col items-center gap-8">
					<span className="text-neutral-500 font-body italic">
						about the atist
					</span>
					<h2 className="font-heading text-black uppercase text-2xl tracking-widest">
						Meet Perry
					</h2>

					<p className="text-neutral-500 font-body text-justify">
						Capturing your relationship in it's purest form is the most
						important part of my job, and this is something I always carry with
						me while shooting.
					</p>
					<p className="text-neutral-500 font-body text-justify">
						My goal as a photographer is to bring out the beauty and intimacy
						that nobody sees.
					</p>
					<p className="text-neutral-500 font-body text-justify">
						This is your time to remember the day that you and your best friend
						are united for the rest of your life, and I want to be there to
						capture it for you.
					</p>

					<Button to="/about">Read More</Button>
				</div>
			</div>
		</section>
	);
};
