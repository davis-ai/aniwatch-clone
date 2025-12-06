import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Anime } from '@/types/anime';

interface TrendingProps {
    trendingAnime: Anime[];
}

const Trending = ({ trendingAnime }: TrendingProps) => {
    return (
        <section className="py-8">
            <h2 className="text-[#FFDD95] text-xl font-bold mb-6">Trending</h2>

            <div className="relative group">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {trendingAnime.map((anime, index) => (
                        <Link
                            key={anime.mal_id}
                            href={`/watch/${anime.mal_id}`}
                            className="relative flex-shrink-0 w-[160px] h-[240px] group/card"
                        >
                            {/* Rank Number */}
                            <div className="absolute -left-4 bottom-0 z-10">
                                <span className="text-6xl font-bold text-transparent stroke-white stroke-2 opacity-50 font-outline-2">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Poster */}
                            <div className="relative w-full h-full rounded-md overflow-hidden">
                                <Image
                                    src={anime.images.webp.large_image_url}
                                    alt={anime.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors" />
                            </div>

                            {/* Vertical Title (Rotated) */}
                            <div className="absolute left-0 bottom-8 origin-bottom-left -rotate-90 translate-x-full w-[200px] pointer-events-none">
                                <span className="text-white font-bold text-sm truncate block shadow-black drop-shadow-md">
                                    {anime.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Buttons (Mocked) */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Trending;
