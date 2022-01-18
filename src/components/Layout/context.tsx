import React from "react";

interface ILayoutContext {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

export const initialState: ILayoutContext = {
  isSideBarOpen: true,
  setIsSideBarOpen: (x) => {},
};

export const LayoutContext = React.createContext<ILayoutContext>(initialState);

export const LayoutContextProvider: React.FC = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(
    initialState.isSideBarOpen
  );

  return (
    <LayoutContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
