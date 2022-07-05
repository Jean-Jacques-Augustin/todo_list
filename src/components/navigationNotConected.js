import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../styles/styles.css";
import { CustomButton } from "./forms/forms";
import logoSmall from "../icons/LOGO/nomerikia_logo_small.png";

export default function NavigationNotConnected() {
     return (
          <AppBar
               color="inherit"
               position="fixed"
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
               <Container>
                    <Toolbar className="navbar_nav">
                         <img src={logoSmall} alt="Logo du site" />
                         <div>
                              <CustomButton name="Connexion" color="primary" />
                              <CustomButton
                                   name="Inscription"
                                   color="secondary"
                              />
                         </div>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
