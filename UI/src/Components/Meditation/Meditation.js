import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import MeditationTiles from './MeditationTiles';
import yoga from '../../Resources/Images/yoga.gif'



export default function Meditation() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Mental Wellness - Yoga & Meditation" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <MeditationTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Mental Wellness - Yoga & Meditation',
  description:
    "Meditation is being in tune with our inner universe",
  image: yoga,
  imgText: 'Points',
  linkText: 'Continue reading…',
};