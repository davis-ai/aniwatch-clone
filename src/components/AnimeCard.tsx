import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Star, Plus, Play } from 'lucide-react';
import { Anime } from '@/types/anime';

interface AnimeCardProps {
    id: number;
    title: string;
    image: string;
    episode?: string;
    type?: string;
    anime?: Anime; // Optional full anime object for details
}

const AnimeCard = ({ id, title, image, episode, type, anime }: AnimeCardProps) => {
    return (
        <div className="group relative">
            <Link href={`/anime/${id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex gap-1">
                        <span className="bg-[#b0e3af] text-black text-[10px] font-bold px-1 rounded flex items-center h-4">
                            CC
                        </span>
                        <span className="bg-[#b9e7ff] text-black text-[10px] font-bold px-1 rounded flex items-center h-4">
                            <span className="i-lucide-mic w-2 h-2 mr-0.5" /> 10
                        </span>
                        {episode && (
                            <span className="bg-white/90 text-black text-[10px] font-bold px-1 rounded flex items-center h-4">
                                {episode.includes('PV') ? 'PV' : `${episode}`}
                            </span>
                        )}
                    </div>
                    <div className="absolute bottom-2 right-2">
                        {type && (
                            <span className="bg-black/60 text-white text-[10px] font-medium px-1 py-0.5 rounded backdrop-blur-sm">
                                {type}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-2">
                    <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-pink-500 transition-colors">
                        {title}
                    </h3>
                </div>
            </Link>

            {/* Hover Pop-up */}
            <div className="absolute top-0 left-0 z-50 w-[300px] bg-[#2a2c31] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto transform scale-95 group-hover:scale-100 origin-top-left p-4">
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-bold text-lg line-clamp-2">{title}</h4>

                    <div className="flex items-center gap-2 text-xs">
                        <span className="flex items-center text-[#FFDD95] gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            {anime?.score || 'N/A'}
                        </span>
                        <span className="bg-[#FFDD95] text-black px-1 rounded font-bold">HD</span>
                        <span className="bg-[#b0e3af] text-black px-1 rounded font-bold">CC</span>
                        <span className="text-gray-400">{type || 'TV'}</span>
                    </div>

                    <p className="text-gray-400 text-xs line-clamp-3">
                        {anime?.synopsis || 'No description available.'}
                    </p>

                    <div className="flex flex-col gap-1 text-xs text-gray-400 border-t border-gray-700 pt-2">
                        <p><span className="text-white">Japanese:</span> {anime?.title_japanese || '-'}</p>
                        <p><span className="text-white">Aired:</span> {anime?.year ? `${anime.year}` : '-'}</p>
                        <p><span className="text-white">Status:</span> {anime?.status || 'Unknown'}</p>
                        <p><span className="text-white">Genres:</span> <span className="text-[#FFDD95]">{anime?.genres?.map(g => g.name).join(', ') || '-'}</span></p>
                    </div>

                    <div className="flex gap-2 mt-1">
                        <Link href={`/anime/${id}`} className="flex-1 bg-[#FFDD95] hover:bg-[#ffc85e] text-black text-sm font-bold py-1.5 rounded-full flex items-center justify-center gap-2 transition-colors">
                            <Play className="w-4 h-4 fill-current" /> Watch now
                        </Link>
                        <button className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors">
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;
