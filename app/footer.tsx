import Image from 'next/image';

import footerImg from './footer.png';

export default function Footer() {
  return (
    <footer className='flex justify-center overflow-hidden rounded-t-3xl border-t-[12px] border-black'>
      <Image src={footerImg} alt='' className='w-full ' />
    </footer>
  );
}
