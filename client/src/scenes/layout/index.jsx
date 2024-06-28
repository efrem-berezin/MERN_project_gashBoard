import React, { UseState } from 'react'
import { Box, UseMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar";

const Layout = () => {
  return  <Box width="100%" height="100%">
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  </Box>
}

export default Layout
