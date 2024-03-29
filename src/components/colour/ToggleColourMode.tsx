import { PaletteMode, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

type Props = {
  mode: PaletteMode;
  toggleColourMode: () => void;
  sx?: SxProps<Theme>;
}
const ToggleColourMode = (props: Props) => {
  return (
    <Box
      sx={[
        { maxWidth: "32px" },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Button
        variant="text"
        onClick={props.toggleColourMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: "32px", height: "32px", p: "4px" }}
      >
        {props.mode === "dark" ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColourMode;
