import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons'; // if applicable

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Space Travelers' Hub</NavLink>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Rockets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/missions">Missions</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">My Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dragons">Dragons</NavLink> {/* if applicable */}
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Switch>
        <Route exact path="/" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/dragons" component={Dragons} /> {/* if applicable */}
      </Switch>
    </Router>
  );
}

export default App;
