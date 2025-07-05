import Parser from 'rss-parser';

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  audioUrl: string;
  websiteUrl: string;
  thumbnail?: string;
  coverArt?: string;
  duration?: string;
  episodeNumber?: number;
  guest?: string;
  embedHtml?: string;
}

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:duration', 'duration'],
      ['itunes:episode', 'episodeNumber'],
      ['itunes:image', 'thumbnail'],
    ],
  },
});

export async function getLatestPodcastEpisodes(): Promise<PodcastEpisode[]> {
  try {
    console.log('Fetching RSS feed from Manufacturing Hub...');
    
    const feed = await parser.parseURL('https://feeds.transistor.fm/manufacturing-hub');
    
    console.log('RSS feed parsed successfully:', {
      title: feed.title,
      episodeCount: feed.items?.length || 0
    });

    if (!feed.items || feed.items.length === 0) {
      console.log('No episodes found in RSS feed');
      return [];
    }

    // Take the latest 6 episodes
    const latestEpisodes = feed.items.slice(0, 6);

    const episodes: PodcastEpisode[] = latestEpisodes.map((item, index) => {
      // Clean description - remove HTML tags and limit length
      const cleanDescription = item.contentSnippet || item.content || item.summary || '';
      const truncatedDescription = cleanDescription.length > 280 
        ? cleanDescription.substring(0, 280) + '...' 
        : cleanDescription;

      // Extract audio URL from enclosures
      const audioEnclosure = item.enclosure;
      const audioUrl = audioEnclosure?.url || '';

      // Extract thumbnail from iTunes image or other sources
      const thumbnail = (item as any).thumbnail?.href || 
                       item['itunes:image']?.href || 
                       undefined;

      return {
        id: item.guid || item.link || `episode-${index}`,
        title: item.title || 'Untitled Episode',
        description: truncatedDescription,
        publishedAt: item.pubDate || item.isoDate || new Date().toISOString(),
        audioUrl,
        websiteUrl: item.link || '',
        thumbnail,
        coverArt: thumbnail,
        duration: (item as any).duration,
        episodeNumber: (item as any).episodeNumber ? parseInt((item as any).episodeNumber) : undefined,
        guest: undefined,
        embedHtml: audioUrl ? `<audio controls><source src="${audioUrl}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : undefined,
      };
    });

    console.log('Processed episodes:', episodes.length);
    return episodes;

  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDuration(duration: string): string {
  if (!duration) return '';
  
  // Handle various duration formats (HH:MM:SS, MM:SS, or just seconds)
  const parts = duration.split(':');
  
  if (parts.length === 3) {
    // HH:MM:SS format
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    return `${hours}h ${minutes}m`;
  } else if (parts.length === 2) {
    // MM:SS format
    const minutes = parseInt(parts[0]);
    return `${minutes}m`;
  } else {
    // Just seconds
    const totalSeconds = parseInt(duration);
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}m`;
  }
} 