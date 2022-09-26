import { Centered, Container } from 'components';

export const Testimonials: React.FC = () => {
	return (
		<Container bordered>
			<Centered>
				<h2 className="font-heading text-neutral-700 uppercase text-2xl tracking-widest">
					Testimonials
				</h2>

				<div className="max-w-md flex flex-col gap-4 items-center">
					<h3 className="text-4xl font-script text-neutral-500 tracking-wider">
						Perry Jurick
					</h3>
					<p className="text-neutral-500 font-body text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						cupiditate fugit eum quasi nobis, a sapiente voluptas mollitia rerum
						iste, delectus provident recusandae dicta quae aspernatur earum ea
						facere maiores. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Fuga autem ex odit aliquid ipsa fugit non tempora. Accusamus
						quaerat, tempora fugiat itaque repellendus aspernatur voluptate quos
						cupiditate error eum amet?
					</p>
				</div>
			</Centered>
		</Container>
	);
};
