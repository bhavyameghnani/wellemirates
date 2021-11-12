import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccessAlarmTwoToneIcon from '@material-ui/icons/AccessAlarmTwoTone';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Container, CssBaseline, makeStyles} from "@material-ui/core";
import Header from "../LandingPage/Header";
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Recommended from './Recommended';
import RelatedJobs from './RelatedJobs';
import Modules from './Modules';

const useStyles = makeStyles((theme) => ({
    textLeft : {
        alignItems: "left",
        textAlign: "left",
    },
    flex : {
        display : "flex",
        flexDirection: "row",
    },
    textPad: {
        margin : 20,
    }
}));


function Course({course}) {
    const classes = useStyles();
    const { name, completed, instructor, stars, duration} = course;
    return (
        <React.Fragment>
          <CssBaseline />
            <Container maxWidth="lg" >    
                <Header title={name} />
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h3" className={classes.textLeft}>
                                        {name}
                                    </Typography>
                                    <hr/>
                                    <Typography variant="h6" color="text.secondary" component="div" className={classes.textLeft}>
                                        {instructor}
                                    </Typography>
                                </CardContent>
                                <Box className={classes.flex}>
                                    <Typography className={classes.textPad}>
                                        Number of modules : {duration}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                    <Box gridColumn="span 8">
                        <Modules/>
                    </Box>
                    <Box gridColumn="span 4">
                        <Recommended/>
                        <RelatedJobs/>  
                    </Box>
                </Box>
            </Container>
           

        </React.Fragment>
    );
}

Course.propTypes = {
    course: PropTypes.object,
};

Course.defaultProps = {
    course: {
        name : "Front End Developer Track",
        completed : 60,
        instructor : "Created By : Tanay Pratap",
        stars : "5",
        duration : "17"
    }
}

export default Course;