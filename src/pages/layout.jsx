import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/nav";
import { CssBaseline } from "@mui/material";

const Layout = ({ getPlaylistById }) => {
  return (
    <>
      <CssBaseline />
      <NavBar getPlaylistById={getPlaylistById} />
      <Outlet />
    </>
  );
};

export default Layout;
