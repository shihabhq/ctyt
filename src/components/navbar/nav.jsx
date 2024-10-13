import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, Stack } from "@mui/material";
import PlaylistForm from "../playlistItems/playlistForm";


function NavBar({getPlaylistById}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFormSubmit = (playlistId)=>{
    getPlaylistById(playlistId)
    handleClose()
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" color="success">
          <Container maxWidth="lg" sx={{ my: 2 }}>
            <Toolbar>
              <Stack sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Clean Youtube
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  By Shihab
                </Typography>
              </Stack>
              <Button variant="contained" onClick={handleClickOpen}>Add PlayList</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <PlaylistForm
        open={open}
        handleClose={handleClose}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
