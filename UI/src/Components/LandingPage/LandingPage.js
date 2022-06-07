import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import Paper from "@material-ui/core/Paper";
import toast from "react-hot-toast";
import dashboardImage from "../../Resources/Images/dashboard_imag.jpg";
import dash from "../../Resources/Images/ey-dash.gif";
import digiHuman from "../../Resources/Images/digitalhuman.gif";
import placeholderdigiHuman from "../../Resources/Images/placeholderdigitalhuman.gif";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Gallery from "./SDGTiles";
import sdg3 from "../../Resources/Images/sdg3t.png";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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
  leaderBoard: {
    width: "100%",
    height: "400px",
    overflowY: "auto",
    overflowX: "hidden",
    borderStyle: "solid",
    borderColor: "#FDCB6B",
    borderRadius: "10px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  leaderBoardParent: {},
  chart: {
    height: 10,
  },
  divHeading: {
    color: "#593B90",
  },
  divHeading2: {
    color: "#e57373",
  },
  icon: {
    marginRight: theme.spacing(2),
    width: "40%",
    height: "40%",
    padding: "5%",
  },
}));

const mainFeaturedPost = {
  title: "DASH - Digital Ally for Responsible Citizen",
  description:
    "Inspired by IKIGAI concept, WellEmirate makes citizens to be their best version in three main aspects - Health Mentall Wellness, Community Connect & Active Collaboration Learning.",
  image: dashboardImage,
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function Home() {
  const classes = useStyles();
  const [gifOpen, setGifOpen] = React.useState(false);

  React.useEffect(() => {
    notifyWelcome();
  }, []);

  const notifyWelcome = () => {
    console.log("here");
    toast.success("DASH welcomes you !");
  };

  var msg;
  var voices;

  // function timer(m){
  //   var timer = setInterval(function() {
  //       voices = speechSynthesis.getVoices();
  //       console.log(voices);
  //       if (voices.length !== 0) {
  //           msg = new SpeechSynthesisUtterance();
  //           msg.voice = voices[0];
  //           speechSynthesis.speak(msg);
  //           msg.lang = 'en-US';
  //           clearInterval(timer);
  //       }
  //   }, 200);
  //   timer();
  //   speechSynthesis.speak(m)
  // }

  function say(text) {
    const awaitVoices = new Promise(
      (resolve) => (window.speechSynthesis.onvoiceschanged = resolve)
    ).then(() => {
      const synth = window.speechSynthesis;

      var voices = synth.getVoices();
      console.log(voices);

      const utterance = new SpeechSynthesisUtterance();
      utterance.voice = voices[18];
      utterance.text = text;

      synth.speak(utterance);
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <header className="App-header">
        <Container maxWidth="lg">
          <Header title="DASH" />

          <main>
            <MainFeaturedPost post={mainFeaturedPost} />

            <Container className={classes.cardGrid} maxWidth="lg">
              <Typography
                variant="subtitle"
                align="center"
                className={classes.divHeading}
              >
                <b>👋 Meet Aisha from DASH 👋 </b>
              </Typography>
              <br />
              <br />

              <Grid
                container
                spacing={2}
                align="center"
                style={{ backgroundColor: "black" }}
              >
                <Grid item xs={6}>
                  {gifOpen && (
                    <img src={digiHuman} align="center" height="500px" />
                  )}
                  {!gifOpen && (
                    <img
                      src={placeholderdigiHuman}
                      align="center"
                      height="500px"
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{ color: "#FFFFFF" }} variant="h5">
                    <b>Tips for the day!</b>
                  </Typography>
                  <hr />
                  {tips.map((tip) => (
                    <Card style={{ backgroundColor: "black" }}>
                      <CardContent>
                        <Typography style={{ color: "#FFFFFF" }} variant="h6">
                          {tip.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setGifOpen(!gifOpen);
                      say(
                        "Hey Buddy. Good Morning. Hope you are doing well. Today's tip of the day is you need to learn blokchain basic for your next assignment."
                      );
                    }}
                  >
                    Magic Summary
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </main>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.divHeading2}>
                <b>
                  (SDGs)Sustainable Development Goals that DASH Aims to Achieve
                </b>
              </Typography>
              <img src={sdg3} height="400px" width="600px" />
            </Grid>
            <Grid item xs={12}>
              <Gallery />
            </Grid>
          </Grid>
        </Container>

        <br />
      </header>
    </React.Fragment>
  );
}

const dashboardStats = [
  {
    title: "Education",
    icon: "https://thumbs.dreamstime.com/b/education-icon-related-graduation-cap-book-pencil-vector-flat-design-education-icon-related-graduation-cap-book-163866754.jpg",
  },
  {
    title: "Health",
    value: "1",
    icon: "https://cdn.iconscout.com/icon/free/png-512/medical-127-129383.png",
  },
  {
    title: "Livelihood",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1pc1O7_sran6bWrO8qMWBWwqFgY2Zssyjg&usqp=CAU",
  },
  {
    title: "Diversity",
    icon: "https://www.pngitem.com/pimgs/m/285-2854834_edu-huddle-diversity-and-inclusion-icon-hd-png.png",
  },
];

const tips = [
  {
    name: "Take 2 more coffee breaks daily",
  },
  {
    name: "Keep Planting more Trees around you",
  },
  {
    name: "Keep continuing on breathing exerices",
  },
  {
    name: 'Donate some amount every week on "End Hunger Portal" ',
  },
  {
    name: "Try to stay till the end of Guided Meditation",
  },
];
