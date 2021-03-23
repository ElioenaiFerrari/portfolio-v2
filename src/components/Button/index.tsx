export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className='px-4 py-1 text-sm text-primary font-semibold rounded-full border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
    >
      {text}
    </button>
  );
}
