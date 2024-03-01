import React, { useState } from "react";
import "../components/styles/Hero.css"
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { CameraAlt } from "@mui/icons-material";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { usernameValidator } from "../utils/validators";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const ToggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  // const password = useStrongPassword();
  const password = useInputValidation("");
  const avatar = useFileHandler("single", 5);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name.value, bio.value, username.value, password.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username.value, password.value);
  };

  return (
    <Container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        background: `
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 2px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 2px)
        `,
        backgroundSize: "40px 40px",
        overflow: "hidden",
      }}
    >
          <Container
      sx={{
        height: "40vh",
        display: "flex",
        width: "50vw",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "0 8px 8px 0",
      }}
    >
    <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
      <span className="button">
        <span class="actual-text">&nbsp;Chatnow&nbsp;
          <span aria-hidden="true" class="hover-text">&nbsp;Chatnow&nbsp;</span>
        </span>
      </span>
  </Typography>
    <Typography variant="h4" className="main-heading">
        Connecting the world, one message at a time.
      </Typography>
    </Container>
    <Container
     sx={{marginLeft: "100px"}} maxWidth='xs'>
    <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1E88E5 0%, #000000 100%)",
          zIndex: -1,
        }}
      />
        {isLogin ? (
      <>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#185EA5" }}>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ marginTop: "1rem", width: "100%" }}>
          <TextField
            required
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
            value={username.value}
            onChange={username.changeHandler}
          />
          <TextField
            required
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            value={password.value}
            onChange={password.changeHandler}
          />
          <Button
            sx={{ marginTop: "1rem", padding: ".5rem" }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
          <Typography textAlign="center" m=".7rem">
            OR
          </Typography>
          <Button variant="text" onClick={ToggleLogin} fullWidth>
            Sign Up now
          </Button>
        </form>
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#185EA5" }}
            >
              Sign Up
            </Typography>
            <form
              style={{
                marginTop: "1rem",
                textAlign: "center",
              }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"6rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "4rem",
                    height: "4rem",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    bottom: "-0.5rem",
                    right: "-0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "50%",
                  }}
                >
                  <CameraAlt />
                  <VisuallyHiddenInput
                    type="file"
                    onChange={avatar.changeHandler}
                  />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
                sx={{ marginBottom: "0.5rem" }}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                sx={{ marginBottom: "0.5rem" }}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
                sx={{ marginBottom: "0.5rem" }}
              />
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                sx={{ marginBottom: "0.5rem" }}
              />
              <Button
                sx={{ marginTop: "1rem", padding: ".5rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              {/* <Typography textAlign={"center"} m={".7rem"}>
                OR
              </Typography> */}
              <Button variant="text" onClick={ToggleLogin} fullWidth sx={{marginTop: "1rem"}}>
                Login Now
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </Container>
  );
}

export default Login;
