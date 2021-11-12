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
import { Doughnut, Line } from 'react-chartjs-2';

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
        label: 'Your Average',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const lineData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Organization Average',
        data: [20, 3, 9, 7, 1, 7],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

const data = {
    labels: ['Work Productivity', 'Left'],
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
    labels: ['Mental & Physical Wellness', 'Left'],
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

  const data4 = {
    labels: ['Hours Studied', 'Left'],
    datasets: [
      {
        label: 'Hours Studied',
        data: [100, 500],
        backgroundColor: [
            'rgba(147,196,125, 0.8)',
            'rgba(147,196,125, 0.2)',
        ],
        borderColor: [
          'rgba(147,196,125, 1)',
          'rgba(147,196,125, 1)',
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

 

export default function Stats() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 12" className={classes.gaps}>
                <Typography variant="h4">
                  Your Performance Over This Week
                </Typography>
                <hr/>
              </Box>        

              <Box gridColumn="span 6" className={classes.gaps}>
                    <Typography variant="overline">
                         For This Week : You
                    </Typography>
                    <hr/>
                    <Line data={data2} options={options} height={200}/>
                </Box>
                <Box gridColumn="span 6" className={classes.gaps}>
                    <Typography variant="overline">
                        For This Week : Organization 
                    </Typography>
                    <hr/>
                    <Line data={lineData} options={options} height={200}/>
                </Box>

              <Box gridColumn="span 4"  className={classes.gaps}>
                    <Doughnut data={data} height={200} width={200} options={{ maintainAspectRatio: false }}/>
                </Box>
                <Box gridColumn="span 4"  className={classes.gaps}>
                    <Doughnut data={data4} height={200} width={200} options={{ maintainAspectRatio: false }}/>
                </Box>
                <Box gridColumn="span 4"  className={classes.gaps}>
                    {/* <hr/> */}
                    <Doughnut data={data3} height={200} width={200} options={{ maintainAspectRatio: false }}/>
                </Box>
                
            </Box>
          </main>

          

        </Container>
        <br />
    </React.Fragment>


  );
}
