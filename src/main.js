import React from "react";
import "./styles/styles.css";
//import Login from "./pages/login";

import { Container } from "@mui/material";
import Tasks from "./pages/tasks";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import MainPages from "./pages/mainPages";
import Inscription from "./pages/inscription";
import Admin from "./pages/admin/admin";

export default function Main() {
     return (
          <Container>
               <div className="main_container">
                    <Routes>
                         <Route index path="/" element={<MainPages />} />
                         <Route path="/signin" element={<Login />} />
                         <Route path="/signup" element={<Inscription />} />
                         <Route path="/task" element={<Tasks />} />
                         <Route path="/admin" element={<Admin />} />
                    </Routes>
               </div>
          </Container>
     );
}
