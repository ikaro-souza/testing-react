import React from "react";
import { AppBar, SideBar } from "./components";
import { LayoutContextProvider } from "./context";

export const Layout: React.FC = () => {
  return (
    <LayoutContextProvider>
      <AppBar />
      <SideBar />
    </LayoutContextProvider>
  );
};
