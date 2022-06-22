import React, { useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Divider, Fab, Grid, Paper, Typography } from "@mui/material";
import { CustomTextField } from "../components/forms/forms";
import { CustomButton } from "./../components/forms/forms";
import "../styles/styles.css";
import iconMeduim from "../icons/ICON/nomerikia_icon_small.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export default function Inscription() {
     const [name, setName] = useState("");
     const [prenom, setPrenom] = useState("");
     const [email, setemail] = useState("");
     const [password, setpassword] = useState("");
     const [password1, setpassword1] = useState("");
     const [passwordDifferent, stPasswordDifferent] = useState("");

     //Gestion des erreurs
     const [nameError, setNameError] = useState("");
     const [prenomeErr, setPrenomErr] = useState("");
     const [mailError, setEmailError] = useState(false);
     const [passdError, sePassdError] = useState(false);
     const [passd1Error, sePassd1Error] = useState(false);

     const verify = () => {
          name === "" ? setNameError(true) : setNameError(false);
          prenom === "" ? setPrenomErr(true) : setPrenomErr(false);
          email === "" ? setEmailError(true) : setEmailError(false);
          //Raha tsy mitovy ny mot de passe nampidirina
          password === password1
               ? stPasswordDifferent(false)
               : stPasswordDifferent(true);
          password === "" ? sePassdError(true) : sePassdError(false);
          password1 === "" ? sePassd1Error(true) : sePassd1Error(false);
     };

     return (
          <Box className="centered_parent">
               <Paper
                    variant="outlined"
                    sx={{ width: 500 }}
                    className={"box_login"}
               >
                    <Grid
                         container
                         direction="row"
                         justifyContent="center"
                         alignItems="center"
                         spacing={2}
                         padding={2}
                    >
                         <Grid item md={12} xs={12}>
                              <div
                                   style={{
                                        justifyContent: "center",
                                        display: "flex",
                                        margin: 0,
                                        padding: 0,
                                   }}
                              >
                                   <Avatar
                                        alt="Logo de nomerikia"
                                        src={iconMeduim}
                                   />
                              </div>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Typography variant="h6">Inscription</Typography>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Divider />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <Fab
                                   style={{ textTransform: "none" }}
                                   variant="extended"
                                   size="large"
                                   color="primary"
                                   aria-label="add"
                                   fullWidth
                              >
                                   <FacebookIcon sx={{ mr: 1 }} />
                                   Inscription avec facebook
                              </Fab>
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <Fab
                                   style={{ textTransform: "none" }}
                                   variant="extended"
                                   size="large"
                                   color="primary"
                                   aria-label="add"
                                   fullWidth
                              >
                                   <GoogleIcon sx={{ mr: 1 }} />
                                   Inscription avec google
                              </Fab>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Divider />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   error={nameError}
                                   onChange={(e) => setName(e.target.value)}
                                   value={name}
                                   type={"name"}
                                   label="Nom"
                              />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   error={prenomeErr}
                                   onChange={(e) => setPrenom(e.target.value)}
                                   value={prenom}
                                   type={"name"}
                                   label="Prénom"
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <CustomTextField
                                   error={mailError}
                                   onChange={(e) => setemail(e.target.value)}
                                   value={email}
                                   type={"mail"}
                                   label="Adresse email"
                              />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   error={passdError}
                                   onChange={(e) => setpassword(e.target.value)}
                                   value={password}
                                   type={"password"}
                                   label="Mot de passe"
                              />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   error={passd1Error}
                                   onChange={(e) =>
                                        setpassword1(e.target.value)
                                   }
                                   value={password1}
                                   type={"password"}
                                   label="Confirmez votre mot de passe"
                              />
                         </Grid>
                         {passwordDifferent ? null : (
                              <Grid item>
                                   <Typography variant="p">
                                        Le mot de passe est différent
                                   </Typography>
                              </Grid>
                         )}
                         <Grid item md={12} xs={12}>
                              <CustomButton
                                   name="S'inscrire"
                                   color="primary"
                                   fullWidth={true}
                                   clickAction={verify}
                              />
                         </Grid>
                    </Grid>
               </Paper>
          </Box>
     );
}
