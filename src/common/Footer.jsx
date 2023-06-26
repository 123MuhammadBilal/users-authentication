import React from 'react'
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";
const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ justifyContent: 'Center' , display:'flex' }}>
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Footer