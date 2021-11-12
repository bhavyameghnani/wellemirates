import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import Header from '../LandingPage/Header';
import { Box } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import ServiceCall from '../../Service/ServiceCall';

import CssBaseline from '@material-ui/core/CssBaseline';
import Rankings from './Rankings';
import Stats from './Stats'

const useStyles = makeStyles((theme) => ({
    column1: {
        width: '70%',
        float: 'left'
    },
    column2: {
        width: '28%',
        float: 'right'
    },
    column3: {
        width: '100%',
        height: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    div1 : {
        display : 'container'
    },
    div2 : {
        display : 'inline'
    },
    icon: {
        width: '40%',
        height: '40%',
        padding: '5%'
    },
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        padding: theme.spacing(1),
        //margin: 'auto',
        maxWidth: '100%'
    },
    img: {
        margin : 20,
    },
    progressbar: {
        height: 10,
        borderRadius: 5,
    },
    title: {
        paddingTop: '5%'
    },
    courseButtons: {
        '& > *': {
            margin: theme.spacing(1),
        },
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
    text:{
        margin : 10,
    },
    gaps : {
        margin : 20,
        padding: 5,
    },
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
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
        width: '100%',
        height: '400px',
        overflowY: 'auto',
        overflowX: 'hidden',
        borderStyle: 'solid',
        borderColor: '#FDCB6B',
        borderRadius: '10px',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      },
      leaderBoardParent: {
    
      },
      chart: {
        height: 10
      },
      divHeading: {
        color: '#593B90'
      },
      icon: {
        marginRight: theme.spacing(2),
        width: '40%',
        height: '40%',
        padding: '5%'
      },
}));

export default function ProfileMain() {

    const [profile, setProfile] = useState({
        FirstName: '',
        LastName: '',
        Department: '',
        Designation: '',
        Email:'',
        goals_set:'',
        points:'',
        streaks:''
      });

      useEffect(async () => {
    
         ServiceCall.getUserDetails(3).then((response)=>{
           
            setProfile({
                FirstName: response.data.FirstName,
                LastName: response.data.LastName,
                Department: response.data.Department,
                Designation: response.data.Designation,
                Email:response.data.Email,
                goals_set:response.data.goals_set,
                points:response.data.points,
                streaks:response.data.streak
            })
              console.log(response.data)
          })

        }, [profile.FirstName])
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                <Header title="Profile" />
                <main>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                        <Box gridColumn="span 3" className={classes.gaps}>
                            <Card>
                                <img 
                                    src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                                    height="200"
                                    width="200"
                                    className={classes.img}
                                    alt="profile"
                                    >
                                </img>
                                <Typography variant="h5" className={classes.text}>
                                    {profile.FirstName}   {profile.LastName}
                                </Typography>
                                <Typography variant="body1" className={classes.text}>
                                {profile.Designation}
                                </Typography>
                                <Typography variant="body1" className={classes.text}>
                                {profile.Department}
                                </Typography>
                                {/* <div className={classes.div1}>
                                    <CircleIcon/>
                                    <Typography variant = "h5" className={classes.div2}>
                                        40
                                    </Typography>
                                </div> */}
                            </Card>
                        </Box>
                        <Box gridColumn="span 9" className={classes.gaps}>
                            <Card>
                                <Rankings profile={profile}/>
                            </Card>
                        </Box>
                        <Box gridColumn="span 12" className={classes.gaps}>
                            <Card>
                                <Stats/>
                            </Card>
                        </Box>
                    </Box>
                </main>

                <Grid container spacing={3}>
              <Grid item xs={6} className={classes.leaderBoardParent}>
                  <Typography variant="subtitle1" align="center" className={classes.divHeading}>
                    <b>🏆LEADERBOARD - Top Active Users🏆</b>
                  </Typography>
                  <br />
                  <List className={classes.leaderBoard}>
                    {leaderBoardPts.map(employee => (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            {(employee.imageObj) ? <img alt="icon" src={employee.imageObj} width='100%' height='100%' /> : <FaceIcon />}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={employee.name + " (" + employee.position + ") "} secondary={employee.award} />
                      </ListItem>
                    ))}

                  </List>
                </Grid>
              <Grid item xs={6} className={classes.leaderBoardParent}>
                  <Typography variant="subtitle1" align="center" className={classes.divHeading}>
                    <b>⭐️SPOTLIGHT - Stars of this month⭐️</b>
                  </Typography>
                  <br />
                  <List className={classes.leaderBoard}>
                    {leaderBoard.map(employee => (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            {(employee.imageObj) ? <img  alt="icon"src={employee.imageObj} width='100%' height='100%' /> : <FaceIcon />}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={employee.name + ' - ' + employee.team} secondary={employee.award} />
                        {/* <ListItemText primary={employee.name} secondary={employee.award} /> */}
                      </ListItem>
                    ))}

                  </List>
                </Grid>
                </Grid>

                </Container>
                <br />
        </React.Fragment>
    );
}


const leaderBoard = [
    {
      name: 'Parmar Anand',
      team: 'RDCA Team',
      award: 'Star of the Month',
      imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
    },
    {
      name: 'Rinku Singh',
      team: 'BankOfTest Team',
      award: 'Star of the Month',
      imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
    },
    {
      name: 'Slesha Shinde',
      team: 'Analysis Team',
      award: 'Star of the Month',
      imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
    },
    {
      name: 'Ramesh Koshti',
      team: 'CCP Team',
      award: 'Star of the Month',
      imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
    },
    {
      name: 'Rani Pardesi',
      team: 'Innovations Team',
      award: 'Maximum Efforts',
      imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
    },
    {
      name: 'Jitesh Verma',
      team: 'HR and Ops Team',
      award: 'Maximum Efforts',
      imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
    },
    {
      name: 'Sameer Desai',
      team: 'Accounting Team',
      award: 'Out of Box Thinker',
      imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
    },
    {
      name: 'Sakshi shetty',
      team: 'Support and Ops Team',
      award: 'SuperHuman Award',
      imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
    }
  
  
  ]
  
  const leaderBoardPts = [
  
    {
      name: 'Alice Dsouza',
      position: 'Accounting Team',
      award: '1610pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
    },
    {
      name: 'Sagar Shah',
      position: 'Innovation Team',
      award: '1580pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
    },
    {
      name: 'Preet Singh',
      position: 'IT',
      award: '1560pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
    },
    {
      name: 'Ankita Rao',
      position: 'Risk Team',
      award: '1540pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
    },
    
    {
      name: 'Ana Dcosta',
      position: 'Risk Team',
      award: '1432pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
    },
    {
      name: 'Krish Mehta',
      position: 'Compliance',
      award: '1754pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
    },
    {
      name: 'Gayatri Deshpande',
      position: 'Operations',
      award: '1150ts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
    },
    {
      name: 'Lavish Punjabi',
      position: 'Innovation Team',
      award: '1150pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
    },
    {
      name: 'Imam Saad',
      position: 'Compliance',
      award: '1100pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
    },
    {
      name: 'Bethany Rico',
      position: 'Accounting Team',
      award: '1000pts',
      imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
    },
  ]