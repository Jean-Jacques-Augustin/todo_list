import React, { useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { CustomTextField } from "../components/forms/forms";
import { CustomButton } from "./../components/forms/forms";
import "../styles/styles.css";
import iconMeduim from "../icons/ICON/nomerikia_icon_small.png";

export default function Login() {
     const [email, setemail] = useState("");
     const [password, setpassword] = useState("");
     const [mailError, setEmailError] = useState(false);
     const [passdError, sePassdError] = useState(false);

     const verify = () => {
          email === "" ? setEmailError(true) : setEmailError(false);
          password === "" ? sePassdError(true) : sePassdError(false);
     };

     return (
          <Box className="centered_parent">
               <Paper
                    variant="outlined"
                    sx={{ width: 400 }}
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
                                   <Avatar alt="Remy Sharp" src={iconMeduim} />
                              </div>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Typography variant="h6">Connexion</Typography>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <CustomTextField
                                   error={mailError}
                                   onChange={(e) => setemail(e.target.value)}
                                   value={email}
                                   type={"email"}
                                   label="Adresse e-mail ou mobile"
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <CustomTextField
                                   error={passdError}
                                   onChange={(e) => setpassword(e.target.value)}
                                   value={password}
                                   type={"password"}
                                   label="Mot de passe"
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <CustomButton
                                   name="Se connecter"
                                   color="primary"
                                   fullWidth={true}
                                   clickAction={verify}
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Button
                                   style={{ textTransform: "none" }}
                                   color="secondary"
                                   fullWidth
                              >
                                   Mot de passe oublié ?
                              </Button>
                         </Grid>
                    </Grid>
               </Paper>
          </Box>
     );
}
