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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import EditIcon from '@material-ui/icons/Edit';
import MicIcon from '@material-ui/icons/Mic';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import toast, { Toaster } from 'react-hot-toast';

//speech
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
// import Header from './Header';

import mentourImage from '../../Resources/Images/mentour_img.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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

const qnasAll = [
    { qnaid: 'q1', likes: '20', category: 'Health', question: 'I don\'t feel like working today', answer: 'Here are a few strategies you can use.\n 1) Go home. If you\'re feeling like you need a day off, get up from your desk and leave the office right now. Head to the golf course, go back to bed, get your wallet and go to the mall. Let yourself have the time off to rest and replenish.\n 2) Reward yourself. Set a reward so you\'ll move beyond the blahs into productivity.\n3) Get up and move. One of the best ways to change your feelings is to change your body. It\'s easy to get frustrated and annoyed when you\'re sitting at your desk 10 hours a day, five days a week.', askedOn: '', answeredOn: '' },
    { qnaid: 'q2', likes: '10', category: 'Productivity', question: 'How to set goals ?', answer: 'You set your goals on a number of levels: \n - First you create your "big picture" of what you want to do with your life (or over, say, the next 10 years), and identify the large-scale goals that you want to achieve. \n- Then, you break these down into the smaller and smaller targets that you must hit to reach your lifetime goals. \n- Finally, once you have your plan, you start working on it to achieve these goals.', askedOn: '', answeredOn: '' },
    { qnaid: 'q3', likes: '2', category: 'Productivity', question: 'How to be productive ?', answer: 'Streamline your space: Before you do anything else, take a few moments at the start of each day to organize and declutter your workspace. Having a clutter-free environment helps you think more clearly and produce better results \n\n Prioritize and delegate your other tasks : Your focus should go to the most important tasks first, so think about everything that you do and just how pivotal or trivial each thing is. If you can, set aside the low-priority items, and come up with a plan to delegate or outsource them so you can spend more time on the things that add more value to your position and the company. \n\n Take short breaks : Whether it\'s a walk around the block, a run to the nearby coffee shop, reading a magazine or visiting with a colleague, taking short breaks that are unrelated to your work can make a huge difference in your performance.', askedOn: '', answeredOn: '' },
    { qnaid: 'q4', likes: '5', category: 'Behaviour', question: 'I am having frequent conflicts with team members', answer: 'As soon as you can agree that conflict is happening and that something needs to be done, it is a good idea to look at the process as being more than one step.\n\nAfter all, each conflict will require different actions and methods to help get it to resolution. One system that can be helpful is to start by approaching the person who is in conflict and trying to work on the problem together.\n\nWhen you are in a conflict situation with someone else, it can help to sit down with him or her first. You might do this without anyone else around, so you can have an open discussion to figure out what is happening and what might be done next.\n\nThis process or system may not work for everyone, but it might be just what you need to start turning a conflict into a productive situation.', askedOn: '', answeredOn: '' },
];

const qnasMy = [
    { qnaid: 'q2', likes: '10', category: 'Productivity', question: 'How to set goals ?', answer: 'You set your goals on a number of levels: \n - First you create your "big picture" of what you want to do with your life (or over, say, the next 10 years), and identify the large-scale goals that you want to achieve. \n- Then, you break these down into the smaller and smaller targets that you must hit to reach your lifetime goals. \n- Finally, once you have your plan, you start working on it to achieve these goals.', askedOn: '', answeredOn: '' },
    { qnaid: 'q3', likes: '2', category: 'Productivity', question: 'How to be productive ?', answer: 'Streamline your space: Before you do anything else, take a few moments at the start of each day to organize and declutter your workspace. Having a clutter-free environment helps you think more clearly and produce better results \n\n Prioritize and delegate your other tasks : Your focus should go to the most important tasks first, so think about everything that you do and just how pivotal or trivial each thing is. If you can, set aside the low-priority items, and come up with a plan to delegate or outsource them so you can spend more time on the things that add more value to your position and the company. \n\n Take short breaks : Whether it\'s a walk around the block, a run to the nearby coffee shop, reading a magazine or visiting with a colleague, taking short breaks that are unrelated to your work can make a huge difference in your performance.', askedOn: '', answeredOn: '' },
];

const articles = [
    { qnaid: 'q7', likes: '170', category: 'Productivity', question: 'how to increase productivity at work ? ', answer: 'The solution is simple, though not always easy. We can replace our bad habits and reactive patterns with good habits that will make us proactive, and take charge of our own workdays. Follow these tips on how to increase productivity and become your best, most productive self at work.', askedOn: '', answeredOn: '' },
    { qnaid: 'q8', likes: '160', category: 'Health', question: 'What is work fatigue and how is it different than just being tired? ', answer: 'The Mayo Clinic defines work fatigue as, unrelenting exhaustion that isn’t relieved by rest, a nearly constant state of weariness that develops over time, reducing your energy, motivation, and concentration. Much like burnout, work fatigue is a constant state of tiredness that won’t go away. Eventually, it seeps into other aspects of your life and makes it harder to focus, feel motivated, and even disconnect from work.', askedOn: '', answeredOn: '' },
];

export default function AskMeAnything() {

    const [allQnaList, setAllQnaList] = React.useState(qnasAll);
    const [myQnaList, setMyQnaList] = React.useState(qnasMy);
    const [articleList, setArticleList] = React.useState(articles);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const tabName = "all";
    const [qnasSelect, setQnasSelect] = React.useState(qnasAll);

    const [open, setOpen] = React.useState(false);
    const [openSpeak, setOpenSpeak] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const { transcript, resetTranscript } = useSpeechRecognition();

    const [inputQuestion, setinputQuestion] = React.useState('');
    const [spokenQuestion, setSpokenQuestion] = React.useState('');

    const [questionToEditObj, setquestionToEditObj] = React.useState({});

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    });

    useEffect(() => {
        notifyWelcome();
      }, []);

    function stopCapture() {
        SpeechRecognition.stopListening();
        console.log("heard :: " + transcript);
        // speak({ text: "This is a Reminder for" +transcript, rate:0.9 })
        setSpokenQuestion(transcript);
        console.log("question :: " + spokenQuestion);
    }

    function resetSpokenQuestion() {
        resetTranscript();
        setSpokenQuestion('');
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenSpeak = () => {
        setOpenSpeak(true);
    };

    const handleClickOpenEdit = (questionToEditObj_input) => {

        if (questionToEditObj_input.answer) {
            notifyCannotUpdate();
        }
        else {
            setquestionToEditObj(questionToEditObj_input);
            console.log(questionToEditObj);
            setOpenEdit(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSpeak = () => {
        setOpenSpeak(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleAddQuestionText = () => {
        console.log("inside add submit")
        if (inputQuestion !== '') {
            let inputQuesObj = {
                qnaid: 'q10',
                likes: '0',
                category: 'Health',
                question: inputQuestion,
                answer: '',
                askedOn: '',
                answeredOn: ''
            }
            setMyQnaList(prevArray => [...prevArray, inputQuesObj]);
        }
        handleClose();
        notifyAddQuestion();
        setQnasSelect(myQnaList);
    };

    const handleAddQuestionSpeak = () => {
        console.log("inside add submit")
        if (spokenQuestion !== '') {
            let inputQuesObj = {
                qnaid: 'q10',
                likes: '0',
                category: 'Health',
                question: spokenQuestion,
                answer: '',
                askedOn: '',
                answeredOn: ''
            }
            setMyQnaList(prevArray => [...prevArray, inputQuesObj]);
        }
        handleCloseSpeak();
        notifyAddQuestion();
    };

    const handleEditQuestion = () => {
        console.log("inside edit submit")
        console.log(questionToEditObj)

    };


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function handleChangeTab(event, newValue) {

        if (newValue === 'all') {
            console.log("all")
            setQnasSelect(allQnaList);
        }
        else if (newValue === 'my') {
            console.log("my")
            setQnasSelect(myQnaList);
        }
        else if (newValue === 'arts') {
            console.log("arts")
            setQnasSelect(articleList);
        }
        console.log(qnasSelect);
        setValue(newValue);
    }

    //notifications functions
    const notifyAddQuestion = () => {
        toast.success("Great! Your question is submitted.", {
            icon: '🔥',
        });

    };

    const notifyCannotUpdate = () => {
        toast.error("Sorry! Your question is already answered. You cannot edit it.");

    };

    const notifyWelcome = () => {
        console.log("here")
        toast.success("Mentour welcomes you !");
      
      };

    return (

        <React.Fragment>
            <CssBaseline />


            <Container maxWidth="lg">

                <Header title="Ask Me Anything - Take a tour inside your mind" />
                <div className={classes.paper}>
                    <img alt="ask me anything" width="100%" height="300" src={mentourImage} />
                </div>
                <div className={classes.overlay} />
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChangeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="All Questions" value="all" />
                        <Tab label="My Questions" value="my" />
                        <Tab label="Frequents" value="arts" />
                    </Tabs>
                </Paper>
                <br />
                <div style={{ height: 70 }}>
                    <Tooltip title="Type your question" aria-label="add">
                        <Fab color="primary" size="small" className={classes.fab} onClick={handleClickOpen}>
                            <KeyboardIcon />
                        </Fab>
                    </Tooltip>
                        &nbsp;
                        &nbsp;
                        <Tooltip title="Speak your question" aria-label="speak">
                        <Fab color="primary" size="small" className={classes.fab} onClick={handleClickOpenSpeak}>
                            <MicIcon />
                        </Fab>
                    </Tooltip>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        {/* <DialogTitle id="form-dialog-title">You don't have to struggle in silence...</DialogTitle> */}
                        <DialogContent>
                            <DialogContentText align="center">
                                Healing takes time, and asking for help is a courageous step.<br />
                                We are here to help you!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Enter Your Queries"
                                type="Question"
                                value={inputQuestion}
                                onChange={(e) => setinputQuestion(e.target.value)}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleAddQuestionText} color="primary">
                                Submit
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog open={openSpeak} onClose={handleCloseSpeak} aria-labelledby="form-dialog-title">
                        {/* <DialogTitle id="form-dialog-title">You don't have to struggle in silence...</DialogTitle> */}
                        <DialogContent>
                            <DialogContentText align="center">
                                Healing takes time, and asking for help is a courageous step.<br />
                                We are here to help you!
                            </DialogContentText>
                            <Button onClick={SpeechRecognition.startListening} color="primary">
                                Start Speaking
                                </Button>
                            <Button onClick={stopCapture} color="primary">
                                Stop Speaking
                                </Button>
                            <Button onClick={resetSpokenQuestion} color="primary">
                                Reset question
                                </Button>
                            <Typography align="center" variant="h6" className={classes.heading}>
                                <b> {spokenQuestion}</b>
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleAddQuestionSpeak} color="primary">
                                Submit
                                </Button>
                            <Button onClick={handleCloseSpeak} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                        {/* <DialogTitle id="form-dialog-title">You don't have to struggle in silence...</DialogTitle> */}
                        <DialogContent>
                            <DialogContentText align="center">
                                Edit your question here. You cannot edit a question after it is answered.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Enter Your Queries"
                                type="Question"
                                value={questionToEditObj.question}
                                onChange={(e) => setquestionToEditObj({ question: e.target.value })}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleEditQuestion} color="primary">
                                Submit
                            </Button>
                            <Button onClick={handleCloseEdit} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {qnasSelect.map((qna) => (
                    <Accordion expanded={expanded === qna.qnaid} onChange={handleChange(qna.qnaid)} className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            {value === 'my' &&
                                <Button title="Edit your question" color="primary" onClick={() => handleClickOpenEdit(qna)}><EditIcon /></Button>
                            }

                            <div className={classes.column1}>
                                <img className={classes.qsIcon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8dGRslQ8heJP3-NhoaDbtVn6FT0xR_rAhw&usqp=CAU" />
                            </div>
                            <div className={classes.column2}>
                                <Typography align="left" variant="h6" className={classes.heading}>
                                    <b>{qna.question}</b>
                                </Typography>
                            </div>
                            <div className={classes.column1}>
                                <Chip variant="default" color="primary" label={qna.category} />
                            </div>
                            <div className={classes.column1}>
                                <IconButton color="secondary" fontSize="small" className={classes.qsIcon}>
                                    <FavoriteTwoToneIcon fontSize="small" />
                                    <Typography align="left">
                                        {qna.likes}
                                    </Typography>
                                </IconButton>
                            </div>


                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={classes.column1}>
                                <img className={classes.qsIcon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKt5C7oJmgJEIlspgzg3cYaW1WGHI4l9YU-3OePAB4Mct3CbBrBJTE_ewJSLcJYZb_38&usqp=CAU" />
                            </div>
                            <div className={classes.column2}>

                           { qna.answer.split('\n').map(i =>
                                <Typography align="justify">
                                    {(i === '') ? 'Not answered yet' : i}
                                </Typography>
                           )}
                            </div>
                        </AccordionDetails>
                    </Accordion>

                ))}


            </Container>



        </React.Fragment>

    )
}