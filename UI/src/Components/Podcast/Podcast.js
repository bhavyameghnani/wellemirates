import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../LandingPage/Header";
import MainFeaturedPost from "../LandingPage/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import PodcastTiles from "./PodcastTiles";

export default function Podcast() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Active Collaborative Learning" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <PodcastTiles />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Collaborative Learning",
  description:
    "Learn more about what's happening in the world across the globe with grow together approach via Courses, E-Books, Podcast & Quick Shorts",
  image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--njJhFTbZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7jx6pks25uwbu20tcs20.gif",
  imgText: "Employee Profile",
  linkText: "Continue reading…",
};
