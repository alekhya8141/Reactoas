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

const rootReducer = combineReducers({
  college: collegeReducer,
  colleges: selectedCollegeReducer,
  course: courseReducer,
  courses: selectedCourseReducer,
  university: universityReducer,
  universities: selectedUniversityReducer,
});
export default rootReducer;