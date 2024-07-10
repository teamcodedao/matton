import Image from 'next/image';

import wave0Img from './wave-0.svg';
import wave1Img from './wave-1.svg';
import wave2Img from './wave-2.svg';

import Background from './background';
import Header from './header';
import Hero from './hero';
import Tokenomics from './tokenomics';
import HowToBuy from './how-to-buy';
import Footer from './footer';

export default function Home() {
  return (
    <div className='min-w-[1440px]'>
      {/* Section */}
      <div className='relative overflow-hidden'>
        <Background />
        <div className='relative mx-auto max-w-screen-3xl'>
          <Header />
          <Hero />
        </div>
      </div>

      <div className='relative mt-[-200px] 2xl:mt-[-300px]'>
        <Image
          src={wave0Img}
          alt=''
          className='h-[200px] w-full object-cover object-top 2xl:h-[300px]'
        />
        <div className='bg-tertiary'>
          <Tokenomics />
        </div>
      </div>

      <div className='relative bg-secondary'>
        <div className='absolute left-0 top-0 h-[400px] w-full overflow-hidden'>
          <Image
            src={wave1Img}
            alt=''
            className='absolute mt-[-200px] size-full object-cover object-top'
          />
        </div>
        <HowToBuy />
        <div className='h-[150px]'>
          <Image
            src={wave2Img}
            alt=''
            className='w-full object-cover object-top'
          />
        </div>
      </div>

      <div className='relative'>
        <Footer />
      </div>
    </div>
  );
}
