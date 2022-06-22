import React, { useState } from "react";
import {
     Typography,
     Box,
     Card,
     CardHeader,
     CardActions,
     CardContent,
     Grid,
     IconButton,
     Divider,
     Paper,
     InputBase,
     MenuItem,
     ListItemIcon,
     ListItemText,
} from "@mui/material";
import { Task } from "./testDB";
import "../styles/styles.css";
import Fab from "@mui/material/Fab";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import Create from "./../components/crud/create";
import SearchIcon from "@mui/icons-material/Search";
import MenuAction from "./../components/forms/menu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const ActionButton = [
     { name: "Supprimer", icon: <DeleteOutlineOutlinedIcon /> },
     { name: "Modifier", icon: <DriveFileRenameOutlineOutlinedIcon /> },
];

const SearchBar = () => {
     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "flex-end",
               }}
          >
               <Paper
                    variant="outlined"
                    component="form"
                    sx={{
                         borderRadius: 10,
                         p: "2px 8px",
                         display: "flex",
                         alignItems: "center",
                         width: 300,
                    }}
               >
                    <InputBase
                         sx={{ ml: 1, flex: 1 }}
                         placeholder="Rechercher"
                         inputProps={{ "aria-label": "Rechercher" }}
                    />
                    <IconButton sx={{ p: "10px" }} aria-label="search">
                         <SearchIcon />
                    </IconButton>
               </Paper>
          </div>
     );
};

export default function Tasks() {
     const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };
     const [anchorEl, setAnchorEl] = useState(null);
     const openMenu = (e) => {
          setAnchorEl(e.currentTarget);
     };
     const closeMenu = () => {
          setAnchorEl(null);
     };
     const openMenue = Boolean(anchorEl);

     return (
          <Box className="main_container">
               <div>
                    <br />
                    <Typography variant="h5">Vos taches :</Typography>
                    <br />
                    <SearchBar />
                    <br />
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {Task.map((item, key) => (
                              <Grid key={key} item md={4} sm={6} xs={12}>
                                   <Card
                                        variant="outlined"
                                        className="card_task"
                                   >
                                        <CardHeader
                                             subheader={item.date}
                                             title={item.titre}
                                             action={
                                                  <IconButton aria-label="settings">
                                                       <MoreVertIcon
                                                            onClick={openMenu}
                                                       />
                                                  </IconButton>
                                             }
                                        />
                                        <CardContent>
                                             <Typography paragraph>
                                                  {item.content}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <Divider />
                                             <div className="cardAction_task">
                                                  <IconButton aria-label="Ajouter dans favoris">
                                                       <FavoriteIcon />
                                                  </IconButton>
                                                  <IconButton aria-label="partager">
                                                       <ShareIcon />
                                                  </IconButton>
                                             </div>
                                        </CardActions>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
                    <br />
               </div>
               <MenuAction
                    anchorEl={anchorEl}
                    open={openMenue}
                    closeMenu={closeMenu}
                    content={ActionButton.map((item, key) => (
                         <MenuItem key={key}>
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText>{item.name}</ListItemText>
                         </MenuItem>
                    ))}
               />
               <div
                    style={{
                         display: "flex",
                         justifyContent: "end",
                         position: "relative",
                    }}
               >
                    <Fab
                         style={{
                              position: "fixed",
                              bottom: 20,
                              textTransform: "none",
                         }}
                         variant="extended"
                         size="large"
                         color="primary"
                         aria-label="add"
                         onClick={handleClickOpen}
                    >
                         <AddIcon sx={{ mr: 1 }} />
                         Nouveau
                    </Fab>
               </div>
               <Create open={open} handleClose={handleClose} />
          </Box>
     );
}
