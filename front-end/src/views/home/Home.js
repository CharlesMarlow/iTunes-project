import React from "react";
import Box from "@material-ui/core/Box";
import Header from "../header/Header";
import TracksList from "../tracks/TracksList";
import Input from "../input/Input";
import FavouritesList from "../favourites/FavouritesList";

const Home = (props) => {

  const { email } = props.location;

    return (
      <React.Fragment>
        <Header credentials={email}/>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="flex-start"
          p={2}
          width="100%"
        >
          <section>
            <Input />
            <TracksList />
          </section>
          <FavouritesList credentials={email}/>
        </Box>
      </React.Fragment>
    );
};

export default Home;