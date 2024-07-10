import Image from 'next/image';

import Background from './background';

export default function Home() {
  return (
    <div>
      {/* Section */}
      <div className='relative'>
        <Background />
        <div className='absolute inset-0 mx-auto max-w-screen-3xl'>Content</div>
      </div>
    </div>
  );
}
