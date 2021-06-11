import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUniversity from './components/universityModule/addUniversity';
import University from './components/universityModule/university';
import UpdateUniversity from './components/universityModule/updateUniversity';
import AddCollege from './components/collegeModule/addCollege';
import College from './components/collegeModule/college';
import Address from './components/Addressmodule/Address';
import Document from './components/Documentmodule/Document';
import createDocument from './components/Documentmodule/CreateDocument';
import updateDocument from './components/Documentmodule/updateDocument';
import getDocumentId from './components/Documentmodule/getDocumentId';
import Admission from './components/Admissionmodule/Admission';
import createAddress from './components/Addressmodule/CreateAddress';
import getAddressId from './components/Addressmodule/getAddressId';
import updateAddress from './components/Addressmodule/updateAddress';
import CreateAdmission from './components/Admissionmodule/CreateAdmission';
import updateAdmission from './components/Admissionmodule/updateAdmission';
import getAdmissionId from './components/Admissionmodule/getAdmissionId';
import Documentform from './components/Documentmodule/Documentform';
import UpdateCollegeName from './components/collegeModule/updateCollege';
import ViewUniversity from './components/universityModule/viewUniversity';
import getCollegeByCollegeRegId from './components/collegeModule/getCollegeByCollegeRegId';
import Application from './components/ApplicationModule/application';
import ViewApplication from './components/ApplicationModule/viewApplication';
import UpdateApplication from './components/ApplicationModule/updateApplication';
import Payment from './components/PaymentModule/payment';
import UpdatePayment from './components/PaymentModule/updatePayment';
import ViewPayment from './components/PaymentModule/viewPayment';
import PaymentMethod from "./components/PaymentModule/paymentPage";
import ApplicationForm from "./components/ApplicationModule/applicationPage"
import ApplicationDetails from "./components/ApplicationModule/applicationDetails"


function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/university/add" component={AddUniversity} />
          <Route path="/update-university/:universityId" component={UpdateUniversity} />
          <Route path="/view-university/:universityId" component={ViewUniversity} />
          <Route path="/add-university" component={AddUniversity} />
          <Route exact path="/university" component={University} />
          <Route exact path="/college/add" component={AddCollege} />
          <Route path="/add-college" component={AddCollege} />
          <Route path="/update-college/:collegeRegId" component={UpdateCollegeName} />
          <Route path="/getCollege-CollegeRegId/:collegeRegId" component={getCollegeByCollegeRegId} />
          <Route exact path="/college" component={College} />
          <Route path="/document" component={Document}></Route>
          <Route path="/admission" component={Admission}></Route>
          <Route path="/add-document" component={createDocument}></Route>
          <Route path="/update-document/:documentid" component={updateDocument}></Route>
          <Route path="/get-addressId/:addressId" component={getAddressId}></Route>
          <Route path="/get-documentid/:documentid" component={getDocumentId}></Route>
          <Route path="/update-address/:addressId" component={updateAddress}></Route>
          <Route path="/update-admission/:admissionId" component={updateAdmission}></Route>
          <Route path="/get-admissionId/:admissionId" component={getAdmissionId}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/add-address" component={createAddress}></Route>
          <Route path="/add-admission" component={CreateAdmission}></Route>
          <Route path="/documentform" component={Documentform}></Route>
          <Route path="/applications" component={Application}></Route>
           <Route path ="/view-applications/:applicationId" exact component ={ViewApplication}></Route>
           <Route path="/update-applications/:applicationId" component = {UpdateApplication}></Route>   
           <Route path="/payments" component={Payment}></Route>
           <Route path ="/view-payments/:paymentId" exact component ={ViewPayment}></Route>
           <Route path="/update-payments/:paymentId" component = {UpdatePayment}></Route>
           <Route path="/makepayment" component={PaymentMethod}></Route>
           <Route path="/applicationform" component={ApplicationForm}></Route>
           <Route path="/a" component={ApplicationDetails}></Route>


        </switch>
      </div>
    </Router>
  );
}

export default App;
