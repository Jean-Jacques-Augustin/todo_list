import Dark_theme from "./themes/dark";
import Light_theme from "./themes/light";

export const name = "Jean Jacques Augustin";
export const imageUrl = "";

const theme_mode = false;
export const theme_Light = theme_mode ? Dark_theme : Light_theme;
