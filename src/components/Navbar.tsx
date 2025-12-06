import Link from 'next/link';
import { Search, Menu, MessageCircle, Twitter, Send } from 'lucide-react';
import { FaDiscord, FaRedditAlien, FaTelegramPlane } from 'react-icons/fa'; // Need to install react-icons or use lucide alternatives

const Navbar = () => {
    return (
        <nav className="bg-[#202020] text-white px-4 py-2 fixed w-full top-0 z-50 shadow-md">
            <div className="flex items-center justify-between h-14">
                {/* Left: Hamburger & Logo */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-white/10 rounded-full">
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            {/* Logo Placeholder */}
                            <span className="text-black font-bold">A</span>
                        </div>
                        <span className="text-xl font-bold text-white">ani<span className="text-[#FFDD95]">watch</span></span>
                    </Link>
                </div>

                {/* Center: Search Bar */}
                <div className="hidden md:flex flex-1 max-w-xl mx-8">
                    <div className="relative w-full flex bg-white rounded-sm overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search anime..."
                            className="w-full text-black px-4 py-2 focus:outline-none text-sm"
                        />
                        <button className="px-3 bg-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-300 transition-colors">
                            Filter
                        </button>
                        <button className="px-4 text-gray-500 hover:text-black transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Right: Socials & Actions */}
                <div className="flex items-center gap-6 text-sm">
                    {/* Social Icons (Mocked with Lucide/Text for now if icons missing) */}
                    <div className="hidden lg:flex items-center gap-3 text-gray-400">
                        <span className="text-white font-bold mr-2">Join now</span>
                        <button className="hover:text-[#5865F2]"><FaDiscord className="w-5 h-5" /></button>
                        <button className="hover:text-[#0088cc]"><FaTelegramPlane className="w-5 h-5" /></button>
                        <button className="hover:text-[#FF4500]"><FaRedditAlien className="w-5 h-5" /></button>
                        <button className="hover:text-[#1DA1F2]"><Twitter className="w-5 h-5" /></button>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden xl:flex items-center gap-4 text-gray-300 font-medium">
                        <Link href="#" className="hover:text-[#FFDD95]">Watch2gether</Link>
                        <Link href="#" className="hover:text-[#FFDD95]">Random</Link>
                        <Link href="#" className="hover:text-[#FFDD95]">Anime Name</Link>
                        <Link href="#" className="hover:text-[#FFDD95]">Community</Link>
                    </div>

                    {/* Login Button */}
                    <button className="bg-[#FFDD95] hover:bg-[#ffc85e] text-black font-bold px-6 py-2 rounded-md transition-colors">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
