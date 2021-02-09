import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from './molecules/SideNav'
import Home from './templates/Home'
import About from './templates/About'
import Experience from './templates/Experience'
import Education from './templates/Education'
import Award from './templates/Award';
import Skill from './templates/Skill';
import Interest from './templates/Interest';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <div className="main">
          <h1 style={{fontSize:'50px'}}>PORTOFOLIO <span style={{color:'red'}}>ONLINE</span></h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/award">
              <Award />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/interest">
              <Interest />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
