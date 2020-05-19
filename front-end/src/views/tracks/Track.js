import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { selectTrack } from "../../shared/actions/actions";

const useStyles = makeStyles({
  card: {
    minWidth: 280,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#3f51b5",
    color: "white",
    margin: "50px 20px"
  },
  title: {
    fontSize: 10,
    color: "white",
  },
  pos: {
    marginBottom: 12,
    color: "white"
  },
  details: {
    color: "white"
  }
});

const Track = props => {
  const classes = useStyles();
  const { artistName, trackName, trackId } = props.trackInfo ? props.trackInfo : null;
  return (
    <Link to={`/track/${trackId}`} onClick={() => props.selectTrack(props.trackInfo)}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Artist
          </Typography>
          <Typography variant="h5" component="h2">
            {artistName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Title
          </Typography>
          <Typography variant="body2" component="p">
            {trackName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.details}>See more</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { selectTrack }
)(Track);
