import React from "react";
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
} from "@mui/material";
import { Task } from "./testDB";
import "../styles/styles.css";
import Fab from "@mui/material/Fab";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import Create from "./../components/crud/create";

export default function Tasks() {
     const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };
     return (
          <Box className="main_container">
               <div>
                    <br />
                    <Typography variant="h5">Vos taches :</Typography>
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
                                                       <MoreVertIcon />
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
