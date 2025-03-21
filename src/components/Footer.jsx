import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const links = [
    {
        href: 'https://www.discord.com',
        icon: <FaDiscord />,
        name: 'Discord'
    },
    {
        href: 'https://www.x.com',
        icon: <FaXTwitter />,
        name: 'X'
    },
    {
        href: 'https://www.github.com',
        icon: <FaGithub />,
        name: 'Github'
    },
    {
        href: 'https://www.twitch.com',
        icon: <FaTwitch />,
        name: 'Twitch'
    }
];

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>&copy; Nova 2024. All rights reserved</p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer