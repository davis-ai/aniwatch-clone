import Link from 'next/link';
import { topAnime } from '@/data/mockData';

const Sidebar = () => {
    return (
        <div className="space-y-8">
            {/* Top 10 Section */}
            <div className="bg-[#2a2c31] rounded-lg p-4">
                <h3 className="text-xl font-bold text-pink-500 mb-4">Top 10 Anime</h3>
                <div className="space-y-4">
                    {topAnime.map((anime, index) => (
                        <Link
                            key={anime.id}
                            href={`/anime/${anime.id}`}
                            className="flex items-center gap-4 group"
                        >
                            <span className={`
                text-lg font-bold w-6 text-center
                ${index < 3 ? 'text-pink-500' : 'text-gray-500'}
              `}>
                                {index + 1}
                            </span>
                            <div className="flex-1">
                                <h4 className="text-white text-sm font-medium line-clamp-1 group-hover:text-pink-500 transition-colors">
                                    {anime.title}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span>{anime.views} views</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Genres Section */}
            <div className="bg-[#2a2c31] rounded-lg p-4">
                <h3 className="text-xl font-bold text-pink-500 mb-4">Genres</h3>
                <div className="grid grid-cols-2 gap-2">
                    {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Magic', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life'].map((genre) => (
                        <Link
                            key={genre}
                            href={`/genre/${genre.toLowerCase()}`}
                            className="text-gray-300 hover:text-pink-500 text-sm py-1 transition-colors"
                        >
                            {genre}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
