import Image from 'next/image';

import matt0Img from './matt-0.png';
import matt2Img from './matt-2.png';
import matt3Img from './matt-3.png';
import clsx from 'clsx';

export default function Tokenomics() {
  return (
    <div className='-mt-4 -translate-y-14'>
      <div className='flex justify-center'>
        <Image src={matt0Img} alt='' className='h-[118px] object-contain' />
      </div>
      <h2
        className={clsx(
          'text-heading mx-auto w-[968px] rounded-[27px] rounded-b-none border-[5px] border-b-0 border-black text-center',
          'bg-secondary px-5 py-2',
          'text-[64px]'
        )}
      >
        TOKENOMICS
      </h2>
      <div
        className={clsx(
          'mx-auto flex max-w-[1677px] items-center justify-center bg-secondary',
          'gap-x-10 p-5',
          'rounded-[52px] border-[20px] border-black',
          '[&_article]:multi-[bg-[#2E52B0];text-white;text-center;rounded-xl;border-4;border-white;text-[38px];whitespace-nowrap;px-5;py-2]'
        )}
      >
        <div className='max-w-[411px]'>
          <Image src={matt3Img} alt='' />
          <article className='relative -mt-4'>
            <p>Supply</p>
            <p>420.690.000.000</p>
          </article>
        </div>
        <div className='shrink-0'>
          <img
            src='/ton.png'
            alt=''
            className='object-contain xl:w-[200px] 2xl:w-[250px]'
          />
        </div>
        <div className='flex flex-col items-center'>
          <Image src={matt2Img} alt='' className='max-w-[411px]' />
          <article>
            <p>Tax</p>
            <p>No tax on buy/sell of the token.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
