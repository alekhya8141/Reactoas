import { combineReducers } from "redux";
import {
  collegeReducer,
  selectedCollegeReducer,
} from "../Reducer/college_reducer";
import {
  courseReducer,
  selectedCourseReducer,
} from "../Reducer/course_reducer";
import {
  universityReducer,
  selectedUniversityReducer,
} from "../Reducer/university_reducer";
import {
  programReducer,
  selectedprogramReducer,
} from "../Reducer/program_reducer";
import {
  branchReducer,
  selectedbranchReducer,
} from "../Reducer/branch_reducer";


const rootReducer = combineReducers({
  college: collegeReducer,
  colleges: selectedCollegeReducer,
  course: courseReducer,
  courses: selectedCourseReducer,
  university: universityReducer,
  universities: selectedUniversityReducer,
  program: programReducer,
  programs: selectedprogramReducer,
  branch: branchReducer,
  branches: selectedbranchReducer,

});
export default rootReducer;