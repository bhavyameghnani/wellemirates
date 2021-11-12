import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import toast from 'react-hot-toast';
import { useSpeechSynthesis } from 'react-speech-kit';

import beefitImage from '../../Resources/Images/beefit_img.jpg';

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
}));

const handleDragStart = (e) => e.preventDefault();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeskExercise() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { speak } = useSpeechSynthesis();

  const notifyWelcome = () => {
    speak({ text: 'Beefit welcomes you',rate : 0.8})
    toast.success("BeeFit welcomes you !");
  };

//   Only on first render
  useEffect(() => {
    notifyWelcome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <React.Fragment>
      <CssBaseline />

      <header className="App-header">

        <Container maxWidth="lg">
          <Header title="BeeFit - Commit to be fit" />
          <main>

            <MainFeaturedPost post={mainFeaturedPost} />


            <Container className={classes.cardGrid} maxWidth="lg">

              <Typography variant="h5" className={classes.divHeading}>
                <b>Easy Desk-Friendly Ways For You To Get Fit!</b>
              </Typography>
              <br />

              {/* End hero unit */}
              <Grid container spacing={4}>
                {featuredPosts.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          {card.title}
                        </Typography>
                        <Typography align="center" variant="body1" className={classes.desc} gutterBottom>
                          {card.description}
                        </Typography>
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); speak({ text: card.readmore,rate : 0.8}) }}
                          >
                            Read more about this exercise!
                      </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
           
              <br />
              <Typography variant="h5" className={classes.divHeading}>
                <b>EY Fitness Reels</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
                Featuring EY Employees participating in the Fitness Challenge!
            </Typography>
              <br />

              <AliceCarousel
                disableButtonsControls={true}
                mouseTracking
                items={items}
                keyboardNavigation = {true}
                mouseDragEnabled={true}
              />

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">{localStorage.getItem("f_title")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">

                    {localStorage.getItem("f_readmore")}
                    <br /> <br />
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

                  </DialogContentText>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>


          </main>

        </Container>
        <br />
      </header>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>


  );
}


const mainFeaturedPost = {
    title: 'BeeFit',
    description: "Your friend who pushes you to perform challenges & tricks for 5mins desk exercises to stay fit and in good posture. A voice bot that notifies users on intervals to take breaks, do some exercise and stay fit",
    // image: 'https://thumbs.dreamstime.com/b/fitness-background-equipment-gym-home-jump-rope-dumbbells-expander-water-pastel-pink-top-view-107457920.jpg',
    //image: 'https://static.onecms.io/wp-content/uploads/sites/35/2017/02/03194024/1200-fitness-equipment.jpg',
    image:beefitImage,
    imgText: 'main image description',
    linkText: 'Continue reading…'
  };
  
  const featuredPosts = [
    {
      title: 'Arm Circles',
      description:
        '2 minutes - 15 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/16%20-%20Seated%20Arm%20Circles.gif',
      imageText: 'Arm Circles',
      readmore: "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction."
    },
    {
      title: 'Chest Stretch',
      description:
        '30 seconds - 10 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/3%20-%20Chest%20Stretch.gif',
      imageText: 'Chest Stretch',
      readmore: "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds."
    },
    {
      title: 'Leg Raises',
      description:
        '10 minutes - 70 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/8%20-%20Leg%20Raises.gif',
      imageText: 'Leg Raises',
      readmore: "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times."
    },
  
    {
      title: 'Arm Curls',
      description:
        '10 minutes - 80 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/5%20-%20Arm%20Curls.gif',
      imageText: 'Arm Curls',
      readmore: "Holding a water bottle, or an object of a similar weight, let your arms fall straight by your side and then slowly bend them upwards. Repeat this action multiple times on both arms."
    },
  
    {
      title: 'Torso Twists',
      description:
        '30 seconds - 10 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/2%20-%20Seated%20Torso%20Twist.gif',
      imageText: 'Torso Twists',
      readmore: "Sitting at your desk, cover your left knee with your right hand and look over your left shoulder. Hold this pose for 30 seconds to stretch your back, remembering to breathe. Repeat the action on the opposite side."
    },
    {
      title: 'Chair Squats',
      description:
        '1 minute - 20 calories',
      image: 'https://www.printerland.co.uk/PrinterlandImages/Image/info/Infographics/9%20-%20Chair%20Squats.gif',
      imageText: 'Chair Squats',
      readmore: "Using a non-moving chair perch on the edge of the seat and slowly stand up with your arms by your sides. Lower yourself until you gently touch the chair and then stand back up, remembering to breathe. Repeat. For extra points, hover just over the chair for 30 seconds."
    },
  
  
  ];


  const items = [
    <img alt="family_reels" height="500" width="700" src="https://i.pinimg.com/originals/e2/48/99/e24899a17554adf7e7b7c9e384dce8d3.gif" onDragStart={handleDragStart} />,
    <img alt="family_reels" height="500" width="700" src="https://www.lumi.cn/upload/news/201808/d6c6d8c1-8018-4f81-9655-45d0161a5389.gif" onDragStart={handleDragStart} />,
    <img alt="family_reels" height="500" width="700" src="https://www.snacknation.com/wp-content/uploads/2018/04/neck-rolls.gif" onDragStart={handleDragStart} />,
  ];
  