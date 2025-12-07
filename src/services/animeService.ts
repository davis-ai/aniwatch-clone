import { Anime, JikanResponse, RecentEpisode } from '@/types/anime';

const BASE_URL = 'https://api.jikan.moe/v4';

export const animeService = {
    getTrendingAnime: async (limit = 10): Promise<Anime[]> => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=airing&limit=${limit}`, {
                next: { revalidate: 3600 }, // Cache for 1 hour
            });

            if (!response.ok) {
                throw new Error('Failed to fetch trending anime');
            }

            const data: JikanResponse<Anime[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching trending anime:', error);
            return [];
        }
    },

    getLatestEpisodes: async (): Promise<RecentEpisode[]> => {
        try {
            const response = await fetch(`${BASE_URL}/watch/episodes`, {
                next: { revalidate: 1800 }, // Cache for 30 minutes
            });

            if (!response.ok) {
                throw new Error('Failed to fetch latest episodes');
            }

            const data: JikanResponse<RecentEpisode[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching latest episodes:', error);
            return [];
        }
    },

    getTopAnime: async (limit = 5): Promise<Anime[]> => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=airing&limit=${limit}`, {
                next: { revalidate: 86400 }, // Cache for 24 hours
            });

            if (!response.ok) {
                throw new Error('Failed to fetch top anime');
            }

            const data: JikanResponse<Anime[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching top anime:', error);
            return [];
        }
    },

    getMostPopular: async (limit = 5): Promise<Anime[]> => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=bypopularity&limit=${limit}`, {
                next: { revalidate: 86400 },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch most popular anime');
            }

            const data: JikanResponse<Anime[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching most popular anime:', error);
            return [];
        }
    },

    getMostFavorite: async (limit = 5): Promise<Anime[]> => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=favorite&limit=${limit}`, {
                next: { revalidate: 86400 },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch most favorite anime');
            }

            const data: JikanResponse<Anime[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching most favorite anime:', error);
            return [];
        }
    },

    getLatestCompleted: async (limit = 5): Promise<Anime[]> => {
        try {
            // Jikan doesn't have a direct "latest completed" filter on top/anime easily, 
            // but we can try fetching by status=complete and sort by end_date if possible, 
            // or just use a general popularity filter for completed shows.
            // Using 'bypopularity' with status 'complete' is a reasonable approximation for "Latest Completed" in this context 
            // if we can't sort by end_date descending easily via top/anime.
            // Actually, let's try searching for completed anime sorted by end_date.
            const response = await fetch(`${BASE_URL}/anime?status=complete&order_by=end_date&sort=desc&limit=${limit}`, {
                next: { revalidate: 86400 },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch latest completed anime');
            }

            const data: JikanResponse<Anime[]> = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching latest completed anime:', error);
            return [];
        }
    }
};
