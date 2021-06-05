import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'./components/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUniversity from'./components/addUniversity';
import University  from './components/university';
import UpdateUniversity from './components/updateUniversity';

function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <switch>
    <Route exact path="/university/add" component={AddUniversity}/>
    <Route exact path="/university/get/:id" component={UniversityUniversity}/>
    <Route exact path="/university/update/:id" component={UniversityUniversity}/>
    <Route exact path ="/university" component={University}/>
    </switch>
    </div>
    </Router>
  );
}

export default App;
