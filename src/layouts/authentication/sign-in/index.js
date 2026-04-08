import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { login } from "api/login";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const token = sessionStorage.getItem("token") || "";
      const payload = { userId, userPwd, token };

      const response = await login(payload);

      if (response && response.token) {
        sessionStorage.setItem("token", response.token);

        const userProfile = {
          userId: response.userId,
          userNm: response.userNm,
          userPwd: response.userPwd,
          sex: response.sex,
          userRole: response.userRole,
          adminRole: response.adminRole,
          birthDay: response.birthDay,
          email: response.email,
          zipCode: response.zipCode,
          address1: response.address1,
          address2: response.address2,
          userPoint: response.userPoint,
          memo: response.memo,
          pic: response.pic,
          isokSms: response.isokSms,
          isokEmail: response.isokEmail,
        };
        sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
        navigate("/dashboard");
      } else {
        throw new Error("Login failed: No token received");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <Box
          variant="contained"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <Typography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form" onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                type="text"
                label="ID"
                fullWidth
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="password"
                label="Password"
                fullWidth
                value={userPwd}
                onChange={(e) => setUserPwd(e.target.value)}
              />
            </Box>
            <Box display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </Typography>
            </Box>
            {error && (
              <Box mt={2} mb={1}>
                <Typography variant="caption" color="error">
                  {error}
                </Typography>
              </Box>
            )}
            <Box mt={4} mb={1}>
              <Button variant="contained" color="info" fullWidth type="submit">
                sign in
              </Button>
            </Box>
            <Box mt={3} mb={1} textAlign="center">
              <Typography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <Typography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                >
                  Sign up
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
