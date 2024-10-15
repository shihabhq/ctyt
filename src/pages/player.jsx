import { useParams } from "react-router-dom";

const Player = ({playlists}) => {
  const { playlistId } = useParams();
  console.log(playlists[playlistId])
  return <h1>{`Player hit ${playlistId} route`}</h1>;
};

export default Player;
