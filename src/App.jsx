import usePlaylists from "./hooks/usePlaylists";

import NavBar from "./components/navbar/nav";
import { Box, CircularProgress, Container, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/defaultHome";
import NotFound from "./pages/NotFound";
import Layout from "./pages/layout";
import Player from "./pages/player";

const App = () => {
  const { getPlaylistById, playlists, err, loading } = usePlaylists();
  const playlistArray = Object.values(playlists);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout loading={loading} playlistArray={playlistArray} />,
      children:[
        {
          path:'/',
          element:<Home playlistArray={playlistArray} loading={loading} />
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    },
    {
      path:'/player/:playlistId',
      element:<Player playlists={playlists} />
    }
    
  ]);

  return (
    <>
      <CssBaseline />

      <RouterProvider router={router}>
        <NavBar getPlaylistById={getPlaylistById} />
      </RouterProvider>
    </>
  );
};

export default App;
// playlistId1: PL_XxuZqN0xVAO0uVm0ClJ3wsKHJw6G_TL
// playlistId2: PL_XxuZqN0xVB2m_jJ1QYOFD2D4JZuY6fO
// playlistId3: PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl
