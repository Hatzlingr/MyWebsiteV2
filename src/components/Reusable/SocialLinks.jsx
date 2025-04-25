import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Hatzlingr' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/amirul-nur-cahyo-a88485322' },
        { icon: <FaTwitter />, url: 'https://twitter.com/Hatzlingr' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/mirrnc_/' },
    ];
  return (
    <div className="flex justify-center space-x-4 mt-4 mb-4 gap-2 md:gap-4 md:justify-start">
        {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-2xl md:text-4xl hover:text-blue-500 transition-colors duration-300">
                {link.icon}
            </a>
        ))}
    </div>
  )
}

export default SocialLinks