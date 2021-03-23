import Link from 'next/link';

export default function RightButton({ text, href }) {
  return (
    <div className='mt-3 sm:mt-0 sm:ml-3'>
      <Link href={href}>
        <a className='w-full flex items-center justify-center px-8 py-3 border border-secondary font-medium rounded-l-lg rounded-br-lg text-secondary bg-background hover:ring-2 hover:ring-secondary md:py-4 md:text-lg md:px-10'>
          {text}
        </a>
      </Link>
    </div>
  );
}
