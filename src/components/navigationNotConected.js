import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../styles/styles.css";
import { CustomButton } from "./forms/forms";

export default function NavigationNotConnected() {
     return (
          <AppBar variant="outlined" color="inherit">
               <Container>
                    <Toolbar className="navbar_nav">
                         <Typography
                              variant={"h6"}
                              className={"titre"}
                              fontWeight={"bold"}
                         >
                              Numérique
                         </Typography>
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
