import { Centered, SideNav } from 'components';

import Image from 'next/future/image';

export const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen z-30 inset-0 flex items-center justify-center">
			<Image
				src="/img/hero/1.jpg"
				sizes="100vw"
				alt="image"
				fill
				className="absolute z-20 object-cover"
			/>

			{/* Overlay */}
			<div className="z-40 absolute inset-0 bg-white bg-opacity-75 backdrop-blur-sm"></div>

			<SideNav />

			<div className="z-40 md:ml-64 p-8 sm:p-16">
				<Centered>
					<Image
						src="/img/logo.svg"
						width="500"
						height="50"
						alt="Perry Jurick"
					/>
					<span className="font-heading text-sm text-neutral-500 uppercase tracking-widest">
						Pure, Emotive Artistry
					</span>
				</Centered>
			</div>
		</section>
	);
};
