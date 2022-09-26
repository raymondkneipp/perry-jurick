import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

import { SocialIcon } from 'components';

export const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col gap-4 items-center justify-center">
			<a
				href="https://raymondkneipp.com"
				target="_blank"
				className="text-center font-heading text-neutral-500 hover:text-neutral-700 text-sm transition"
			>
				Website by Raymond Kneipp
			</a>

			<div className="flex gap-4 items-center">
				<SocialIcon icon={FaFacebookF} size={20} to="https://facebook.com" />
				<SocialIcon icon={FaInstagram} size={25} to="https://instagram.com" />
				<SocialIcon icon={FaPinterestP} size={20} to="https://pinterest.com" />
			</div>
		</footer>
	);
};
