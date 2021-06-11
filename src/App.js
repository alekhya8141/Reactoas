import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUniversity from './components/universityModule/addUniversity';
import University  from './components/universityModule/university';
import UpdateUniversity from './components/universityModule/updateUniversity';
import AddCollege from'./components/collegeModule/addCollege';
import College  from './components/collegeModule/college';
import UpdateCollegeName from './components/collegeModule/updateCollege';
import ViewUniversity from './components/universityModule/viewUniversity';
import getCollegeByCollegeRegId from './components/collegeModule/getCollegeByCollegeRegId';
function App() {
  return (
    <Router>
      <div className="App">
    <switch>
    <Route exact path="/university/add" component={AddUniversity}/>
    <Route path= "/update-university/:universityId" component ={UpdateUniversity}/>
    <Route path= "/view-university/:universityId" component ={ViewUniversity}/>
    <Route path= "/add-university" component = {AddUniversity}/>
    <Route exact path ="/university" component={University}/>
    <Route exact path="/college/add" component={AddCollege}/>
    <Route path= "/add-college" component = {AddCollege}/>
    <Route path= "/update-college/:collegeRegId" component ={UpdateCollegeName}/>
    <Route path= "/getCollege-CollegeRegId/:collegeRegId" component ={getCollegeByCollegeRegId}/>
   <Route exact path ="/college" component={College}/>
    </switch>
    </div>
    </Router>
  );
}

export default App;
