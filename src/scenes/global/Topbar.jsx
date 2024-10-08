import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  const handleLogout = () => {
    // Clear tokens from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // Redirect to Login page
    window.location.href = "/";
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
  <Box display="flex">
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
    <IconButton>
      <PersonOutlinedIcon onClick={handleLogout} />
    </IconButton>
  </Box>
</Box>
      
  );
};

export default Topbar;
