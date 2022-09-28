import { Centered, Container, Quote } from 'components';

import Image from 'next/future/image';

export const Meet: React.FC = () => {
	return (
		<Container>
			<Centered>
				<h2 className="text-4xl font-script text-neutral-500 tracking-wider text-center">
					Meet The Artist
				</h2>
				<h3 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest text-center">
					About Perry
				</h3>
			</Centered>

			<div className="grid md:grid-cols-2 gap-16 py-16">
				<Image
					src="/img/perry/3.jpg"
					width="400"
					height="400"
					alt="Perry Jurick"
					className="mx-auto"
				/>

				<Image
					src="/img/perry/4.jpg"
					width="400"
					height="400"
					alt="Perry Jurick"
					className="mx-auto"
				/>

				<p className="text-neutral-500 font-body text-justify">
					I&apos;ve been a photographer for seven years, but originally I was a
					writer. Art has always been a significant part of my life. I wrote my
					first novel at the age of thirteen (not that it was very good!) and I
					always believed I would be an author someday. I still believe I might.
					Because of this, I feel photography is an extension of my love of
					story telling. Being able to tell someones story through photographs
					and purely capture their emotion, there is something so raw about it.
					At a young age I became obsessed with the ability to connect with
					sentiment living deep inside someone and a deeper meaning in life. I
					feel as though photography has brought me closer to that.
				</p>
				<p className="text-neutral-500 font-body text-justify">
					There is something so beautiful in the movement of the human body. The
					connection we feel to others. It&apos;s wondrous to me how there are
					certain people that we connect with on a profound level. The intimacy
					we only show to that one person, the one soul that the connection is
					so deep and so mutually understood. You&apos;ve found that. You have
					the person who you can call your own, who will always be there with
					you even when they&apos;re not. That is so beautiful. When I was
					young, I asked my mother how she knew that she loved my father and she
					said through tears, &quot;He&apos;s my best friend.&quot; Ever since
					that day I knew exactly what I was searching for.
				</p>
			</div>

			<Quote>
				It&apos;s amazing to think that we have the potential to be so many
				different kinds of people. I want to be all of them.
			</Quote>

			<div className="grid md:grid-cols-2 gap-16 py-16">
				<p className="text-neutral-500 font-body text-justify">
					So what will I capture that others won&apos;t? I want to capture the
					affection that is only showed in private, but in a delicate way. I
					want to create a wonder that is almost mysterious. I want to give a
					peek into something nobody else will understand but the two of you.
					Most importantly, I want you to reminisce on that moment. To be
					transported in time back to the awareness of peace you feel with each
					other. I want to leave you with a drive to feel that serenity, that
					intimacy, with each other every single day while your souls combine.
				</p>
				<p className="text-neutral-500 font-body text-justify">
					These images should act as a profession of the adoration you have for
					each other. I will do everything in my power to help you connect with
					your partner on a deeper level. I don&apos;t want your session to just
					be a photoshoot, I want it to be a reflection of your ceaseless love.
					My main purpose in life is to help people comprehend how immensely
					powerful it is to love and be loved in return. I just love love.
				</p>
			</div>
		</Container>
	);
};
