import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CalendarComponent from './CalendarComponent';
import ChipInput from 'material-ui-chip-input'
import Learnings from './Learnings';
import Articles from './Articles';
import toast, { Toaster } from 'react-hot-toast';
import Events from './Events';
import Tracks from './Tracks';
//import Link from '@material-ui/core/Link';

const notifyRecommendCourse = () => {
    console.log("here")
    toast.success("Check out blogs recommended for you !", {
        icon: '🔥',
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
    column3: {
        width: '100%',
        height: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
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
        maxWidth: '10%',
        maxHeight: '10%',
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
    chips: {
        color: 'yellow'
    }
}));

const featuredCourses = [
    {
        title: 'Git Crash Course',
        value: '60',
        description: 'Description of course here...',
        icon: "https://image.flaticon.com/icons/png/128/1680/1680899.png",
    },
    {
        title: 'Communication Skills',
        value: '70',
        description: 'Description of course here...',
        icon: "https://image.flaticon.com/icons/png/128/1239/1239689.png",
    },
];

const tracks = [
    {
        title: 'Frontend Developer Track',
        value: '60',
    },
];

const featuredBlogs = [
    {
        title: 'How Starting a Blog Can Benefit Your Career',
        description: 'Description of course here...',
        icon: "https://image.flaticon.com/icons/png/128/4660/4660439.png",
    },
    {
        title: 'How to Work From Home : Remote Work Tips',
        description: 'Description of course here...',
        icon: "https://image.flaticon.com/icons/png/128/2876/2876613.png",
    },
];

const javaCourse = {
    title: 'What\'s new in Java 11 : Features Listdown',
    description: 'Description of course here...',
    icon: "https://image.flaticon.com/icons/png/128/226/226777.png",
}

const pythonCourse = {
    title: 'Get started with Python today!',
    description: 'Description of course here...',
    icon: "https://image.flaticon.com/icons/png/128/1387/1387537.png",
}

const initialChipList = [
];

const learningEvents = [
    {
        title: 'Aspire program',
        description: 'Our Aspire program targets high potential senior executives as they prepare to become managers.',
        date: '20/7/21 - 24/7/21'
    },
    {
        title: 'EY Vantage program',
        description: 'The EY Vantage program works to support high-impact entrepreneurs in emerging markets.',
        date: '20/7/21 - 24/7/21'
    },
];

export default function MainContent(props) {
    const classes = useStyles();
    const { post } = props;
    const [chipList, setChipList] = React.useState(initialChipList);
    var [blogs, setBlogs] = React.useState(featuredBlogs);

    function handleAddChip(chip) {
        setChipList(prev => [...prev, chip]);
        if(chip.toLowerCase() === 'java'){
            setBlogs(prevCourses => [...prevCourses, javaCourse]);
        }
        if(chip.toLowerCase() === 'python'){
            setBlogs(prevCourses => [...prevCourses, pythonCourse]);
        }
    }

    function handleDeleteChip(chip) {
        setChipList()
        setBlogs(featuredBlogs);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // const interval = setInterval(() => {
        //     // console.log('This will run every second!');
        //     notifyRecommendCourse();
        // }, 15000);
        // return () => clearInterval(interval);
    });



    return (
        <div className="container">
            <br />
            <Typography variant="h5" align="center" className={classes.divHeading}>
                <b>What's next?</b>
            </Typography>
            <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                Let us know your Interests :
            </Typography>
            <ChipInput variant="outlined"
                fullWidth
                className={classes.chips}
                value={chipList}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
            <br /><br />
            <div className={classes.column1}>
                <Typography variant="subtitle1" align="left" gutterBottom className={classes.subHeading}>
                    New Blogs Suggestions For You!
                </Typography>
                <div className={classes.column3}>
                    <Articles blogs={blogs} />
                </div>
                <br />
                <Typography variant="subtitle1" align="left" gutterBottom className={classes.subHeading}>
                    Learnings in Progress :
                </Typography>
                <Learnings learnings={featuredCourses} />
                
                <br />
                <Typography variant="subtitle1" align="left" gutterBottom className={classes.subHeading}>
                    Track Specific Progress :
                </Typography>
                <Tracks track={tracks} />
                
                <br />
                <Typography variant="subtitle1" align="left" gutterBottom className={classes.subHeading}>
                    Upcoming Learning Events : 
                </Typography>
                <Events learningEvents={learningEvents} />


            </div>
            <div className={classes.column2}>
                <Grid xs={12}>
                    <Typography variant="subtitle1" align="left" className={classes.subHeading} gutterBottom>
                        Your Learning Streaks!
                    </Typography>
                    <Typography variant="body1" align="left" gutterBottom className={classes.desc}>
                        Great going! Don't let your streak break.
                        <br/>
                        Points: 20
                    </Typography>
                    <CalendarComponent />
                </Grid>

            </div>
        </div>
    );
}

MainContent.propTypes = {
    post: PropTypes.object,
};