import clsx from 'clsx';
import Image from 'next/image';

import matt1Img from './matt-1.png';

export default function Hero() {
  return (
    <div className=' '>
      <div
        className={clsx(
          'mt-5 flex w-full flex-col items-center lg:mt-10 2xl:mt-20',
          'pl-40 max-[800px]:!pl-0 sm:pl-52 lg:pl-60 2xl:pl-72'
        )}
      >
        <img
          src='/ton.png'
          alt=''
          className='h-[80px] sm:h-[100px] lg:h-auto'
        />
        <h1
          className={clsx(
            'text-center text-white [-webkit-text-stroke:3px_var(--primary-color)] lg:-mt-5',
            'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px]'
          )}
        >
          Matt Furie OnTon
        </h1>
      </div>
      <div className='flex items-center justify-between gap-x-6 lg:gap-x-12 xl:gap-x-20 2xl:gap-x-32'>
        <div className='flex flex-[1_1_0] justify-end self-stretch max-[800px]:multi-[`hidden;[&+div]:grow`]'>
          <Image
            src={matt1Img}
            priority
            alt=''
            className='object-contain object-bottom'
          />
        </div>
        <div
          className={clsx(
            'mt-10 flex-[0_0_var(--basic-size)] lg:mt-20',
            '2xl:[--basic-size:715px]',
            'xl:[--basic-size:615px]',
            'lg:[--basic-size:515px]',
            'sm:[--basic-size:415px]',
            '[--basic-size:315px]'
          )}
        >
          <article
            className={clsx(
              'text-shadow text-pretty leading-10 text-white',
              'text-2xl lg:text-3xl xl:text-4xl',
              'px-5 pb-5'
            )}
          >
            Derived from Matt Furie (born August 14, 1979), the creator of the
            Boy&apos;s Club comic series.{' '}
            <span className='text-shadow text-primary'>Matt Furie on Ton</span>{' '}
            aims to honor Furie&apos;s legacy by combining creativity and
            community spirit. Join us on this adventure as we celebrate the
            artistic brilliance of Matt Furie.
          </article>
        </div>
      </div>
    </div>
  );
}
