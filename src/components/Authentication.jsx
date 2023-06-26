import React, { useState } from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material/";
import authImg from '../images/auth.jpg'
import { useDispatch , useSelector } from 'react-redux'
import { onsignUp } from '../reducers/auths'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
  const [SignInOrSignUp, setSignInOrSignUp] = useState(true);
  const dispatch  =  useDispatch();
  const navigate = useNavigate();
  const myUsers = useSelector((state) => state.auths);
  console.log('myUsers__',myUsers.auths)



  const onSubmitButton = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newUser = {
        email: data.get("email"),
        password: data.get("password"),
    }
    if(SignInOrSignUp){
        console.log({myUsers})
        const authUser = myUsers?.auths?.find((user)=>user.email === newUser.email && user.password === newUser.password)
        if (authUser) {
            navigate('/home');
        }else{
            alert('wrong password or user gmail')
        }

    }else{
        dispatch(onsignUp(newUser))
        navigate('/home');
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${authImg})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
              { SignInOrSignUp ? 'Sign In' : 'Sign Up'}
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={onSubmitButton}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  { SignInOrSignUp ? 'Sign In' : 'Sign Up'}
                </Button>
                <Grid container>
                  <Grid item xs sx={{cursor: 'pointer'}}  onClick={()=>{
                        setSignInOrSignUp(true)
                    }}>
                    <Link variant="body2">
                    { "Have an account? Sign In"}
                    </Link>
                  </Grid>
                  <Grid item sx={{cursor: 'pointer'}}>
                    <Link variant="body2" onClick={()=>{
                        setSignInOrSignUp(false)
                    }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Authentication;
