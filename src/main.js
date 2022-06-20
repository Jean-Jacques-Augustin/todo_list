import React from "react";
import "./styles/styles.css";
//import Login from "./pages/login";

import { Container } from "@mui/material";
import Tasks from "./pages/tasks";
import { connected } from "./App";
import Login from "./pages/login";

export default function Main() {
     return <Container>{connected ? <Tasks /> : <Login />}</Container>;
}
