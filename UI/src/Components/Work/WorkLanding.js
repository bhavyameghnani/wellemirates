import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import work from '../../Resources/Images/work.jpg'
import WorkStats from './WorkStats';
import Countdown from './Countdown';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
text : {
    textAlign: "left",
  }
}));



export default function WorkLanding() {
    const [open, setOpen] = React.useState(false);
    const [duration, setDuration] = React.useState(10);
    const classes = useStyles();

    function handleStart(){
        setOpen(true)
    }
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Work - Improve your working style with DASH" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
                <Typography variant="h3" className={classes.text}>
                    Hey Buddy, How's it going?!
                </Typography>
                <hr/>
            </Box>  
            </Box>
           
              <WorkStats/>

            <Grid container spacing={2} align="center">
                <Grid item xs={12}>
                    <br/>
                <Box gridColumn="span 6" className={classes.gaps}>
                    <Typography variant="overline">
                        Countdown for Two mins rule - to complete small & easy tasks quickly without any distractions
                    </Typography>
                    <hr/>
                    
                </Box>
                    <Countdown  duration={duration} play={open} />
                </Grid>
                <Grid item xs={8}>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={()=> {handleStart()}}
                    >
                        Start Now
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                         variant="contained"
                         color="primary"
                        onClick={()=> {window.location.reload()}}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
              
           
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Work Style - Improve Work Efficiency & Productivity',
  description:
    "Improved Productive and Dedication to work helps both the quality and quantity of their work will improve.",
  image: work,
  imgText: 'Points',
  linkText: 'Continue reading…',
};