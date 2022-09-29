import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type Props = {
	length: number;
	index: number;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ArrowControls: React.FC<Props> = ({ length, index, setIndex }) => {
	const prev = () => {
		if (index === 0) {
			setIndex(length - 1);
		} else {
			setIndex((prev) => prev - 1);
		}
	};

	const next = () => {
		if (index === length - 1) {
			setIndex(0);
		} else {
			setIndex((prev) => prev + 1);
		}
	};

	return (
		<div>
			<button type="button" onClick={prev} className="p-4 text-neutral-500">
				<BsChevronLeft size={20} />
			</button>
			<button type="button" onClick={next} className="p-4 text-neutral-500">
				<BsChevronRight size={20} />
			</button>
		</div>
	);
};
