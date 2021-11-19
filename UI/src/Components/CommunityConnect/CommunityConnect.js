import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Header from "../LandingPage/Header";
import community from "../../Resources/Images/community-ey.gif";
import MainFeaturedPost from "../LandingPage/MainFeaturedPost";

const useStyles = makeStyles((theme) => ({
  icon: {
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const mainFeaturedPost = {
  title: "Community Connect",
  description:
    "Be the change you want to see - Responsibily giving back to the community",
  image:
    "https://c1.wallpaperflare.com/preview/120/295/591/teamwork-team-fist-bump-collaborate.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function CommunityConnect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleCreateTask(event) {
    setDesc(event.target.value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Community Connect" />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h4">
                      <center>{card.title}</center>
                    </Typography>
                    <br />
                    <Typography style={{ color: "#5F00D0" }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary">
                      Read More
                    </Button>
                    <Button size="large" style={{ color: "#F96740" }}>
                      Share Now
                    </Button>
                    <Button
                      size="large"
                      style={{ color: "#03AB30" }}
                      onClick={() => {
                        localStorage.setItem("f_title", card.title);
                        localStorage.setItem("f_description", card.description);
                        localStorage.setItem("f_image", card.image);
                        localStorage.setItem("points", card.points);

                        handleClickOpen();
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="lg"
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {localStorage.getItem("f_title")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <center>
                      <img
                        alt="fitness tip"
                        src={localStorage.getItem("f_image")}
                      />
                    </center>
                  </Grid>

                  <Grid item xs={12}>
                    <center>
                      <Typography variant="h5" className={classes.divHeading}>
                        <b>Challenge: {localStorage.getItem("f_title")}</b>
                      </Typography>
                    </center>
                  </Grid>

                  <Grid item xs={6}>
                    <center>
                      <Typography variant="h5" className={classes.divHeading}>
                        <b>Points: {localStorage.getItem("points")} WEC 💰</b>
                      </Typography>
                    </center>
                  </Grid>

                  <Grid item xs={6}>
                    <center>
                      <Typography variant="h5" className={classes.divHeading}>
                        <b> Available / Earned WellEmirate Coins: 30 WEC 💰</b>
                      </Typography>
                    </center>
                  </Grid>
                  <Grid item xs={6}>
                    <center>
                      <Button variant="contained" color="primary">
                        Read more about the challenge
                      </Button>
                    </center>
                  </Grid>

                  <Grid item xs={6}>
                    <center>
                      <Button variant="contained" color="primary">
                        Contact Challenge / Event Sponsors
                      </Button>
                    </center>
                  </Grid>

                  <Grid item xs={12}>
                    <center>
                      <center>
                        <TextField
                          id="standard-basic"
                          label="Enter Description of the Submission here"
                          style={{ width: "1000px" }}
                          onChange={handleCreateTask}
                        />
                      </center>

                      <br />
                      <Grid item xs={12}>
                        <center>
                          <input
                            type="file"
                            accept="*"
                            onChange={props.captureFile}
                            style={{ width: "150px" }}
                          />
                        </center>
                      </Grid>

                      <br />

                      <Grid item xs={12}>
                        <center>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              props.createTask(
                                desc,
                                localStorage.getItem("f_title"),
                                localStorage.getItem("points")
                              );
                            }}
                          >
                            Submit Now
                          </Button>
                        </center>
                      </Grid>
                    </center>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </main>
      </Container>
    </React.Fragment>
  );
}

const cards = [
  {
    title: "Clean up your local park & streets near your home & office",
    description: "WEC Coins:10 💰",
    image: "https://source.unsplash.com/weekly?park",
    points: "10",
  },
  {
    title: "Lead & Host a river clean-up challenge in your society",
    description: "WEC Coins:15 💰",
    image: "https://source.unsplash.com/weekly?river",
    points: "5",
  },
  {
    title: "Build birdhouses for the little birdies in your neighourhood",
    description: "WEC Coins:20 💰",
    image: "https://source.unsplash.com/weekly?bird",
    points: "20",
  },
  {
    title: "Create your own eco-friendly wrapping paper/gift bags",
    description: "WEC Coins:5 💰",
    image: "https://source.unsplash.com/weekly?bag",
    points: "5",
  },
  {
    title: "Conduct an enviorment & sustainability session at your work place",
    description: "WEC Coins:15 💰",
    image: "https://source.unsplash.com/weekly?work",
    points: "5",
  },
  {
    title: "Teach various recycling activities to your younger generation",
    description: "WEC Coins:30 💰",
    image: "https://source.unsplash.com/weekly?kid",
    points: "30",
  },
];
