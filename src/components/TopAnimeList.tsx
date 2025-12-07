import Link from 'next/link';
import Image from 'next/image';
import { Anime } from '@/types/anime';

interface TopAnimeListProps {
    title: string;
    animeList: Anime[];
}

const TopAnimeList = ({ title, animeList }: TopAnimeListProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-[#FFDD95] text-xl font-bold">{title}</h3>
            <div className="flex flex-col gap-4">
                {animeList.map((anime, index) => (
                    <Link
                        key={anime.mal_id}
                        href={`/anime/${anime.mal_id}`}
                        className="flex gap-4 group bg-[#2a2c31] p-3 rounded-lg hover:bg-[#3a3c41] transition-colors"
                    >
                        <div className="relative w-[50px] h-[70px] flex-shrink-0 rounded overflow-hidden">
                            <Image
                                src={anime.images.webp.large_image_url}
                                alt={anime.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center flex-1 min-w-0">
                            <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-pink-500 transition-colors mb-2">
                                {anime.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="flex items-center gap-1 text-gray-400 border border-gray-600 px-1 rounded">
                                    <span className="text-[10px] uppercase">{anime.type || 'TV'}</span>
                                </span>
                                <span className="text-gray-400">
                                    {anime.episodes ? `• ${anime.episodes}` : ''}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href="#" className="text-gray-400 text-sm hover:text-white flex items-center gap-1 mt-2">
                View more <span className="text-xs">›</span>
            </Link>
        </div>
    );
};

export default TopAnimeList;
