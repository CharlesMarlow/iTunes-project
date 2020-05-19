import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { login, signup } from "../../shared/actions/actions";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  },
  actionsBtns: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Login = props => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const redirectHome = () => {
    return props.history.push({
      pathname: "/home",
      email
    });
  };

  // handle signup
  useEffect(() => {
    if (props.isSignup) {
      handleLogin(email, password);
    } else if (props.isSignup !== undefined) {
      setLoginError("Email or password formats are invalid");
    }
  });

  // handle login
  useEffect(() => {
    if (props.isUser) {
      const validLogin =
        props.isUser.payload && props.isUser.payload.status === 200;
      const invalidLogin =
        props.isUser.payload && props.isUser.payload.status !== 200;
      if (validLogin) {
        redirectHome();
      } else if (invalidLogin) {
        setLoginError("Email or password are invalid");
      }
    }
  });

  const onEmailChange = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleLogin = (email, password) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    props.login(email, password);
  };

  const handleSignUp = async (email, password) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    props.signup(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={event => onEmailChange(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => onPasswordChange(event)}
          />
          {loginError.length > 0 ? (
            <Box className={classes.error}>{loginError}</Box>
          ) : null}
          <Box className={classes.actionsBtns}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleLogin(email, password)}
            >
              Log In
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignUp(email, password)}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isUser: state.loginReducer,
    isSignup: state.signup.payload
  };
};

export default connect(
  mapStateToProps,
  { login, signup }
)(Login);
