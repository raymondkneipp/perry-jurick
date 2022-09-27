import { Button, Centered, Container, Initials } from 'components';

import Image from 'next/future/image';

type Props = {
	primary?: boolean;
};

export const Intro: React.FC<Props> = ({ primary }) => {
	return (
		<Container>
			<div className="grid md:grid-cols-2 gap-16 py-16 items-center justify-center">
				<Image
					src={primary ? '/img/perry/2.jpg' : '/img/perry/1.jpg'}
					width="275"
					height="275"
					alt="Perry Jurick"
					className="mx-auto"
				/>

				<Centered>
					<span className="text-neutral-500 font-body italic text-center">
						{primary ? 'Pure, Emotive Artistry' : 'about the artist'}
					</span>
					<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest text-center">
						{primary ? 'My Philosophy' : 'Meet Perry'}
					</h2>

					<p className="text-neutral-500 font-body text-justify">
						Capturing your relationship in it&apos;s purest form is the most
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

					{primary ? <Initials /> : <Button to="/about">Read More</Button>}
				</Centered>
			</div>
		</Container>
	);
};