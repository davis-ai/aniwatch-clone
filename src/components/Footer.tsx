import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#202020] text-gray-400 py-8 mt-12 relative">
            {/* A-Z List Section */}
            <div className="container mx-auto px-4 mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-white font-bold text-lg">A-Z LIST</span>
                    <span className="text-sm text-gray-500">Searching anime order by alphabet name A to Z.</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-[#333] hover:bg-[#FFDD95] hover:text-black text-white text-sm rounded transition-colors">All</button>
                    <button className="px-3 py-1 bg-[#333] hover:bg-[#FFDD95] hover:text-black text-white text-sm rounded transition-colors">#</button>
                    <button className="px-3 py-1 bg-[#333] hover:bg-[#FFDD95] hover:text-black text-white text-sm rounded transition-colors">0-9</button>
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((char) => (
                        <button key={char} className="px-3 py-1 bg-[#333] hover:bg-[#FFDD95] hover:text-black text-white text-sm rounded transition-colors">
                            {char}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 border-t border-gray-800 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo & Links */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-black font-bold">A</span>
                            </div>
                            <span className="text-xl font-bold text-white">ani<span className="text-[#FFDD95]">watch</span></span>
                        </Link>

                        <div className="flex gap-6 text-sm font-medium text-gray-300">
                            <Link href="#" className="hover:text-[#FFDD95]">Terms of service</Link>
                            <Link href="#" className="hover:text-[#FFDD95]">DMCA</Link>
                            <Link href="#" className="hover:text-[#FFDD95]">Contact</Link>
                            <Link href="#" className="hover:text-[#FFDD95]">Aniwatch App</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-[#333] px-3 py-1.5 rounded-full">
                            <span className="text-xs text-gray-400">Join now</span>
                            <a href="#" className="hover:text-[#5865F2]"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-[#0088cc]"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-[#FF4500]"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-[#1DA1F2]"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-xs text-gray-600">
                    <p>AniWatch does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
                    <p className="mt-1">&copy; AniWatch.to. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
