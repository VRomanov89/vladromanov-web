import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCdL1dvzewTAqLyxfIDZz4fw';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
  duration?: string;
  viewCount?: string;
  url: string;
}

export async function GET(request: NextRequest) {
  console.log('YouTube API Debug:', {
    hasApiKey: !!YOUTUBE_API_KEY,
    channelId: CHANNEL_ID
  });

  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key not configured');
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    // First, get the channel's uploads playlist
    const channelUrl = `${BASE_URL}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    console.log('Fetching channel from:', channelUrl);
    
    const channelResponse = await fetch(channelUrl);

    console.log('Channel API Response status:', channelResponse.status);

    if (!channelResponse.ok) {
      const errorText = await channelResponse.text();
      console.error('Channel API Error:', errorText);
      throw new Error(`Failed to fetch channel: ${channelResponse.status} - ${errorText}`);
    }

    const channelData = await channelResponse.json();
    console.log('Channel data received:', {
      itemCount: channelData.items?.length || 0,
      hasItems: !!channelData.items,
      items: channelData.items
    });

    if (!channelData.items || channelData.items.length === 0) {
      console.error('No channel found with ID:', CHANNEL_ID);
      throw new Error('Channel not found');
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    console.log('Uploads playlist ID:', uploadsPlaylistId);

    // Get videos from the uploads playlist
    const videosUrl = `${BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=12&key=${YOUTUBE_API_KEY}`;
    console.log('Fetching videos from:', videosUrl);
    
    const videosResponse = await fetch(videosUrl);

    console.log('Videos API Response status:', videosResponse.status);

    if (!videosResponse.ok) {
      const errorText = await videosResponse.text();
      console.error('Videos API Error:', errorText);
      throw new Error(`Failed to fetch videos: ${videosResponse.status} - ${errorText}`);
    }

    const videosData = await videosResponse.json();
    console.log('Videos data received:', {
      videoCount: videosData.items?.length || 0,
      hasItems: !!videosData.items,
      items: videosData.items?.slice(0, 2) // Log first 2 items for debugging
    });

    // Get additional video details (duration, view count)
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    console.log('Video IDs to fetch details for:', videoIds);
    
    const videoDetailsResponse = await fetch(
      `${BASE_URL}/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    let videoDetails: any = {};
    if (videoDetailsResponse.ok) {
      const detailsData = await videoDetailsResponse.json();
      videoDetails = detailsData.items.reduce((acc: any, item: any) => {
        acc[item.id] = {
          duration: item.contentDetails.duration,
          viewCount: item.statistics.viewCount
        };
        return acc;
      }, {});
      console.log('Video details fetched for:', Object.keys(videoDetails).length, 'videos');
    }

    // Transform the data
    const videos: YouTubeVideo[] = videosData.items.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId;
      const details = videoDetails[videoId] || {};
      
      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.published_at,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        channelTitle: item.snippet.channelTitle,
        duration: details.duration,
        viewCount: details.viewCount,
        url: `https://www.youtube.com/watch?v=${videoId}`
      };
    });

    console.log('Transformed videos:', videos.length);
    return NextResponse.json({ videos });

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch YouTube videos', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 