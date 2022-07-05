import { AppBar, Toolbar, IconButton } from "@mui/material";
import React from "react";
import "../styles/styles.css";
import logoSmall from "../icons/LOGO/nomerikia_logo_small.png";
import { SearchBar } from "./forms/forms";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

export default function NavigationConnected() {
     return (
          <AppBar
               color="inherit"
               position="fixed"
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
               <Toolbar className="navbar_nav_connected">
                    <img src={logoSmall} alt="Logo du site" />
                    <SearchBar />
                    <div>
                         <IconButton
                              color="primary"
                              sx={{
                                   border: "2px solid",
                                   borderRadius: "10px",
                                   margin: 1,
                              }}
                         >
                              <SettingsIcon />
                         </IconButton>
                         <IconButton
                              color="primary"
                              sx={{
                                   border: "2px solid",
                                   borderRadius: "10px",
                                   margin: 1,
                              }}
                         >
                              <PersonIcon />
                         </IconButton>
                    </div>
               </Toolbar>
          </AppBar>
     );
}
