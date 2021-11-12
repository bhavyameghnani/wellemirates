import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import music from '../../Resources/Audio/breathing.mp3'
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles((theme) => ({
    divHeading: {
      color: '#FFFFFF'
    }
  }));

function BreathingExercise() {
    const classes = useStyles();
  return (
    <div
        style={{
        backgroundImage: `url("https://mlpa57bp9tht.i.optimole.com/vIPIIGI.bvRk~7733/w:1255/h:835/q:auto/https://thejoyfuldabbler.com/wp-content/uploads/2021/04/green-forest-with-path-and-stream.jpg")`, 
    }}>
      
      <img alt="breathing" src="https://studio.code.org/v3/assets/rkFLVPs0l8fowTp2STej47105shewzrBtgoTHX_yNiA/Ladymeditating.gif" />
      <br/>
      <ReactAudioPlayer
        src={music}
        autoPlay
        controls
        />
      {/* <iframe src={music} allow="autoplay" id="audio"></iframe> */}
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.divHeading}>
            <b>Breathing exercises will help strengthen the cardiovascular muscles and improve blood pressure. Regular deep breathing also decreases the chances of stroke. Regular breathing exercises can improve focus and concentration.</b>
        </Typography>
       <br/>
      </Container>
    </div>
  );
}

export default BreathingExercise;