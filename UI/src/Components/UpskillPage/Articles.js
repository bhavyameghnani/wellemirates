import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    }
}));


export default function Articles(props) {
    const classes = useStyles();
    const { blogs } = props;

    return (
        <div className="container">
                <Grid container spacing={3}>
                    {blogs.map((paper) => (
                        <Grid item key={paper.title} xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={paper.icon} />
                                        </ButtonBase>
                                    </Grid>

                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" >
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" className={classes.title}>
                                                    {paper.title}
                                                </Typography>
                                            {/* </Grid> */}
                                            {/* <Grid item > */}
                                                <Link to="/blog">
                                                    <Button variant="outlined"
                                                        endIcon={<SendIcon />}
                                                        align="left"
                                                        >
                                                        Go
                                                    </Button>
                                                </Link>
                                                
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

Articles.propTypes = {
    blogs: PropTypes.object,
};