import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Track from "./Track";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "2.5vw"
  },
  list: {
    width: "100%"
  }
}));


const renderTracks = (data = {}) => {
  const list = [];
  const { resultCount, results } = data;

  if (resultCount > 0) {
    results.forEach((item, index) => {
      list.push(
          <Track key={index} trackInfo={item} />
      );
    });
  }
  return list;
};

const TracksList = props => {
  const classes = useStyles();
  const tracks = props.tracks;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" className={classes.root}>
        {renderTracks(tracks.payload)}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { }
)(TracksList);
