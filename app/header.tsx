import Image from 'next/image';
import clsx from 'clsx';

import logo from './logo.png';
import xImg from './x.png';
import teleImg from './tele.png';
import dexImg from './dex.png';

export default function Header() {
  return (
    <header
      className={clsx(
        'mt-6 sm:mt-12',
        'mx-auto max-w-[1285px] overflow-hidden rounded-full border-[6px] border-black bg-[#F7FFE8] max-[1285px]:mx-5 max-[400px]:mx-2',
        'flex items-center justify-between gap-x-7',
        'px-5'
      )}
    >
      <div
        className={clsx(
          'flex items-center text-[40px]',
          'max-[490px]:multi-[`hidden;[&+div]:grow;[&+div]:justify-between;[&+div]:py-1`]'
        )}
      >
        <Image
          src={logo}
          quality={100}
          priority
          alt=''
          className='max-h-[82px] shrink-0 object-contain'
        />
        <span className='max-[770px]:hidden'>$MATTON</span>
      </div>
      <div className='flex shrink-0 items-center gap-x-5 lg:gap-x-7'>
        <div
          className={clsx(
            'flex items-center gap-x-5 lg:gap-x-7',
            '[&_img]:multi-[`w-[52px];sm:w-[62px];object-contain`]'
          )}
        >
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
            <Image src={xImg} quality={100} priority alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
            <Image src={teleImg} quality={100} priority alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
            <Image src={dexImg} quality={100} priority alt='' />
          </a>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_COIN_URL}
          target='_buy'
          className={clsx(
            'rounded-full border-2 border-black bg-[#FCFAC2] px-5 py-0.5 text-3xl shadow-2xl transition',
            'hover:multi-[bg-secondary;text-white]'
          )}
        >
          Buy
        </a>
      </div>
    </header>
  );
}
