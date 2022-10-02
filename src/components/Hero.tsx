import { AnimatePresence, motion } from 'framer-motion';
import { Centered, SideNav } from 'components';
import { useEffect, useState } from 'react';

import Image from 'next/future/image';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

export const wrap = (min: number, max: number, v: number) => {
	const rangeSize = max - min;
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Hero: React.FC = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => ++prev);
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const imageIndex = wrap(0, images.length, index);

	return (
		<section className="relative min-h-screen z-30 inset-0 flex items-center justify-center overflow-hidden">
			<AnimatePresence initial={false}>
				<motion.div
					className="absolute inset-0"
					initial={{ opacity: 0, scale: 1.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 1 }}
					key={index}
					transition={{
						duration: 5,
						repeat: Infinity,
					}}
				>
					<Image
						src={`/img/hero/${images[imageIndex]}`}
						alt="hero image"
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</motion.div>
			</AnimatePresence>

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
