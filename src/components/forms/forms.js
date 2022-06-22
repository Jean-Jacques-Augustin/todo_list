import { Button, TextField } from "@mui/material";
import "../../styles/forms.css";

export const CustomButton = (props) => {
     return (
          <Button
               disableElevation
               size="large"
               color={props.color}
               variant="contained"
               onClick={props.clickAction}
               className={"custom_button"}
               startIcon={props.startIcon}
               fullWidth={props.fullWidth}
          >
               {props.name}
          </Button>
     );
};

export const CustomTextField = (props) => {
     return (
          <TextField
               type={props.type}
               size={"medium"}
               value={props.value}
               label={props.label}
               variant="filled"
               onChange={props.onChange}
               className={"TextField"}
               error={props.error}
               helperText={
                    props.error ? `Le champ ${props.label} est obligatoire` : ``
               }
               fullWidth
          />
     );
};
