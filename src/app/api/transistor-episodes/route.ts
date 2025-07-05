import { NextRequest, NextResponse } from 'next/server';

const TRANSISTOR_API_KEY = process.env.TRANSISTOR_API_KEY;
const TRANSISTOR_SHOW_ID = process.env.TRANSISTOR_SHOW_ID;
const TRANSISTOR_BASE_URL = 'https://api.transistor.fm/v1';

export async function GET(request: NextRequest) {
  console.log('Transistor API Debug:', {
    hasApiKey: !!TRANSISTOR_API_KEY,
    hasShowId: !!TRANSISTOR_SHOW_ID,
    showId: TRANSISTOR_SHOW_ID
  });

  if (!TRANSISTOR_API_KEY) {
    console.error('Transistor API key not configured');
    return NextResponse.json(
      { error: 'Transistor API key not configured' },
      { status: 500 }
    );
  }

  if (!TRANSISTOR_SHOW_ID) {
    console.error('Transistor Show ID not configured');
    return NextResponse.json(
      { error: 'Transistor Show ID not configured' },
      { status: 500 }
    );
  }

  try {
    const apiUrl = `${TRANSISTOR_BASE_URL}/episodes?show_id=${TRANSISTOR_SHOW_ID}&page[number]=1&page[size]=6`;
    console.log('Fetching episodes from:', apiUrl);

    // Fetch the latest episodes for the show using the environment variable
    const episodesResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${TRANSISTOR_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('API Response status:', episodesResponse.status);

    if (!episodesResponse.ok) {
      const errorText = await episodesResponse.text();
      console.error('API Error response:', errorText);
      throw new Error(`Failed to fetch episodes: ${episodesResponse.status} - ${errorText}`);
    }

    const episodesData = await episodesResponse.json();
    console.log('Episodes data received:', {
      dataLength: episodesData.data?.length || 0,
      hasData: !!episodesData.data
    });
    
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

    console.log('Transformed episodes:', episodes.length);
    return NextResponse.json({ episodes });

  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast episodes', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 