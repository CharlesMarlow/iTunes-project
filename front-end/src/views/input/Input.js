import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchTracks, updateFavourites } from "../../shared/actions/actions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Input = props => {
  const classes = useStyles();
  const [term, setTerm] = useState("");

  const searchArtist = term => {
    props.fetchTracks(term);
    props.updateFavourites(term, props.userEmail);
  };

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  return (
    <Grid
      container
      direction={"row"}
      wrap={"nowrap"}
      justify={"flex-start"}
      alignItems={"center"}
    >
      <Grid item xs={1} />
      <Grid item xs={"auto"}>
        <TextField
          id="outlined-textarea"
          label="Search iTunes"
          placeholder={"Search any song..."}
          value={term}
          onChange={event => onInputChange(event)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={1}>
        <Button
          size={"large"}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => searchArtist(term)}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    userEmail: JSON.parse(state.loginReducer.payload.config.data).email
  };
};

export default connect(
  mapStateToProps,
  { fetchTracks, updateFavourites }
)(Input);
