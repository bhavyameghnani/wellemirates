import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
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

  const data3 = {
    labels: ['Calorie Intake', 'Left'],
    datasets: [
      {
        label: 'Calorie Intake For The Day',
        data: [100, 500],
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const stats = [
    {
        name : "Heart Rate",
        image : "https://i.pinimg.com/originals/c3/b2/df/c3b2dff7986e701847f213423683f00a.png",
        data : "70bpm"
    },
    {
        name : "Step Count",
        image : "https://www.vhv.rs/dpng/d/468-4683599_footprint-steps-steps-icon-white-png-transparent-png.png",
        data : "1200 Steps"
    },
    {
        name : "Sleep",
        image : "https://www.iconpacks.net/icons/2/free-moon-icon-2287-thumb.png",
        data : "7hrs 35m"
    },
    {
        name : "Step Count",
        image : "https://www.vhv.rs/dpng/d/468-4683599_footprint-steps-steps-icon-white-png-transparent-png.png",
        data : "1200 Steps"
    },
    {
        name : "Sleep",
        image : "https://www.iconpacks.net/icons/2/free-moon-icon-2287-thumb.png",
        data : "7hrs 35m"
    }
  ]

export default function Rankings(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 2" className={classes.gaps}>
                    <img
                        src="https://image.flaticon.com/icons/png/512/222/222885.png"
                        height="100"
                        width="100"
                    ></img>
                </Box>
                <Box gridColumn="span 10" className={classes.gaps}>
                    <Typography>
                         You have earned {props.profile.points} points based on your activities.You need {500-props.profile.points} more points to get the next badge! 
                         Good Luck!
                    </Typography>
                </Box>
                <Box gridColumn="span 12"><hr/></Box>
                <Box gridColumn="span 4" className={classes.gaps}>
                    <img
                        src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
                        height="100"
                        width="100"
                        alt="points"
                    ></img>
                    <Typography>
                    {props.profile.points} Points
                    </Typography>
                </Box>
                <Box gridColumn="span 4" className={classes.gaps}>
                    <img
                        src="https://media.istockphoto.com/vectors/simple-vector-flame-icon-in-flat-style-vector-id1142309900?k=20&m=1142309900&s=170667a&w=0&h=BJ9pvIqGg2y71sAB7F5HBfS_yGYdZNgq-1l--Qa3B28="
                        height="100"
                        width="100"
                        alt="streak"
                    ></img>
                    <Typography>
                    {props.profile.streaks} Days Streak!
                    </Typography>
                </Box>
                <Box gridColumn="span 4" className={classes.gaps}>
                    <img
                        src="https://media.istockphoto.com/vectors/vector-target-and-arrow-vector-id901634176?k=20&m=901634176&s=170667a&w=0&h=uko9hAftqKhSIgcj9-8cDPM1TcTjTlYTuFeE0wKedBE="
                        height="100"
                        width="100"
                        alt="goals"
                    ></img>
                    <Typography>
                        {props.profile.goals_set} Goals Set
                    </Typography>
                </Box>
            </Box>
          </main>
        </Container>
        <br />
    </React.Fragment>


  );
}