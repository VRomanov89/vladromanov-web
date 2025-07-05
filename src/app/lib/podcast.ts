export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: number;
  audioUrl: string;
  websiteUrl: string;
  embedHtml: string;
  coverArt?: string;
  guest: string;
  episodeNumber: number;
}

export async function getLatestPodcastEpisodes(): Promise<PodcastEpisode[]> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/transistor-episodes`;
    console.log('Fetching podcast episodes from:', apiUrl);
    
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    console.log('Podcast API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Podcast API error:', errorText);
      throw new Error(`Failed to fetch episodes: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Podcast episodes received:', data.episodes?.length || 0);
    return data.episodes || [];
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return [];
  }
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
} 