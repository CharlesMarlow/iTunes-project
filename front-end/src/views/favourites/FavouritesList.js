import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import FavouriteItem from "./FavouriteItem";
import Button from "@material-ui/core/Button";
import { fetchTopQueries } from "../../shared/actions/actions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2)
  }
}));

const FavouritesList = props => {
  const classes = useStyles();
  const [showRes, setShowRes] = useState(false);

  const handleTopSearches = async () => {
    const email = props.userEmail;
    await props.fetchTopQueries(email);
  };

  useEffect(() => {
    handleTopSearches();
  }, []);

  const renderList = () => {
    if (props && props.topQueries && props.topQueries.payload && showRes) {
      const topQueries = props && props.topQueries && props.topQueries.payload;
      return (
        <List component="nav" aria-label="main mailbox folders">
          {topQueries.map((item, index) => {
            return (
              <FavouriteItem
                key={index}
                query={item.searched_term}
                count={item.count}
              />
            );
          })}
        </List>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className={classes.root}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {
          setShowRes(!showRes);
        }}
      >
        Get Your Favourites
      </Button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    topQueries: state.topQueries,
    userEmail: JSON.parse(state.loginReducer.payload.config.data).email
  };
};

export default connect(
  mapStateToProps,
  { fetchTopQueries }
)(FavouritesList);
