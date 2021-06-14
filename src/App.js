import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ListCourseComponent from './components/course/ListCourseComponent';
import CourseDetails from './components/course/CourseDetails';
import UpdateCourseComponent from './components/course/UpdateCourseComponent';
import ViewCourseComponent from './components/course/ViewCourseComponent';
import ListBranchComponent from './components/branch/ListBranchComponent';
import BranchDetails from './components/branch/BranchDetails';
import UpdateBranchComponent from './components/branch/UpdateBranchComponent';
import ViewBranchComponent from './components/branch/ViewBranchComponent';
import AdminHome from './components/AdminHome';
import ListAllUsers from './components/user/listAllUsers';
import UpdateUser from './components/user/updateUser';
import ViewUser from './components/user/viewUser';
import Register from './components/SignUpComponent';
import LoginComponent from './components/LoginComponent';
import createUser from './components/user/createUser';
import Program from './components/Programcomp/program';
import ProgramSch from './components/pschComponents/programSch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewProgram from './components/Programcomp/viewProgram';
import CreateProgram from './components/Programcomp/createProgram';
import UpdateProgram from './components/Programcomp/updateProgram';
import ViewProgramSch from './components/pschComponents/viewProgramSch';
import CreateProgramSch from './components/pschComponents/createProgramSch';
import UpdateProgramSch from './components/pschComponents/updateProgramSch';
import Home from './components/home';
import CollegePage from './components/collegePage';
import CourseHome from './components/coursehome';
import HomeLogout from './components/homeLogout';
import UniversityPage from './components/universityPage';
import addressForm from './components/Addressmodule/addressForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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

=======
</Switch>
      </div>
    </Router>
  );
}

export default App;
