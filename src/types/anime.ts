export interface Anime {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            large_image_url: string;
        };
    };
    type: string;
    episodes: number | null;
    status: string;
    score: number | null;
    rank: number | null;
    synopsis: string | null;
    season: string | null;
    year: number | null;
    genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
}

export interface JikanResponse<T> {
    data: T;
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        current_page: number;
        items: {
            count: number;
            total: number;
            per_page: number;
        };
    };
}

export interface Episode {
    mal_id: number;
    title: string;
    episode: string;
    url: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

// For the "Latest Episodes" section, Jikan's /watch/episodes returns a slightly different structure
export interface RecentEpisode {
    entry: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
                large_image_url: string;
            };
            webp: {
                image_url: string;
                small_image_url: string;
                large_image_url: string;
            };
        };
        title: string;
    };
    episodes: {
        mal_id: string;
        url: string;
        title: string;
        premium: boolean;
    }[];
    region_locked: boolean;
}
