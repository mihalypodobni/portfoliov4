//TODO Primary:
//Figure out why imgsrc won't work

//TODO Secondary:
//Finish implementing Dark mode
//Add dark mode button
//Update operators
//Map elements as Styled Components??


import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ProjectDetails from './pages/projectdetails'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path ="/" component={Home} exact/>
        <Route path ="/project" component={ProjectDetails} exact/>
      </Switch>
    </Router>
  );
} 

export default App;