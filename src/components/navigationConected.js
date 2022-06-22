import {
     AppBar,
     Fab,
     Toolbar,
     Typography,
     Avatar,
     Chip,
     Hidden,
     IconButton,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../styles/styles.css";
import logoSmall from "../icons/LOGO/nomerikia_logo_small.png";
import MenuIcon from "@mui/icons-material/Menu";

const name = "RANDRIANANTENAINA Jean Jacques Augustin";

export default function NavigationConnected() {
     return (
          <AppBar variant="outlined" color="inherit">
               <Container>
                    <Toolbar className="navbar_nav_connected">
                         <img src={logoSmall} alt="Logo du site" />
                         <Hidden smDown>
                              <Chip
                                   size="medium"
                                   avatar={<Avatar>{name[0]}</Avatar>}
                                   label={name}
                              />
                         </Hidden>
                         <Hidden smUp>
                              <IconButton>
                                   <MenuIcon />
                              </IconButton>
                         </Hidden>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
