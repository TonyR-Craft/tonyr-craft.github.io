import * as React from "react";
import { Avatar, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColourMode from "../colour/ToggleColourMode";
import DrawerMenuItem from "../menuItems/DrawerMenuItem";
import AppBarMenuItem from "../menuItems/AppBarMenuItem";
import { const_sections } from "../../constants/sections";
import { MUIWrapperContext } from "../../providers/MUIWrapper";

const AppAppBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const muiUtils = React.useContext(MUIWrapperContext);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(17, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Box sx={{ display: { sm: "", md: "none" } }}>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "60px", p: "4px" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      minWidth: "40dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Avatar
                          alt="profile picture"
                          src="/images/avatar/avatar.jpg"
                        />
                      </Box>
                      <ToggleColourMode
                        mode={theme.palette.mode}
                        toggleColourMode={muiUtils.toggleColourMode}
                      />
                    </Box>
                    {const_sections.map((section) => (
                      <DrawerMenuItem
                        key={section.title}
                        title={section.title}
                        link={section.url}
                      />
                    ))}
                  </Box>
                </Drawer>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
                <Avatar alt="profile picture" src="/images/avatar/avatar.jpg" />
                {const_sections.map((section) => (
                  <AppBarMenuItem
                    key={section.title}
                    title={section.title}
                    link={section.url}
                  />
                ))}
              </Box>
              <ToggleColourMode
                sx={{ display: { xs: "none", md: "flex" } }}
                mode={theme.palette.mode}
                toggleColourMode={muiUtils.toggleColourMode}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppAppBar;
