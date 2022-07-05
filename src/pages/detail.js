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
     MenuItem,
     ListItemIcon,
     ListItemText,
     Avatar,
     Drawer,
     Toolbar,
     List,
     ListItem,
     Paper,
} from "@mui/material";
import "../styles/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuAction from "../components/forms/menu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PostComment } from "../components/forms/forms";

const ActionButton = [
     { name: "Supprimer", icon: <DeleteOutlineOutlinedIcon /> },
     { name: "Modifier", icon: <DriveFileRenameOutlineOutlinedIcon /> },
];

const Task = [
     {
          titre: "Test de titre",
          content: "Conténu du tache Conténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tache",
          date: "21/26/2019",
          favorite: false,
          shared: true,
          sharedUser: "userList",
     },
];

export default function Detail() {
     const [anchorEl, setAnchorEl] = useState(null);
     const openMenu = (e) => {
          setAnchorEl(e.currentTarget);
     };
     const closeMenu = () => {
          setAnchorEl(null);
     };
     const openMenue = Boolean(anchorEl);

     const nombre_personne = 100;

     //Action atao amin'ny j'aime
     const drawerWidth = 300;
     const CommentBar = () => (
          <div>
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
                    anchor={"right"}
               >
                    <br />
                    <Toolbar />
                    <List>
                         <ListItem>
                              <Typography>
                                   <b>Commentaires : </b>
                              </Typography>
                         </ListItem>
                         <Divider />
                    </List>
                    <Paper
                         variant={"outlined"}
                         sx={{ borderRadius: 5, padding: 2, margin: 1 }}
                    >
                         <div>
                              <div
                                   style={{
                                        margin: 1,
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                   }}
                              >
                                   <Avatar sx={{ marginRight: 2 }}>A</Avatar>
                                   {"    "}
                                   <Typography>
                                        <b>Andry Michel</b>
                                   </Typography>
                              </div>
                              <Divider sx={{ margin: 2 }} />
                              <Typography paragraph align="right">
                                   Mety tsara ka bla bla bla bla, Mety tsara ka
                                   bla bla bla bla
                              </Typography>
                         </div>
                    </Paper>
                    <PostComment />
               </Drawer>
          </div>
     );

     return (
          <Box sx={{ display: "flex" }}>
               <div>
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {Task.map((item, key) => (
                              <Grid key={key} item md={12} sm={12} xs={12}>
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
                                             align={"left"}
                                        />
                                        <CardContent>
                                             <Typography align="left" paragraph>
                                                  {item.content}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <div className="cardAction_task">
                                                  <Container
                                                       sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                 "space-between",
                                                            alignContent:
                                                                 "center",
                                                       }}
                                                  >
                                                       <div
                                                            style={{
                                                                 display: "flex",
                                                                 justifyContent:
                                                                      "start",
                                                                 alignItems:
                                                                      "center",
                                                            }}
                                                       >
                                                            <Avatar
                                                                 sx={{
                                                                      marginLeft: 1,
                                                                 }}
                                                            >
                                                                 A
                                                            </Avatar>
                                                            <Avatar
                                                                 sx={{
                                                                      marginLeft: 1,
                                                                 }}
                                                            >
                                                                 B
                                                            </Avatar>
                                                            <Avatar
                                                                 sx={{
                                                                      marginLeft: 1,
                                                                 }}
                                                            >
                                                                 C
                                                            </Avatar>
                                                            {/* Rehefa misy sary dia
                                                            ovaina ny Avatar,
                                                            apetraka hoe:{" "}
                                                            <Avatar src="lien misy ny sary" /> */}
                                                            {nombre_personne >=
                                                            3 ? (
                                                                 <Typography
                                                                      sx={{
                                                                           alignContent:
                                                                                "center",
                                                                           marginLeft: 2,
                                                                      }}
                                                                 >
                                                                      {"      "}
                                                                      Avec{" "}
                                                                      {nombre_personne -
                                                                           3}{" "}
                                                                      autres
                                                                      personnes
                                                                 </Typography>
                                                            ) : (
                                                                 ""
                                                            )}
                                                       </div>
                                                       <div>
                                                            <Typography
                                                                 component={
                                                                      "cite"
                                                                 }
                                                            >
                                                                 4 Tache(s)
                                                            </Typography>
                                                       </div>
                                                  </Container>
                                             </div>
                                        </CardActions>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
                    <br />
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
               </div>
               <CommentBar />
          </Box>
     );
}
