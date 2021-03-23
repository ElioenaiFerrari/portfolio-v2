import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ src }) {
  return (
    <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Link href='/'>
          <a>
            <Image
              className='inline-block h-8 w-8 rounded-full ring-2 ring-background'
              src={src}
              width={30}
              height={30}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
