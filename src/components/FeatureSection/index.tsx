import Image from 'next/image';

export default function FeatureSection({
  title,
  subtitle,
  description,
  features,
}) {
  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-secondary font-semibold tracking-wide uppercase'>
            {title}
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
            {subtitle}
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto'>
            {description}
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {[...features].map((feature) => (
              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white'>
                    <Image src={feature.image} width={30} height={30} />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-secondary'>
                    {feature.title}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-400'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
