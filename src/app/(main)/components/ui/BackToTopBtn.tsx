import Link from 'next/link';

export default function BackToTopBtn() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-2xl text-2xl bg-white text-black font-bold px-4 py-2 hover:bg-gray-200 transition-colors hover:scale-110 duration-300 shadow-md mb-5 border-b-4 border-orange-300 hover:border-orange-200"
    >
      Volver al inicio
    </Link>
  );
}
