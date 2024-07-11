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
          'text-heading mx-auto max-w-[min(968px,80%)] rounded-[27px] rounded-b-none border-[5px] border-b-0 border-black text-center',
          'bg-secondary px-5 py-4'
        )}
      >
        TOKENOMICS
      </h2>
      <div
        className={clsx(
          'relative mx-auto max-w-[1677px] overflow-hidden max-[1677px]:multi-[mx-5]',
          'border-black bg-secondary p-5 lg:px-10 xl:px-20',
          'rounded-[30px] border-[10px] xl:multi-[rounded-[40px];border-[15px]] 2xl:multi-[rounded-[52px];border-[20px]]',
          'grid grid-cols-2 gap-x-20',
          'max-[620px]:multi-[flex;flex-col]',
          '[&>div]:multi-[row-span-2;grid;grid-rows-subgrid;relative;z-10]',
          '[&>div_img]:multi-[w-[80%];object-contain;object-bottom;-mb-5;justify-self-center;self-baseline]',
          '[&_article]:multi-[bg-[#2E52B0];text-white;text-center;px-5;py-5;rounded-3xl;border-4;border-white]',
          'text-xl sm:text-2xl lg:text-3xl 2xl:text-[38px]'
        )}
      >
        <div>
          <Image src={matt3Img} alt='' />
          <article>
            <p>Supply</p>
            <p>420.690.000.000</p>
          </article>
        </div>
        <div>
          <Image src={matt2Img} alt='' />
          <article>
            <p>Tax</p>
            <p>No tax on buy/sell of the token.</p>
          </article>
        </div>
        <img
          src='/ton.png'
          alt=''
          className='absolute left-1/2 top-1/3 w-[120px] -translate-x-1/2 -translate-y-1/2 object-contain lg:w-[150px] xl:w-[200px]'
        />
        <img
          src='/plane.svg'
          alt=''
          className='absolute -left-7 -top-5 max-md:multi-[`hidden;[&+*]:hidden`]'
        />
        <section className='absolute -right-7 -top-3 -scale-x-100'>
          <img src='/plane.svg' alt='' className='origin-top-left scale-90' />
        </section>
      </div>
    </div>
  );
}
