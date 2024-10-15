import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid2, Stack } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  const {
    playlistId,
    channelId,
    channelTitle,
    playlistTitle,
    playlistDescription,
    thumbnail,
    playlistItems,
  } = playlist;
  return (
    <Grid2 size={4}>
      <Card
        sx={{
          display: "flex",
          alignItems: "stretch",

          height: "100%",
          flexDirection: "column",
          borderRadius: "12px",
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={thumbnail.url}
          title={playlistTitle}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack>
            <Typography gutterBottom variant="h5" component="div">
              {playlistTitle}
            </Typography>
            <Typography gutterBottom variant="body1" component="div" my={1}>
              {channelTitle}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {playlistDescription.slice(0, 100)}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/player/${playlistId}`}>
            <Button size="medium" startIcon={<PlayCircleOutline />}>
              Play
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid2>
  );
};
export default PlaylistCard;
