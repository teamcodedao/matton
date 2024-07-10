import clsx from 'clsx';

export default function HowToBuy() {
  return (
    <div className='mx-auto flex max-w-[1500px] gap-x-10 pt-32'>
      <div
        className={clsx(
          'w-[507px] self-center overflow-hidden rounded-xl border-8 border-black',
          'max-[1440px]:hidden'
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
            'flex flex-wrap justify-center gap-10',
            '*:multi-[border-2;border-white;rounded-3xl;bg-[#3A67DC];text-[28px];text-center;px-4;py-5;min-w-[490px];max-w-[min(100%,650px)]]',
            '[&_p]:multi-[text-[32px];text-white]'
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
