import React from "react";
import {
     Grid,
     Dialog,
     DialogContent,
     DialogContentText,
     Slide,
     Typography,
} from "@mui/material";
import { CustomButton, CustomTextField } from "../forms/forms";
import "../../styles/styles.css";

const Transition = React.forwardRef(function Transition(props, ref) {
     return <Slide direction="down" ref={ref} {...props} />;
});

export default function Create(props) {
     return (
          <Dialog
               open={props.open}
               onClose={props.handleClose}
               aria-describedby="dialogue"
          >
               <DialogContent>
                    <DialogContentText id="dialogue">
                         <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}
                         >
                              <Grid item md={12} xs={12}>
                                   <Typography variant="h6">
                                        Nouvelle tache
                                   </Typography>
                              </Grid>
                              <Grid item md={12} xs={12}>
                                   <CustomTextField
                                        type={"text"}
                                        label="Titre de vos tache"
                                   />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                   <CustomTextField
                                        type={"text"}
                                        label="Votre tache"
                                   />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                   <CustomButton
                                        fullWidth
                                        name={"Ajouter"}
                                        color={"secondary"}
                                   />
                              </Grid>
                         </Grid>
                    </DialogContentText>
               </DialogContent>
          </Dialog>
     );
}
