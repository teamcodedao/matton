import clsx from 'clsx';

export default function HowToBuy() {
  return (
    <div className='mx-auto flex max-w-[1800px] justify-between gap-x-10 pb-10 pt-14 max-[1800px]:px-5 xl:pt-24 2xl:pt-32'>
      <div
        className={clsx(
          'w-[--w] shrink-0 self-center overflow-hidden rounded-xl border-8 border-black',
          'max-sm:hidden',
          '[--w:200px] lg:[--w:300px] xl:[--w:400px] 2xl:[--w:507px]'
        )}
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='none'
          className=' size-full object-contain'
        >
          <source src='/video-1.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='grow'>
        <h2 className='text-heading text-center text-white'>HOW TO BUY</h2>
        <div
          className={clsx(
            'mt-10',
            '2xl:multi-[flex;flex-wrap;justify-center;gap-10]',
            '2xl:[&>*]:multi-[min-w-[490px];max-w-[min(100%,650px)]]',
            'max-2xl:multi-[flex;flex-col;gap-5]',
            '*:multi-[border-2;border-white;rounded-3xl;bg-[#3A67DC];text-center;px-4;py-5]',
            'text-xl xl:text-2xl 2xl:text-[28px]',
            '[&_p]:multi-[`xl:text-3xl;2xl:text-[32px];text-white;`]'
          )}
        >
          <article>
            <h4>1. WALLET</h4>
            <p>Create a Tonkeeper</p>
          </article>
          <article>
            <h4>2. GET SOME TON</h4>
            <p>Buy as many TON as you need, you can buy directly from a CEX.</p>
          </article>
          <article>
            <h4>3. SWAP TON FOR $MATTON</h4>
            <p>
              Swap your TON for $MATTON. we have zero taxes so you don&apos;t
              need to worry
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
