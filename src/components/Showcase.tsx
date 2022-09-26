import { Button, Container } from 'components';

import Image from 'next/future/image';

export const Showcase: React.FC = () => {
	return (
		<Container>
			<div className="flex flex-col gap-16">
				<div className="grid grid-cols-3 gap-16 items-stretch place-items-center">
					<Image src="/img/showcase/1.jpg" alt="1" width={300} height={350} />
					<Image src="/img/showcase/2.jpg" alt="2" width={300} height={350} />
					<Image src="/img/showcase/3.jpg" alt="3" width={300} height={350} />
				</div>
				<div className="flex flex-col items-center gap-4">
					<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
						The Portfolio
					</h2>
					<Button to="/portfolio">Browse Work</Button>
				</div>
			</div>
		</Container>
	);
};
