import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../LandingPage/Header";
import MainFeaturedPost from "../LandingPage/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import ShopTiles from "./ShopTiles";

export default function Shop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="DASH Market Place" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <ShopTiles
              balance={props.balance}
              shop={props.shop}
              handleTransferAmount={props.handleTransferAmount}
              handleDeposit={props.handleDeposit}
            />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Personalised Shop Marketplace",
  description:
    "Great Last-Minute Gifts You Can Find in Airports and with just one click away",
  image:
    "https://assets0.domestika.org/course-images/000/019/250/19250-big.gif",
  imgText: "Employee Profile",
  linkText: "Continue reading…",
};
