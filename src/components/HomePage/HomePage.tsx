import React from "react";
import { AppBar, Layout, SideBar } from "components";
import { Box } from "@mui/material";

interface HomePageProps {
  usesLayoutComponent?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ usesLayoutComponent }) => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(true);

  const onOpenSideBarClick = React.useCallback(() => {
    setIsSideBarOpen(true);
  }, []);

  const onSideBarClose = React.useCallback(() => {
    setIsSideBarOpen(false);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {usesLayoutComponent ? (
        <Layout />
      ) : (
        <React.Fragment>
          <AppBar
            isSideBarOpen={isSideBarOpen}
            onOpenSideBarClick={onOpenSideBarClick}
          />
          <SideBar isSideBarOpen={isSideBarOpen} onClose={onSideBarClose} />
        </React.Fragment>
      )}
    </Box>
  );
};
