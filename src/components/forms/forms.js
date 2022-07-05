import {
     Button,
     IconButton,
     InputBase,
     Paper,
     TextField,
     Fab,
} from "@mui/material";
import "../../styles/forms.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

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

export const SearchBar = () => {
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
                         borderRadius: 2,
                         p: "2px 5px",
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

export const menuFloat = (props) => {
     <div
          style={{
               display: "flex",
               alignContent: "center",
               justifyContent: "end",
               position: "relative",
          }}
     >
          <div
               style={{
                    position: "fixed",
                    bottom: 20,
                    textTransform: "none",
               }}
          >
               <Fab
                    style={{
                         marginRight: 10,
                    }}
                    size="medium"
                    color="secondary"
                    aria-label="menu"
               >
                    {props.dialOpen ? <CloseIcon /> : <MenuIcon />}
               </Fab>
               <Fab
                    style={{
                         textTransform: "none",
                    }}
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="add"
                    onClick={props.handleClickOpen}
               >
                    <AddIcon sx={{ mr: 1 }} />
                    Nouveau
               </Fab>
          </div>
     </div>;
};

export const PostComment = () => {
     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: 2,
               }}
          >
               <Paper
                    variant="outlined"
                    component="form"
                    sx={{
                         borderRadius: 2,
                         p: "2px 5px",
                         display: "flex",
                         alignItems: "center",
                         width: 300,
                         position: "fixed",
                         bottom: 20,
                         textTransform: "none",
                    }}
               >
                    <InputBase
                         sx={{ ml: 1, flex: 1 }}
                         placeholder="Votre commentaire ..."
                         inputProps={{ "aria-label": "Votre commentaire ..." }}
                    />
                    <IconButton sx={{ p: "10px" }} aria-label="search">
                         <SendIcon />
                    </IconButton>
               </Paper>
          </div>
     );
};
