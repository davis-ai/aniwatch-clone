"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, PlayCircle, Clock, Mic } from 'lucide-react';
import { trendingAnime } from '@/data/mockData';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % trendingAnime.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + trendingAnime.length) % trendingAnime.length);
    };

    const currentAnime = trendingAnime[currentIndex];

    return (
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
                <Image
                    src={currentAnime.image}
                    alt={currentAnime.title}
                    fill
                    className="object-cover opacity-60"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto relative h-full flex items-center px-4">
                <div className="flex flex-col justify-center w-full max-w-3xl pt-16">

                    {/* Spotlight Tag */}
                    <div className="text-[#FFDD95] font-bold mb-4 text-lg">
                        #{currentIndex + 1} Spotlight
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        {currentAnime.title}
                    </h2>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-white mb-6 font-medium">
                        <span className="flex items-center gap-1">
                            <PlayCircle className="w-4 h-4 text-white" />
                            {currentAnime.type}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                            <Clock className="w-4 h-4" />
                            24m
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                            <Calendar className="w-4 h-4" />
                            Oct 4, 2025
                        </span>
                        <span className="bg-[#FFDD95] text-black px-1.5 rounded text-xs font-bold">
                            HD
                        </span>
                        <span className="bg-[#b0e3af] text-black px-1.5 rounded text-xs font-bold flex items-center gap-1">
                            <Mic className="w-3 h-3" /> 9
                        </span>
                        <span className="bg-[#e3b0c4] text-black px-1.5 rounded text-xs font-bold">
                            7
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 line-clamp-3 mb-8 text-base md:text-lg max-w-2xl">
                        "This party doesn't need an incompetent magician who can only use supportive magic. You're fired, Alec Ygret." Suddenly, Alec, a court magician who had joined the crown prince's party to help him conquer dungeons—was banished from the party. And not just the party, but the crown prince's harassment has...
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <Link
                            href={`/watch/${currentAnime.id}`}
                            className="bg-[#FFDD95] hover:bg-[#ffc85e] text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-colors"
                        >
                            <PlayCircle className="w-5 h-5 fill-current" />
                            Watch Now
                        </Link>
                        <button className="bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center gap-2">
                            Detail <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Navigation Buttons (Right Side) */}
                <div className="absolute right-4 bottom-20 flex flex-col gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-[#353535] hover:bg-[#FFDD95] hover:text-black text-white rounded-md transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-[#353535] hover:bg-[#FFDD95] hover:text-black text-white rounded-md transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
