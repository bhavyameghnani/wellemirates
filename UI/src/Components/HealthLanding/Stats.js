import React, { useState, useEffect } from 'react';
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
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
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


export default function Stats() {

  const [health, setHealth] = useState({
    heart_rate: '',
    step_count: '',
    sleep: ''
  });

  useEffect(async () => {

     ServiceCall.getUserHealthDetails(3).then((response)=>{
       
      setHealth({
        heart_rate: response.data.heart_rate,
        step_count: response.data.step_count,
        sleep: response.data.sleep
        })
          console.log(response.data)
      })

    }, [health.heart_rate])


  const stats = [
    {
        name : "Heart Rate",
        image : "https://i.pinimg.com/originals/c3/b2/df/c3b2dff7986e701847f213423683f00a.png",
        data : '80bpms'
    },
    {
        name : "Step Count",
        image : "https://www.vhv.rs/dpng/d/468-4683599_footprint-steps-steps-icon-white-png-transparent-png.png",
        data : '150steps'
    },
    {
        name : "Sleep",
        image : "https://www.iconpacks.net/icons/2/free-moon-icon-2287-thumb.png",
        data : '4hrs'
    },
    {
      name : "Distance",
      image : "https://cdn.iconscout.com/icon/premium/png-256-thumb/distance-28-640095.png",
      data : "6.08 km"
    },
    {
      name : "Calories",
      image : "https://cdn.iconscout.com/icon/premium/png-256-thumb/calories-1709710-1452635.png",
      data : "147 cal"
    }
  ]

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4" className={classes.gaps}>
                    <Card>
                        <CardContent>
                            <Typography variant= "h6">
                                Today's Health Statistics
                            </Typography>
                            <hr/>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                    {stats.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">
                                                <img src={row.image} height={30} width ={30}></img>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.data}</TableCell>
                                            
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Box>
                <Box gridColumn="span 4"  className={classes.gaps}>
                    <Doughnut data={data} height={100} width={100} options={{ maintainAspectRatio: false }}/>
                </Box>
                <Box gridColumn="span 4"  className={classes.gaps}>
                    {/* <hr/> */}
                    <Doughnut data={data3} height={100} width={100} options={{ maintainAspectRatio: false }}/>
                </Box>
                <Box gridColumn="span 6" className={classes.gaps}>
                    <Typography variant="overline">
                        Colleauges meeting their Fitness Goals this week!
                    </Typography>
                    <hr/>
                    <Line data={data2} options={options} height={200}/>
                </Box>
                <Box gridColumn="span 6" className={classes.gaps}>
                    <Card sx={{ maxWidth: 345 }}>
                        {/* <NavLink to='/deskexercise'> */}
                            <CardActionArea href = '#/deskexercise'>
                                <CardMedia
                                component="img"
                                height="300"
                                image="https://img.freepik.com/free-vector/happy-man-exercising-park_113065-39.jpg?size=626&ext=jpg"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Desk Excercises
                                </Typography>
                                <Typography variant="overline" color="text.secondary">
                                    Try out within 10 minutes.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        {/* </NavLink> */}
                    </Card>
                </Box>
            </Box>
          </main>

        </Container>
        <br />
    </React.Fragment>


  );
}