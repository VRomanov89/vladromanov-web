import PodcastGrid, { Episode } from "./PodcastGrid";

interface PlaylistItem {
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      maxres?: { url: string };
      standard?: { url: string };
      high?: { url: string };
      medium?: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
}

async function fetchLatestEpisodes(): Promise<Episode[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) return [];

  // The uploads playlist ID is the channel ID with "UC" replaced by "UU".
  // This approach costs 1 quota unit per call vs 100 for search.list.
  const playlistId = channelId.replace(/^UC/, "UU");

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=6&key=${apiKey}`,
      { next: { revalidate: 21600 } } // Cache for 6 hours
    );

    if (!res.ok) return [];

    const data = await res.json();
    const items: PlaylistItem[] = data.items ?? [];

    return items.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      thumbnail:
        item.snippet.thumbnails.maxres?.url ??
        item.snippet.thumbnails.standard?.url ??
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        `https://i.ytimg.com/vi/${item.snippet.resourceId.videoId}/hqdefault.jpg`,
    }));
  } catch {
    return [];
  }
}

export default async function PodcastEpisodes() {
  const episodes = await fetchLatestEpisodes();

  // Silently renders nothing if API is not configured or fetch fails
  if (episodes.length === 0) return null;

  return (
    <div className="mt-16 pt-14 border-t border-[var(--color-border)]">
      {/* Sub-section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h3 className="font-display text-[2rem] lg:text-[2.4rem] font-light leading-tight tracking-[-0.01em] text-[var(--color-ink)]">
            Latest{" "}
            <em className="font-medium italic text-[var(--color-navy)]">
              Episodes
            </em>
          </h3>
          <p className="text-[0.83rem] text-[var(--color-ink-4)] mt-2 leading-[1.6]">
            Recent conversations from Manufacturing Hub. Click any episode to watch.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@manufacturinghubpodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.07em] uppercase text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors duration-200"
        >
          View All
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 13L13 1M13 1H5M13 1v8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <PodcastGrid episodes={episodes} />
    </div>
  );
}
