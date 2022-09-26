import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

import { SocialIcon } from 'components';

export const Socials: React.FC = () => {
	return (
		<div className="flex gap-4 items-center">
			<SocialIcon icon={FaFacebookF} size={20} to="https://facebook.com" />
			<SocialIcon icon={FaInstagram} size={25} to="https://instagram.com" />
			<SocialIcon icon={FaPinterestP} size={20} to="https://pinterest.com" />
		</div>
	);
};
