import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylist =async (playlistId, pageToken, result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&${
    pageToken ? `pageToken=${pageToken}&` : ""
  }maxResults=100&part=snippet,contentDetails&key=${key}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export { getPlaylist };
