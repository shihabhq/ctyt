import { useState } from "react";
import { getPlaylist } from "../api/api";

const usePlaylists = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });

  


  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    try {
      setLoading(true);
      const playlist = await getPlaylist(playlistId);
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
      setErr("");
    } catch (error) {
      setErr(error?.response?.data?.error?.message || "something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToFav = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, playlistId],
    }));
  };
  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev.recentPlaylists, playlistId],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    favorites: getPlaylistByIds(state.favorites),
    getPlaylistById,
    addToFav,
    addToRecent,
    err,
    loading,
  };
};

export default usePlaylists;
