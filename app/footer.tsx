import Image from 'next/image';

import footerImg from './footer.png';

export default function Footer() {
  return (
    <footer className='relative flex justify-center'>
      <Image src={footerImg} alt='' className='absolute inset-0 w-full ' />
    </footer>
  );
}
