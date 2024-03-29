import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import getLPTheme from "../theme/getLPTheme";


export const MUIWrapperContext = createContext({
  toggleColourMode: () => {},
});

export default function MUIWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>(window.localStorage.getItem("mode") as PaletteMode || "dark");

  const setLocalStorageMode = (value: string) => {
    localStorage.setItem("mode", value);
  }

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColourMode: () => {
        const newMode: PaletteMode = (mode === "light") ? "dark" : "light";
        setLocalStorageMode(newMode)
        setMode(newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme(getLPTheme(mode)),
    [mode]
  );

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MUIWrapperContext.Provider>
  );
}