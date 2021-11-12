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
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    text : {
        textAlign: "left",
    },
    box : {
        padding : 30
    }
}));



function Recommended({course}) {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ minWidth: 275}} className={classes.box}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" color="text.secondary" gutterBottom className={classes.text}>
                            Recommended After This : 
                        </Typography>
                            {   <ol>
                                    {course.recommendedCourses.map((item) => (
                                        <li>
                                            <Typography variant="body1" href={item.link}  className={classes.text}>
                                                {item.name}
                                            </Typography>
                                        </li>
                                    ))}
                                </ol>
                            }
                    </CardContent>
                </Card>
            </Box>
        </React.Fragment>
    );
}

Recommended.propTypes = {
    course: PropTypes.array,
};

Recommended.defaultProps = {
    course: {
        recommendedCourses : [
            {
            name : "MongoDB for Beginners",
            id : "/courses"
            },
            {
                name : "NodeJS for Beginners",
                id : "/courses"
            },
            {
                name : "FireBase for Beginners",
                id : "/courses"
            }, 
            {
                name : "Flask for Beginners",
                id : "/courses"
            }
        ]
    }
}

export default Recommended;