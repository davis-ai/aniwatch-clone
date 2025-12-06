import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#202020] text-gray-400 py-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo & Description */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <span className="text-3xl font-bold text-pink-500">AniWatch</span>
                        </Link>
                        <p className="text-sm max-w-md">
                            AniWatch is a free anime streaming website where you can watch anime online in English Subbed and Dubbed. Join us and watch your favorite anime for free.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-pink-500 transition-colors"><Facebook className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><Github className="w-6 h-6" /></a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} AniWatch. All rights reserved.</p>
                    <p className="mt-2 text-xs text-gray-600">This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
