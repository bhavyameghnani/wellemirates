import { Container, CssBaseline, IconButton, makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Header from "../LandingPage/Header";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

import toast, { Toaster } from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    box : {
        paddingTop : 40,
        paddingLeft : 20
    },
    text: {
        textAlign: "left",
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        // flexBasis: '33.33%',
        // flexShrink: 0,
        margin: 'auto'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    column1: {
        width: '10%',
        float: 'left',
    },
    column2: {
        width: '70%',
        float: 'left'
    },
    qsIcon: {
        margin: 'auto',
        width: '30%'
    },
    accordion: {
        height: 'auto'
    },
}));



const modules = [
    { modId: 'm1', modName: 'HTML : Hyper Text Markup Language', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at', isDone : true },
    { modId: 'm1', modName: 'JavaScript Basics', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at    ', isDone : true },
    { modId: 'm1', modName: 'CSS : Cascading Style Sheets', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at', isDone : true },
    { modId: 'm1', modName: 'JavaScript - Advanced Concepts', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at', isDone : false },
    { modId: 'm1', modName: 'JQuery', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at', isDone : false },
    { modId: 'm1', modName: 'AJAX & API Calls', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa et vestibulum gravida. Nullam accumsan tortor metus, in lobortis metus suscipit et. Nulla in massa quis urna vulputate tincidunt. Integer aliquet lacus nibh, at feugiat risus bibendum id. Morbi quis ante est. Nulla mattis augue augue, vel viverra arcu condimentum at', isDone : false }
]


export default function Modules() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles();
 
    return (

        <React.Fragment>
            <CssBaseline />


            <Container maxWidth="lg" className={classes.box}>
                {modules.map((mod) => (
                    <Accordion onChange={handleChange(modules.modId)} className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div className={classes.column1}>
                                <img className={classes.qsIcon} src="https://icons.veryicon.com/png/o/miscellaneous/commonly-used-icon-1/angle-brackets.png" />
                            </div>
                            <div className={classes.column2}>
                                <Typography align="left" variant="h6" className={classes.heading}>
                                    <b>{mod.modName}</b>
                                </Typography>
                            </div>
                            {mod.isDone? 
                            <div className={classes.column1}>
                                <IconButton color="secondary" fontSize="small">
                                    <CheckCircleOutlineOutlined fontSize="small" />
                                </IconButton>
                            </div> 
                            : 
                            <div className={classes.column1}>
                                <IconButton color="secondary" fontSize="small">
                                    <PlayCircleFilledOutlined fontSize="small" />
                                </IconButton>
                            </div>
                            }
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography variant="body1" className={classes.text}>
                                {mod.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}
            </Container>
        </React.Fragment>

    )
}