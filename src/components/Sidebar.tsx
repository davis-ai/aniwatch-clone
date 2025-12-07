import Link from 'next/link';
import { animeService } from '@/services/animeService';

const Sidebar = async () => {
    const topAnime = await animeService.getTopAnime(10);

    return (
        <div className="space-y-8">
            {/* Top 10 Section */}
            <div className="bg-[#2a2c31] rounded-lg p-4">
                <h3 className="text-xl font-bold text-pink-500 mb-4">Top 10 Anime</h3>
                <div className="space-y-4">
                    {topAnime.map((anime, index) => (
                        <Link
                            key={anime.mal_id}
                            href={`/anime/${anime.mal_id}`}
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
                                    <span>{anime.score ? `${anime.score} score` : 'N/A'}</span>
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

            {/* Trending Posts Section (Mock) */}
            <div className="bg-[#2a2c31] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#FFDD95]">Trending Posts</h3>
                    <Link href="#" className="text-xs text-gray-400 hover:text-white">View more ›</Link>
                </div>
                <div className="space-y-4">
                    {[
                        { tag: '#General', time: '6 days ago', comments: 7, title: "Here's the best underrated anime that I have watched.", user: 'Randi_baaz', color: 'text-blue-400' },
                        { tag: '#Discussion', time: '6 days ago', comments: 2, title: "LETS talk ABut SomTHInG imrpTent!", user: 'Background character B', color: 'text-purple-400' },
                        { tag: '#Question', time: '6 days ago', comments: 2, title: "So do i have to rank up again or can I transfer", user: 'Shadow_Monarch', color: 'text-green-400' },
                    ].map((post, i) => (
                        <div key={i} className="bg-[#1a1c21] p-3 rounded-lg hover:bg-[#3a3c41] transition-colors cursor-pointer group">
                            <div className="flex items-center gap-2 mb-2 text-xs">
                                <span className={`${post.color} font-bold`}>{post.tag}</span>
                                <span className="text-gray-500">• {post.time}</span>
                                <span className="ml-auto flex items-center gap-1 text-gray-500">
                                    <span className="i-lucide-message-square w-3 h-3" /> {post.comments}
                                </span>
                            </div>
                            <h4 className="text-white text-sm font-medium line-clamp-2 mb-2 group-hover:text-pink-500 transition-colors">
                                {post.title}
                            </h4>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gray-600" />
                                <span className="text-xs text-gray-400">{post.user}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
