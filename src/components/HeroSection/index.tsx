import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({
  topics,
  imageSrc,
  logoSrc,
  title,
  description,
}) {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <Link href='/'>
                    <a>
                      <Image
                        className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
                        src={logoSrc}
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                {[...topics].map((topic) => (
                  <Link key={topic.path} href={topic.path}>
                    <a className='font-medium text-gray-500 hover:text-gray-900'>
                      {topic.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-primary.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>{title[0]}</span>
                <span className='block text-primary xl:inline'>{title[1]}</span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                {description}
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md'>
                  <Link href='/get-started'>
                    <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary focus:ring-2 focus:ring-primary md:py-4 md:text-lg md:px-10'>
                      Get started
                    </a>
                  </Link>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <Link href='/live-demo'>
                    <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-secondary bg-white hover:border-secondary md:py-4 md:text-lg md:px-10'>
                      Live demo
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <Image src={imageSrc} alt='' layout='fill' />
      </div>
    </div>
  );
}
