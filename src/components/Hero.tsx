import Image from 'next/future/image';

export const Hero: React.FC = () => {
	return (
		<section className="absolute z-30 inset-0">
			<Image
				src="/img/hero/3.jpg"
				sizes="100vw"
				alt="image"
				fill
				className="absolute z-20 object-cover"
			/>
			<div className="z-40 absolute inset-0 bg-white bg-opacity-75"></div>
			<div className="ml-64 h-full flex flex-col gap-4 items-center justify-center absolute z-40 inset-0">
				<Image src="/img/logo.svg" width="500" height="50" alt="Perry Jurick" />
				<span className="font-heading text-sm text-neutral-500 uppercase tracking-widest">
					Pure, Emotive Artistry
				</span>
			</div>
		</section>
	);
};
