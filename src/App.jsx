import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";
import Grid from "@mui/material/Grid2";
import NavBar from "./components/navbar/nav";
import PlaylistCard from "./components/playlistCard/playlist-cardItem";
import { Box, CircularProgress, Container, CssBaseline } from "@mui/material";

const App = () => {
  const { getPlaylistById, playlists, err,loading } = usePlaylists();
  console.log(playlists);
  console.log("error", err);
  const playlistArray = Object.values(playlists);
  return (
    <>
      <CssBaseline />
      <NavBar getPlaylistById={getPlaylistById} />

      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display:'flex',
            zIndex:'99',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}

      {playlistArray.length > 0 && (
        <Container maxWidth="lg" sx={{ my: 16 }}>
          <Grid container spacing={6} alignItems={'stretch'}>
            {playlistArray.map((playlist) => {
              return <PlaylistCard key={playlist.id} playlist={playlist} />;
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default App;
// playlistId1: PL_XxuZqN0xVAO0uVm0ClJ3wsKHJw6G_TL
// playlistId2: PL_XxuZqN0xVB2m_jJ1QYOFD2D4JZuY6fO
// playlistId3: PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl
