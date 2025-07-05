import { NextRequest, NextResponse } from 'next/server';

const TRANSISTOR_API_KEY = process.env.TRANSISTOR_API_KEY;
const TRANSISTOR_BASE_URL = 'https://api.transistor.fm/v1';

export async function GET(request: NextRequest) {
  if (!TRANSISTOR_API_KEY) {
    return NextResponse.json(
      { error: 'Transistor API key not configured' },
      { status: 500 }
    );
  }

  try {
    // First, get the show ID for Manufacturing Hub
    const showsResponse = await fetch(`${TRANSISTOR_BASE_URL}/shows`, {
      headers: {
        'Authorization': `Bearer ${TRANSISTOR_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!showsResponse.ok) {
      throw new Error(`Failed to fetch shows: ${showsResponse.statusText}`);
    }

    const showsData = await showsResponse.json();
    const manufacturingHubShow = showsData.data.find((show: any) => 
      show.attributes.title.toLowerCase().includes('manufacturing hub')
    );

    if (!manufacturingHubShow) {
      return NextResponse.json(
        { error: 'Manufacturing Hub show not found' },
        { status: 404 }
      );
    }

    const showId = manufacturingHubShow.id;

    // Fetch the latest episodes for the show
    const episodesResponse = await fetch(
      `${TRANSISTOR_BASE_URL}/episodes?show_id=${showId}&page[number]=1&page[size]=6`,
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