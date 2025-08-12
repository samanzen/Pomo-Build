import Link from 'next/link';

// Define the types for the props our button will accept
type ButtonProps = {
  href: string; // The URL the button will link to
  children: React.ReactNode; // The text or content inside the button
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href}>
      <button 
        className="
          bg-[#D97706] text-white font-bold text-lg 
          py-3 px-8 rounded-md 
          transition-all duration-300 
          hover:bg-amber-600 hover:shadow-lg hover:-translate-y-1
          focus:outline-none focus:ring-4 focus:ring-amber-500/50
        "
      >
        {children}
      </button>
    </Link>
  );
}