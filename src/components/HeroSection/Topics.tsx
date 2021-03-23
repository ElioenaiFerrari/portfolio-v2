import Link from 'next/link';

export default function Topics({ topics }) {
  return (
    <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
      {[...topics].map((topic) => (
        <Link key={topic.path} href={topic.path}>
          <a className='text-white hover:font-extrabold hover:text-secondary'>
            {topic.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
