import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-white">
            <h2 className="text-4xl font-bold mb-4">Not Found</h2>
            <p className="mb-4">Could not find requested resource</p>
            <Link href="/" className="text-[#FFDD95] hover:underline">
                Return Home
            </Link>
        </div>
    );
}
