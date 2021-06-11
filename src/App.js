import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'./components/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUniversity from'./components/addUniversity';
import University  from './components/university';
import Address from './component/Addressmodule/Address';
import Document from './component/Documentmodule/Document';
import createDocument from'./component/Documentmodule/CreateDocument';
import updateDocument from './component/Documentmodule/updateDocument';
import getDocumentId from './component/Documentmodule/getDocumentId';
import Admission from './component/Admissionmodule/Admission';
import createAddress from './component/Addressmodule/CreateAddress';
import getAddressId from './component/Addressmodule/getAddressId';
import updateAddress from './component/Addressmodule/updateAddress';
import CreateAdmission from './component/Admissionmodule/CreateAdmission';
import updateAdmission from './component/Admissionmodule/updateAdmission';
import getAdmissionId from './component/Admissionmodule/getAdmissionId';
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
    <Route path= "/document" exact component = {Document}></Route>
                <Route path= "/document" component = {Document}></Route>
                <Route path= "/admission" component = {Admission}></Route>
                <Route path= "/add-document" component = {createDocument}></Route>
                <Route path="/update-document/:documentid" component = {updateDocument}></Route>
                <Route path ="/get-addressId/:addressId" component ={getAddressId}></Route>
                <Route path ="/get-documentid/:documentid" component ={getDocumentId}></Route>
                <Route path="/update-address/:addressId" component = {updateAddress}></Route>
                <Route path="/update-admission/:admissionId" component = {updateAdmission}></Route>
                <Route path ="/get-admissionId/:admissionId" component ={getAdmissionId}></Route>
                    <Route path= "/address" exact component = {Address}></Route>
                    <Route path= "/address" component = {Address}></Route>
                    <Route path= "/add-address" component = {createAddress}></Route>
                    <Route path= "/add-admission" component = {CreateAdmission}></Route>
                    <Route path= "/admissionform" component = {Admissionform}></Route>
                    <Route path= "/documentform" component = {Documentform}></Route>
    </switch>
    </div>
    </Router>
  );
}

export default App;
