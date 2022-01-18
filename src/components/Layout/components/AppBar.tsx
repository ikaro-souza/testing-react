import React from "react";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { LayoutContext } from "../context";

export const AppBar: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = React.useContext(LayoutContext);

  const onOpenSideBarClick = React.useCallback(() => {
    setIsSideBarOpen(true);
  }, [setIsSideBarOpen]);

  return (
    <MuiAppBar
      component="header"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open side bar"
          edge="start"
          sx={{
            mr: 2,
            ...(isSideBarOpen && {
              display: "none",
            }),
          }}
          onClick={onOpenSideBarClick}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Clipped drawer
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
