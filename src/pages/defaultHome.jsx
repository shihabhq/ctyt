import PlaylistCard from "../components/playlistCard/playlist-cardItem";
import { Box, CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
const Home = ({ playlistArray, loading }) => {
  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            zIndex: "99",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}

      {playlistArray.length > 0 && (
        <Container maxWidth="lg" sx={{ my: 16 }}>
          <Grid container spacing={6} alignItems={"stretch"}>
            {playlistArray.map((playlist) => {
              return (
                <PlaylistCard key={playlist.playlistId} playlist={playlist} />
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Home;
