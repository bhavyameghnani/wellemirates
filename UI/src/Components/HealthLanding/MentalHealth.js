import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  },
  gaps : {
      marginRight : 30,
      marginTop : 50,
  }
}));

const data2 = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Organization Average',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

const data = {
    labels: ['Steps Walked', 'Left'],
    datasets: [
      {
        label: 'Steps for Today',
        data: [120, 70],
        backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };



export default function MentalHealth() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 12" className={classes.gaps}>
                    {/* <hr/> */}
                    <Typography gutterBottom variant="h4" component="div" className={classes.text}>
                        Mental Health Resources
                    </Typography>
                    <hr/>
                </Box>
                <Box gridColumn="span 4" className={classes.gaps}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="#/meditation">
                            <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.dribbble.com/users/2278077/screenshots/7715562/yoga_concept_4x.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Today's Mindfulness
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A 5 minute guided meditation to soothe your nerves before your big meeting, to calm you down between a stressful day, to just make you aware of your surroundings.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

                <Box gridColumn="span 4" className={classes.gaps}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="/#/affirmations">
                            <CardMedia
                            component="img"
                            height="250"
                            image="https://media.istockphoto.com/vectors/happy-woman-hugging-herself-vector-id1217085312?k=20&m=1217085312&s=612x612&w=0&h=WVzdo0gCGkp_5Jn1JXAjNwFLkPxQl1eV2YbarHh83ws="
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Positive Affirmations
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Affirmations help you get out of a negative thought cycle and allow you to create new positive pathways that help you to build yourself up instead of beat yourself up.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

                <Box gridColumn="span 4" className={classes.gaps}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="#/askmeanything">
                            <CardMedia
                            component="img"
                            height="250"
                            image="https://media.istockphoto.com/vectors/thinking-girl-beautiful-face-doubts-problems-thoughts-emotions-woman-vector-id1201080786?k=20&m=1201080786&s=612x612&w=0&h=PhS6rVUupI459HbvVJ5Mk9iou-aWTa18ZDTate7Lw4k="
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ask Me Anything
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Raise your concerns and questions and find people going through the same thing in our organizations. 
                                Let's help each other in difficult times.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
          </main>

        </Container>
        <br />
    </React.Fragment>


  );
}

