import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../styles/styles.css";

export default function NavigationConnected() {
     return (
          <AppBar variant="outlined" color="inherit">
               <Container>
                    <Toolbar className="navbar_nav_connected">
                         <Typography
                              variant={"h6"}
                              className={"titre"}
                              fontWeight={"bold"}
                         >
                              Numérique
                         </Typography>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
