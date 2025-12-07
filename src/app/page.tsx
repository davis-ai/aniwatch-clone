import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trending from '@/components/Trending';
import AnimeCard from '@/components/AnimeCard';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import TopAnimeList from '@/components/TopAnimeList';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { animeService } from '@/services/animeService';

export default async function Home() {
  const trendingAnime = await animeService.getTrendingAnime();
  const latestEpisodes = await animeService.getLatestEpisodes();
  const topAiring = await animeService.getTopAnime(5);
  const mostPopular = await animeService.getMostPopular(5);
  const mostFavorite = await animeService.getMostFavorite(5);
  const latestCompleted = await animeService.getLatestCompleted(5);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />

      <main className="pt-14">
        <Hero trendingAnime={trendingAnime} />

        <div className="container mx-auto px-4 py-8">

          {/* Trending Section */}
          <Trending trendingAnime={trendingAnime} />

          {/* Top Lists Grid (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <TopAnimeList title="Top Airing" animeList={topAiring} />
            <TopAnimeList title="Most Popular" animeList={mostPopular} />
            <TopAnimeList title="Most Favorite" animeList={mostFavorite} />
            <TopAnimeList title="Latest Completed" animeList={latestCompleted} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">

            {/* Main Content (Left 3 cols) */}
            <div className="lg:col-span-3 space-y-12">

              {/* Latest Episodes Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#FFDD95]">Latest Episode</h2>
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
                      type="TV"
                    />
                  ))}
                </div>
              </section>

              {/* New On AniWatch Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#FFDD95]">New On AniWatch</h2>
                  <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {/* Reusing trending/popular for "New" as a placeholder since Jikan doesn't have "Just Added" */}
                  {trendingAnime.slice(0, 10).map((anime) => (
                    <AnimeCard
                      key={anime.mal_id}
                      id={anime.mal_id}
                      title={anime.title}
                      image={anime.images.webp.large_image_url}
                      type={anime.type}
                      episode={anime.episodes ? String(anime.episodes) : undefined}
                    />
                  ))}
                </div>
              </section>

              {/* Estimated Schedule (Static Mock) */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#FFDD95]">Estimated Schedule</h2>
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">05:27:15 PM</span>
                </div>
                <div className="bg-[#2a2c31] rounded-lg p-4">
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                      <button key={day} className={`flex flex-col items-center min-w-[80px] p-2 rounded ${i === 0 ? 'bg-[#FFDD95] text-black' : 'bg-[#1a1c21] text-gray-400'}`}>
                        <span className="font-bold">{day}</span>
                        <span className="text-xs">Dec {7 + i}</span>
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { time: '04:30', title: 'You and Idol Precure', ep: 'Episode 43' },
                      { time: '05:00', title: 'SI-VIS: The Sound of Heroes', ep: 'Episode 10' },
                      { time: '06:00', title: 'Digimon Beatbreak', ep: 'Episode 10' },
                      { time: '11:00', title: 'Umamusume: Cinderella Gray Part 2', ep: 'Episode 8' },
                      { time: '16:30', title: "Li'l Miss Vampire Can't Suck Right", ep: 'Episode 9' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 hover:bg-[#3a3c41] rounded transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-400 text-sm">{item.time}</span>
                          <span className="font-medium text-sm">{item.title}</span>
                        </div>
                        <button className="flex items-center gap-1 bg-[#1a1c21] px-3 py-1 rounded text-xs hover:bg-pink-500 hover:text-white transition-colors">
                          <PlayCircle className="w-3 h-3" /> {item.ep}
                        </button>
                      </div>
                    ))}
                  </div>
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
