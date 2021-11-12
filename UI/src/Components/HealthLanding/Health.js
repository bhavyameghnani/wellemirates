import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Stats from './Stats';
import MentalHealth from './MentalHealth'
import ServiceCall from '../../Service/ServiceCall';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 11
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  divHeading: {
    color: '#e57373'
  },
  subHeading: {
    color: '#115293',
    fontWeight: '600'
  },
  desc: {
    color: '#7A8C98'
  },
  text : {
    textAlign: "left",
  }
}));



export default function DeskExercise() {
  const classes = useStyles();

  const [userName, setUserName] = useState("");

  useEffect(async () => {

     ServiceCall.getUserDetails(3).then((response)=>{
       
      setUserName(response.data.FirstName)
          console.log(response.data)
      })

    }, [userName])

  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Health and Wellness" />
          <main>

            <MainFeaturedPost post={mainFeaturedPost} />
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 12">
                    <Typography variant="h3" className={classes.text}>
                        Good Evening, Aisha here!
                    </Typography>
                    <hr/>
                </Box>  
                <Box gridColumn="span 12">
                    <Stats/>
                </Box>
                <Box gridColumn="span 12">
                    <MentalHealth/>
                </Box>
            </Box>
          </main>

        </Container>
        <br />
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>


  );
}


const mainFeaturedPost = {
    title: 'Health and Mental Wellness',
    description: "Your Health and Wellness Buddy making sure you are absolutely fine from inside and outside!",
    image:"https://thumbs.dreamstime.com/z/illustration-yoga-studio-room-instructor-leading-people-beginner-to-advanced-level-class-tree-pose-variations-banner-147899944.jpg",
    imgText: 'main image description',
    linkText: 'Continue reading…'
  };