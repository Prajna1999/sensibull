import React from 'react'

import {Navbar} from '../components/barrel'

import {Box,useMediaQuery} from "@mui/material";

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Box width="100%" height="100%">
        <Box flexGrow={1}>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout