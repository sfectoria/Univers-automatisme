import Link from 'next/link';
import Image from 'next/image';
import logoUni from '../images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logoUni} width={54} height={54} priority alt='' />
    </Link>
  );
};

export default Logo;
