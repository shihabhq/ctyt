import  { useState } from "react";
import { getPlaylist } from "../api/api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });
  const getPlaylistById = async (playlistId,force=false) => {
    if(state.playlists[playlistId] &&!force){
        return;
    }
    
    let result = await getPlaylist(playlistId);
    let cid,ct;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;
      
      if(!cid && !ct){
        cid = channelId;
        ct = channelTitle
      }
      return {

        title,
        description,
        thumbnail: medium,

        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
            items:result,
            channelTitle:ct,
            channelId:cid,
            playlistId:playlistId
        },
      },
    }));
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
  };
};

export default usePlaylists;
