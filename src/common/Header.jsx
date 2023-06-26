import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography} from "@mui/material/";

const Header = () => {
  return (
    <Box sx={{ flexGrow: '1'}}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Link sx={{color:'#fff', TextDecoder:'none'}} to={'/'}>Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
