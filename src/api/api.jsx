import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken, result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&${
    pageToken ? `pageToken=${pageToken}&` : ""
  }maxResults=100&part=snippet,contentDetails&key=${key}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?id=${playlistId}&maxResults=100&part=snippet,contentDetails&key=${key}`;

  const { data } = await axios.get(URL);
  const result = await getPlaylistItem(playlistId);

  const {
    channelId,
    channelTitle,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails: { default: thumbnail },
  } = data?.items[0]?.snippet;

  const playlistItems = result.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });
  return {
    playlistId,
    channelId,
    channelTitle,
    playlistTitle,
    playlistDescription,
    thumbnail,
    playlistItems,
  };
};

export { getPlaylistItem,getPlaylist };
