import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

interface AnimeCardProps {
    id: number;
    title: string;
    image: string;
    episode?: string;
    type?: string;
}

const AnimeCard = ({ id, title, image, episode, type }: AnimeCardProps) => {
    return (
        <Link href={`/anime/${id}`} className="group relative block">
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
                    {episode && (
                        <span className="bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                            {episode.includes('PV') ? 'PV' : `Ep ${episode}`}
                        </span>
                    )}
                    {type && (
                        <span className="bg-black/60 text-white text-xs font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
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
    );
};

export default AnimeCard;
