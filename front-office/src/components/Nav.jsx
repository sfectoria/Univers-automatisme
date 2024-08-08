// link (next js)
import Link from 'next/link';

// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'Accueil' },
  { path: '/propos', name: 'A propos' },
  { path: '/contact', name: 'Contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles ,closeSheet }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={` ${linkStyles}`}
            onClick={closeSheet}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
