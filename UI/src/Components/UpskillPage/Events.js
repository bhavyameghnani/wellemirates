import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccessAlarmTwoToneIcon from '@material-ui/icons/AccessAlarmTwoTone';
import SendIcon from '@material-ui/icons/Send';
import toast, { Toaster } from 'react-hot-toast';


const notifyReminder = () => {
    console.log("inside Toast");
    toast.success("Reminder set successfully!", {
        icon: '👏',
    });

};

const useStyles = makeStyles((theme) => ({
    column1: {
        width: '70%',
        float: 'left'
    },
    column2: {
        width: '28%',
        float: 'right'
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
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '80%',
        maxHeight: '80%',
    },
    colorPrimary: {
        backgroundColor: '#DEDEE6',
    },
    barColorPrimary: {
        backgroundColor: '#5DBCD9',
    },
    title: {
        paddingTop: '5%'
    },
    courseButtons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


export default function Events(props) {
    const classes = useStyles();
    const { learningEvents } = props;

    return (
        <div className="container">
            <Grid container spacing={3}>
                {learningEvents.map((paper) => (
                    <Grid item key={paper.title} xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" >
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h6" className={classes.title}>
                                                {paper.title}
                                            </Typography>
                                            
                                            <Typography gutterBottom variant="overline" className={classes.title}>
                                                {paper.date}
                                            </Typography>
                                            
                                        </Grid>

                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" className={classes.title}>
                                                {paper.description}
                                            </Typography>
                                        </Grid>
                                        
                                        <Grid item >
                                            <hr/>
                                            <Button variant="outlined"
                                                endIcon={<SendIcon />}
                                                align="left"
                                            >
                                                Go
                                                </Button>

                                            <Button variant="outlined"
                                                endIcon={<AccessAlarmTwoToneIcon />}
                                                align="right"
                                                onClick={notifyReminder}>
                                                Reminder
                                                </Button>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

Events.propTypes = {
    learningEvents: PropTypes.object,
};