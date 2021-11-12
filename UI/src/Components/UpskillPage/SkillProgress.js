import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ServiceCall from '../../Service/ServiceCall';

//import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
        width: '40%',
        height: '40%',
        padding: '5%'
    },
    divHeading : {
        // color : '#ff9800'
        color : '#e57373'
    },
    courseValue : {
        //  color : '#e57373'
         color : '#ff9800'
    },
    courseDesc : {
        // color : '#115293'
    }

}));


export default function SkillProgress(props) {
    const [progress, setProgress] = useState({
        badges_earned: '',
        certfications: '',
        courses_completed: '',
        courses_in_progress:''
      });
    
      useEffect(async () => {
    
         ServiceCall.getUserCourseDetails(1).then((response)=>{
           
        setProgress({
            badges_earned: response.data.badges_earned,
            certfications: response.data.certfications,
            courses_completed: response.data.courses_completed,
            courses_in_progress: response.data.courses_in_progress
            })
              console.log(response.data)
          })
    
        }, [progress.badges_earned])
    const classes = useStyles();
    const { post } = props;

    const featuredPosts = [
        {
            title: 'Courses Completed',
            value: progress.courses_completed,
            icon: "https://cdn3.iconfinder.com/data/icons/online-learning-vol-1-2/64/Online_Learning-256.png",
            pt: 3,
        },
        {
            title: 'Courses In Progress',
            value: progress.courses_in_progress,
            icon: "https://cdn3.iconfinder.com/data/icons/online-learning-vol-1-2/64/Video_Lession-256.png",
            pt: 6,
        },
        {
            title: 'Badges Earned',
            value: progress.badges_earned,
            icon: "https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/ACHIEVEMENT_reward_winner_achievements-256.png",
            pt: 8
        },
        {
            title: 'Certifications Acquired',
            value: progress.certfications,
            icon: "https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/diploma.png",
            pt:4
        },
    ];

    return (
        <div className="container">
            <Typography variant='h5' align='center' className = {classes.divHeading}>
                <b>Your Progress</b>
              </Typography>
               
            <Grid container spacing={3}>
                {featuredPosts.map((paper) => (
                    <Grid item key={paper.title} xs={6} sm={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <Grid>
                                <img src={paper.icon} className={classes.icon} />
                            </Grid>
                            <Grid>
                                <Typography variant='h5' className={classes.courseValue}>
                                    <b>{paper.pt}</b>
                                </Typography>
                            </Grid>
                            <Typography variant='body1' className={classes.courseDesc}>
                                {paper.title}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}

SkillProgress.propTypes = {
    post: PropTypes.object,
};