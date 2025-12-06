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
            const response = await fetch(`${BASE_URL}/top/anime?limit=${limit}`, {
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
    }
};
