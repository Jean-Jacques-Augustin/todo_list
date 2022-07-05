import React from "react";
import "./styles/styles.css";
import { Box } from "@mui/material";
import Tasks from "./pages/mainPage";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Inscription from "./pages/inscription";
import Admin from "./pages/admin/admin";
import SideBar from "./components/sideBar";
import MainPage from "./pages/mainPage";
import Detail from "./pages/detail";

export default function Main() {
     return (
          <Box sx={{ display: "flex" }}>
               <SideBar />
               <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 9 }}>
                    <Routes>
                         <Route index path="/" element={<MainPage />} />
                         <Route path="/signin" element={<Login />} />
                         <Route path="/signup" element={<Inscription />} />
                         <Route path="/task" element={<Tasks />} />
                         <Route path="/admin" element={<Admin />} />
                         <Route path="/detail" element={<Detail />} />
                    </Routes>
               </Box>
          </Box>
     );
}
