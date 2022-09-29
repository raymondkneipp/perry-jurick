import { FaHeart } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

const love = [
	'Being tired after a long day in the sun.',
	'Making the most mundane things feel more romantic and intimate.',
	'La langue française.',
	'The feeling of fingertips softly stroking skin.',
	'Old fashioned dresses that make you feel like you should be sitting in the middle of a field reading.',
	'Going on drives to clear your mind.',
	'Animals curled up so they look really small.',
	"When people randomly start dancing when they're happy.",
	'Dancing in general!',
	'When the grass starts to turn green again in springtime.',
	'Meeting someone for the first time and having an instant connection.',
	'When you finish a book and all you can do is hold it to your heart and mourn the loss of the characters you grew so close to.',
	'Love itself.',
	'Objects that are really tiny and cute.',
	'Things that are lived in. I love antiques for this reason.',
	'The sound of a singing bowl.',
	'Nostalgia.',
	'Long deep conversations with your partner or loved one.',
	'Songs that really hit home.',
	'When you laugh so hard your stomach hurts.',
	"That feeling when you're so happy all you can do is cry.",
	'Cows!',
	'Friends who run to you when you need them.',
	'When strangers call you pet names like honey and sweetheart.',
	'The color yellow.',
	"When animals head butt you when they want some lovin'.",
	"Feeling something like it's the first time all over again. ",
];

export const Love: React.FC = () => {
	const row1 = love.slice(0, love.length / 3);
	const row2 = love.slice(love.length / 3, (love.length / 3) * 2);
	const row3 = love.slice((love.length / 3) * 2, love.length);

	return (
		<>
			<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest text-center">
				Little Things I Love
			</h2>

			<Marquee speed={40} pauseOnHover={true}>
				{row1.map((item) => (
					<div
						className="text-neutral-500 flex items-center gap-4 mr-4"
						key={item}
					>
						<span>{item}</span>
						<FaHeart />
					</div>
				))}
			</Marquee>

			<Marquee direction="right" speed={30} pauseOnHover={true}>
				{row2.map((item) => (
					<div
						className="text-neutral-500 flex items-center gap-4 mr-4"
						key={item}
					>
						<span>{item}</span>
						<FaHeart />
					</div>
				))}
			</Marquee>

			<Marquee speed={20} pauseOnHover={true}>
				{row3.map((item) => (
					<div
						className="text-neutral-500 flex items-center gap-4 mr-4"
						key={item}
					>
						<span>{item}</span>
						<FaHeart />
					</div>
				))}
			</Marquee>
		</>
	);
};
