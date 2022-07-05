import {
     Box,
     Drawer,
     List,
     ListItem,
     ListItemButton,
     ListItemIcon,
     ListItemText,
     Toolbar,
} from "@mui/material";
import React from "react";
import { SidebarLink } from "./forms/sidebarLink";
import { Link } from "react-router-dom";
const drawerWidth = 240;

export default function SideBar() {
     return (
          <Drawer
               variant="permanent"
               sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                         width: drawerWidth,
                         boxSizing: "border-box",
                         border: 0,
                    },
               }}
          >
               <br />
               <Toolbar />
               <div sx={{ overflow: "auto" }}>
                    <List>
                         {SidebarLink.map((item, index) => (
                              <ListItem key={index} disablePadding>
                                   <ListItemButton
                                        component={Link}
                                        to={item.path}
                                   >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />
                                   </ListItemButton>
                              </ListItem>
                         ))}
                    </List>
               </div>
          </Drawer>
     );
}
