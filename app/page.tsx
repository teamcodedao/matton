import Image from 'next/image';

import wave1Img from './wave-0.svg';

import Background from './background';
import Header from './header';
import Hero from './hero';
import Tokenomics from './tokenomics';

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

      <div className='relative mt-[-300px]'>
        <Image
          src={wave1Img}
          alt=''
          className='h-[300px] w-full object-cover object-top'
        />
        <div className='bg-tertiary'>
          <Tokenomics />
        </div>
      </div>
    </div>
  );
}
