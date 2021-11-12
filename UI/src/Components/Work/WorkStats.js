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
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

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
    labels: ['Meetings Attended', 'Left'],
    datasets: [
      {
        label: 'Meetings for Today',
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
    labels: ['Chatting time', 'Left'],
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
        name : "Meetings Attended",
        image : "http://simpleicon.com/wp-content/uploads/meeting.png",
        data : "120mins"
    },
    {
        name : "Mails Sent ",
        image : "https://cdn4.iconfinder.com/data/icons/mails-1/48/expand-color-emails-26-512.png",
        data : "10"
    },
    {
        name : "Chat Time",
        image : "https://cdn.iconscout.com/icon/premium/png-256-thumb/chat-261-163906.png",
        data : "30mins"
    },
    {
        name : "Meetings Unattended",
        image : "https://cdn.iconscout.com/icon/premium/png-256-thumb/meetings-1-904270.png",
        data : "10"
    },
    {
        name : "Mail read",
        image : "https://cdn4.iconfinder.com/data/icons/mails-1/48/expand-color-emails-26-512.png",
        data : "25"
    }
  ]

export default function WorkStats() {
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
                                Today's Work Statistics
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
                        Colleauges meeting their Working Goals this week!
                    </Typography>
                    <hr/>
                    <Line data={data2} options={options} height={200}/>
                </Box>
                <Box gridColumn="span 6" className={classes.gaps}>
                    <Card sx={{ maxWidth: 345 }}>
                        {/* <NavLink to='/deskexercise'> */}
                            <CardActionArea href = '#/note'>
                                <CardMedia
                                component="img"
                                height="300"
                                image="https://www.clearvoice.com/wp-content/uploads/2018/06/06.29.18_Hero_1360x646-810x385.png"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Smart Todo Task Notes
                                </Typography>
                                <Typography variant="overline" color="text.secondary">
                                    AI powered ToDo Task Reminder
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
