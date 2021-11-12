import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import DeskExercise from './Components/DeskExercise/DeskExercise';
import AskMeAnything from './Components/AMA/AskMeAnything';
import UpskillPage from './Components/UpskillPage/Upskill';
import Blog from './Components/Blog/Blog';
import Course from './Components/Course/Course'
import Health from './Components/HealthLanding/Health'
import CommunityConnect from './Components/CommunityConnect/CommunityConnect';
import Meditation from './Components/Meditation/Meditation';
import ProfileMain from './Components/Profile/ProfileMain';
import Affirmations from './Components/Affirmations/Affirmations';
import BreathingExercise from './Components/Meditation/BreathingExercise';
import MindfulMeditation from './Components/Meditation/MindfulMeditation';
import WorkLanding from './Components/Work/WorkLanding';
import MindNote from './Components/Work/MindNote';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/deskexercise" component={DeskExercise}/>
            <Route exact path="/upskillzo" component={UpskillPage}/>
            <Route exact path="/askmeanything" component={AskMeAnything}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/health" component={Health}/>
            <Route exact path="/meditation" component={Meditation}/>
            <Route exact path="/communityconnect" component={CommunityConnect}/>
            <Route exact path="/profile" component={ProfileMain}/>
            <Route exact path="/affirmations" component={Affirmations}/>
            <Route exact path="/breathing" component={BreathingExercise}/>
            <Route exact path="/mindfulmedi" component={MindfulMeditation}/>
            <Route exact path="/work" component={WorkLanding}/>
            <Route exact path="/note" component={MindNote}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;