import { NextRequest, NextResponse } from 'next/server';

const TRANSISTOR_API_KEY = process.env.TRANSISTOR_API_KEY;
const TRANSISTOR_SHOW_ID = process.env.TRANSISTOR_SHOW_ID;
const TRANSISTOR_BASE_URL = 'https://api.transistor.fm/v1';

export async function GET(request: NextRequest) {
  if (!TRANSISTOR_API_KEY) {
    return NextResponse.json(
      { error: 'Transistor API key not configured' },
      { status: 500 }
    );
  }

  if (!TRANSISTOR_SHOW_ID) {
    return NextResponse.json(
      { error: 'Transistor Show ID not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch the latest episodes for the show using the environment variable
    const episodesResponse = await fetch(
      `${TRANSISTOR_BASE_URL}/episodes?show_id=${TRANSISTOR_SHOW_ID}&page[number]=1&page[size]=6`,
      {
        headers: {
          'Authorization': `Bearer ${TRANSISTOR_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!episodesResponse.ok) {
      throw new Error(`Failed to fetch episodes: ${episodesResponse.statusText}`);
    }

    const episodesData = await episodesResponse.json();
    
    // Transform the data to match our component needs
    const episodes = episodesData.data.map((episode: any) => ({
      id: episode.id,
      title: episode.attributes.title,
      description: episode.attributes.description || episode.attributes.summary || '',
      publishedAt: episode.attributes.published_at,
      duration: episode.attributes.duration,
      audioUrl: episode.attributes.audio_url,
      websiteUrl: episode.attributes.website_url,
      embedHtml: episode.attributes.embed_html,
      coverArt: episode.attributes.image_url,
      guest: episode.attributes.author || '',
      episodeNumber: episode.attributes.number,
    }));

    return NextResponse.json({ episodes });

  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast episodes' },
      { status: 500 }
    );
  }
} 