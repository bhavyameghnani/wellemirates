import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import music from '../../Resources/Audio/meditation.mp3'
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles((theme) => ({
    divHeading: {
      color: '#FFFFFF'
    }
  }));

function MindfulMeditation() {
    const classes = useStyles();
  return (
    <div
        style={{
        backgroundImage: `url("https://i0.wp.com/interestingliterature.com/wp-content/uploads/2018/01/river-poems.jpeg?ssl=1")`, 
    }}>
      
      <img alt="breathing" src="https://cdn.umso.co/nok5uppos9bz/assets/nv8whrub.gif" />
      <br/>
      <ReactAudioPlayer
        src={music}
        autoPlay
        controls
        />
      {/* <iframe src={music} allow="autoplay" id="audio"></iframe> */}
      <Container maxWidth="lg">
      <br/>
        <Typography variant="h5" className={classes.divHeading}>
            <b>Mindfulness is a type of meditation in which you focus on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment. Practicing mindfulness involves breathing methods, guided imagery, and other practices to relax the body and mind and help reduce stress.</b>
        </Typography>
      <br/><br/><br/><br/><br/><br/>
      </Container>
    </div>
  );
}

export default MindfulMeditation;