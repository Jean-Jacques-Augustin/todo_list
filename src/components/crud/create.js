import React from "react";
import {
     Button,
     Grid,
     Typography,
     TextareaAutosize,
     Dialog,
     DialogActions,
     DialogTitle,
     DialogContent,
     DialogContentText,
     Slide,
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
               TransitionComponent={Transition}
               keepMounted
               onClose={props.handleClose}
               aria-describedby="dialogue"
          >
               <DialogTitle>{"Ajouter une nouvelle tache"}</DialogTitle>
               <br />
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
                         </Grid>
                    </DialogContentText>
               </DialogContent>
               <DialogActions>
                    <div className="cardAction_task">
                         <CustomButton
                              fullWidth
                              name={"Ajouter"}
                              color={"secondary"}
                         />
                    </div>
               </DialogActions>
          </Dialog>
     );
}
