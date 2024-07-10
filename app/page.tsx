import Image from 'next/image';

import Background from './background';
import Header from './header';

export default function Home() {
  return (
    <div>
      {/* Section */}
      <div className='relative'>
        <Background />
        <div className='absolute inset-0 mx-auto max-w-screen-3xl pt-6 sm:pt-12'>
          <Header />
        </div>
      </div>
    </div>
  );
}
