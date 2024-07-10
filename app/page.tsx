import Image from 'next/image';

import wave1Img from './wave-0.svg';

import Background from './background';
import Header from './header';
import Hero from './hero';

export default function Home() {
  return (
    <div>
      {/* Section */}
      <div className='relative overflow-hidden'>
        <Background />
        <div className='relative mx-auto max-w-screen-3xl'>
          <Header />
          <Hero />
        </div>
        {/* <Image
          src={wave1Img}
          alt=''
          className='mt-[-300px] h-[300px] w-full object-cover object-top'
        /> */}
      </div>
    </div>
  );
}
