import React from "react";
import { connect } from "react-redux";
import { selectTrack } from "../../shared/actions/actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AudioPlayer } from "mui-audio-player";
import ReactPlayer from "react-player";


const TrackDetails = props => {
  const {
    artistName,
    trackName,
    primaryGenreName,
    artworkUrl100,
    collectionName,
    previewUrl,
    kind,
  } = props.selectedTrack.track;

  const setPlayer = kind === "song" ? true : false;

  const backHome = () => {
      // props.selectTrack(null);
      props.history.goBack();
  }

  const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    justifyContent: "center"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {trackName} / {collectionName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artistName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Genre: {primaryGenreName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <img src={artworkUrl100 ? artworkUrl100 : "//:0"} alt="artist" />
          </Typography>
        </CardContent>

        {setPlayer ? (
          <AudioPlayer src={previewUrl} autoPlay={false} elevation={1}/>
        ) : (
          <ReactPlayer
            url={previewUrl}
            playing={false}
            controls={true}
          />
        )}

        <Button
          size={"large"}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => backHome()}
        >
          Back Home
        </Button>
      </div>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    selectedTrack: state.track
  };
};

export default connect(
  mapStateToProps,
  { selectTrack}
)(TrackDetails);
