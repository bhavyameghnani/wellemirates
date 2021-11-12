import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../LandingPage/Header';
import MainFeaturedPost from './MainFeaturedPost';
import SkillProgress from './SkillProgress';
import MainContent from './MainContent';
import { Autorenew } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
import toast, { Toaster } from 'react-hot-toast';

import upskillImage from '../../Resources/Images/upskill_img.jpg';

const notifyWelcome = () => {
  console.log("here")
  toast.success("UpSkill welcomes you !");

};

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    width: '50%',
    height: '50%',
    padding: '5%'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  }
}));


const mainFeaturedPost = {
  title: 'Upskill - Active Learning with DASH',
  description:
    "Your personalized learning hub because no matter where you are in your current career, its never too late to learn and develop new skills.",
  image:upskillImage ,
  // 'https://tl.hku.hk/wp-content/uploads/2019/01/revamping_banner.jpg'
  imgText: 'main image description',
  linkText: 'Continue reading…'
};

const featuredPosts = [
  {
    title: 'Personalized Learning',
    icon: "https://www.flaticon.com/svg/vstatic/svg/2103/2103423.svg?token=exp=1619360706~hmac=27fc5b10548c69767c918bb1bbcac895",
  },
  {
    title: 'Learn Anytime, Anywhere',
    icon: "https://www.flaticon.com/svg/vstatic/svg/3048/3048425.svg?token=exp=1619360800~hmac=1501930585d8ae411da67f1063024a58",
  },
  {
    title: 'Top Rated Content',
    icon: "https://www.flaticon.com/svg/vstatic/svg/651/651140.svg?token=exp=1619362380~hmac=a29c352cde5e16f92b8740f244849c94",
  },
  {
    title: 'Get Certified',
    icon: "https://www.flaticon.com/svg/vstatic/svg/2490/2490354.svg?token=exp=1619362426~hmac=2d7b2dd817ad75056384c4c9e714bf5d",
  },
];

export default function Home() {
  const classes = useStyles();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    notifyWelcome();
  });

  return (
    <React.Fragment>

      <CssBaseline />

      <header className="App-header">

        <Container maxWidth="lg">
        <Header title="UpSkill - Improve one page at a time with DASH" />
          <main>

            <MainFeaturedPost post={mainFeaturedPost} />
            {/* {featuredPosts.map((post) => (
              <ElderlyHomeCards key={post.title} post={post} />
            ))} */}

            <Container className={classes.cardGrid} maxWidth="lg">
              <SkillProgress post={mainFeaturedPost} />
            </Container>

            <br />
            <hr />

            <Container className={classes.cardGrid} maxWidth="lg">
              <MainContent />
            </Container>

          </main>

        </Container>
        <br />
      </header>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
      
    </React.Fragment>


  );
}