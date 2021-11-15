import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import toast from 'react-hot-toast';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function WallTile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {
    notifyWelcome();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifyWelcome = () => {
    toast.success("NEAXT welcomes you !");
  };

  return (
    <React.Fragment>
      <CssBaseline />
          <main>
              <Typography variant="h5" className={classes.divHeading}>
                <b>Like, Share, Support User's Activity and Promote Well-being!</b>
              </Typography>
              <br />
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
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); 
                            // speak({ text: card.readmore,rate : 0.8})
                         }}
                          >
                          View more
                      </Button>
                     
                      <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                          >
                          Like
                      </Button>

                      <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                          >
                          Share now
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
                <b>Digitally Enabling & Promoting Well-being</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
              Digital Wall for Citizens
            </Typography>

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

                    {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

                  </DialogContentText>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
          </main>
    </React.Fragment>


  );
}

  const featuredPosts = [
    {
      title: 'Anshu Singh - Yoga & Fitness',
      description:
      'Status: Completed 30mins of AI Yoga Fitness Coach classes',
      image: 'https://betterme.world/articles/wp-content/uploads/2020/06/Yoga-Before-or-After-Workout-740x490.jpg',
      imageText: 'Artists name',
      
    },
    {
      title: 'Aditi Anshu - Building Bird house ',
      description:
      'Status: Built Bird House for her Home & Neighbours house',
      image: 'https://media.gettyimages.com/videos/woman-building-a-diy-insect-hotel-video-id1151505708?s=640x640',
      imageText: 'Artists name',
      
    },
    {
      title: 'Darshan Patil - Beach Clean-up',
      description:
      'Status: Helped in cleaning Versova Beach by segregating plastic & other waste.',
      image: 'https://images.yourstory.com/cs/2/2d86ed30b28211e8b2e7114aea10c711/Imagenppx-1585058353573.jpg',
      imageText: 'Artists name',
      
    },
  
    {
      title: 'Bhavya Meghnani - Waste Management Activity',
      description:
      'Status: Perfomed waste management activity with her niece to segragate wet & dry waste',
      image: 'https://www.plasticsmakeitpossible.com/wp-content/uploads/2016/03/iStock_000085536075_Small-400x266.jpg',
      imageText: 'Artists name',
      
    },
  
    {
      title: 'Schezeen Fazulbhoy - Tree Plantation',
      description:
      'Status: Actively participated in tree plantation drive and planted 10 trees around various areas',
      image: 'https://previews.123rf.com/images/jackf/jackf1305/jackf130500947/19803177-happy-mature-woman-planting-tree-at-garden.jpg',
      imageText: 'Artists name',
      
    },

    {
        title: 'Rajesh Verma - On choosing cyclying over Car',
        description:
        'Status: Rajesh cycled 2KM to reach at his office instead of taking car.',
        image: 'https://s3.envato.com/files/273351525/DSC_4253.jpg',
        imageText: 'Artists name',
        
      },
  
  
  ];