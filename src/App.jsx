import React, { useEffect } from "react";
import { getPlaylist } from "./api/api";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();
  useEffect(() => {
    getPlaylistById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
  });
  console.log(playlists);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
// playlistId1: PL_XxuZqN0xVAO0uVm0ClJ3wsKHJw6G_TL
// playlistId2: PL_XxuZqN0xVB2m_jJ1QYOFD2D4JZuY6fO
// playlistId3: PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl
