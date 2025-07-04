import 'server-only';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export interface BeehiivPost {
  id: string;
  title: string;
  preview_text: string;
  cover_image_url?: string;
  published_at: string;
  url: string;
}

export async function getRecentBeehiivPosts(limit = 6): Promise<BeehiivPost[]> {
  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    throw new Error('Beehiiv API key or publication ID not set in environment variables');
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/posts?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // ISR: revalidate every 60s
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch Beehiiv posts: ${res.status}`);
  }

  const data = await res.json();
  // Beehiiv returns { data: Post[] }
  return (data.data || []).slice(0, limit).map((post: any) => ({
    id: post.id,
    title: post.title,
    preview_text: post.preview_text,
    cover_image_url: post.cover_image_url,
    published_at: post.published_at,
    url: post.url,
  }));
} 