import Link from 'next/link';

export default function LeftButton({ text, href }) {
  return (
    <div className='rounded-md'>
      <Link href={href}>
        <a className='w-full flex items-center justify-center px-8 py-3 border border-background text-background font-medium rounded-tl-lg rounded-r-lg bg-secondary focus:ring-2 focus:ring-secondary md:py-4 md:text-lg md:px-10'>
          {text}
        </a>
      </Link>
    </div>
  );
}
