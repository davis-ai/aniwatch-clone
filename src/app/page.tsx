import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trending from '@/components/Trending';
import AnimeCard from '@/components/AnimeCard';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { animeService } from '@/services/animeService';

export default async function Home() {
  const trendingAnime = await animeService.getTrendingAnime();
  const latestEpisodes = await animeService.getLatestEpisodes();

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />

      <main className="pt-14">
        <Hero trendingAnime={trendingAnime} />

        <div className="container mx-auto px-4 py-8">

          {/* Trending Section */}
          <Trending trendingAnime={trendingAnime} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">

            {/* Main Content (Left 3 cols) */}
            <div className="lg:col-span-3 space-y-12">

              {/* Latest Episodes Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#FFDD95]">Latest Episodes</h2>
                  <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {latestEpisodes.map((episode) => (
                    <AnimeCard
                      key={episode.entry.mal_id + episode.episodes[0]?.title}
                      id={episode.entry.mal_id}
                      title={episode.entry.title}
                      image={episode.entry.images.webp.large_image_url}
                      episode={episode.episodes[0]?.title.replace('Episode ', '') || '?'}
                      type="TV" // Jikan watch/episodes doesn't give type directly easily here, defaulting to TV or could fetch details
                    />
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar (Right 1 col) */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
