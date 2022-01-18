import React from "react";
import { CssBaseline } from "@mui/material";
import { HomePage } from "components";

// OBS: Se o layout da página for reutilizado em outras páginas
// é melhor criar um componente para o layout e nesse componente
// em vez de usar o useState pra controlar o estado do drawer
// é melhor usar o context do react.

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HomePage usesLayoutComponent />
    </React.Fragment>
  );
};
