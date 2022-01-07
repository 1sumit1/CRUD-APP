import './App.css';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import { Navbar } from './Components/Pages/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route path='/cart'><About/></Route>
      <Route path='/addUser'><AddUser/></Route>
      <Route path='/editUser/:id'><EditUser/></Route>
      <Route path='/user/:id'><User/></Route>
      <Route path='/'><Home/></Route>
      
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
