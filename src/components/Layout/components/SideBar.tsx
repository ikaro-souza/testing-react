import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { ChevronLeft, PersonPinCircle } from "@mui/icons-material";
import React from "react";
import { LayoutContext } from "../context";

// Especificação do Material Design
const drawerWidth = 256;

export const SideBar: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = React.useContext(LayoutContext);

  const onClose = React.useCallback(() => {
    setIsSideBarOpen(false);
  }, [setIsSideBarOpen]);

  return (
    <Box component="aside">
      <Drawer
        anchor="left"
        variant="persistent"
        open={isSideBarOpen}
        sx={{
          flexShrink: 0,
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        onClose={onClose}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="close side bar"
              edge="end"
              onClick={onClose}
            >
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {["Item 1", "Item 2", "Item 3"].map((i) => (
              <ListItem>
                <ListItemIcon>
                  <PersonPinCircle />
                </ListItemIcon>
                <ListItemText primary={i} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
