import axios from 'axios';

const COURSE_API_BASE_URL = "http://localhost:8081/api/course";

class CourseService {
    async getAllCourse() {
      return await axios.get(COURSE_API_BASE_URL);
    }
    async createCourse(course) {
      return await axios.post(COURSE_API_BASE_URL, course);
    }
    async getCourseById(courseId){
      return await axios.get(COURSE_API_BASE_URL + '/id' + '/' + courseId);
    }
    async updateCourse(courseId,course){
      return axios.put(COURSE_API_BASE_URL+ '/' +courseId, course);
    }
    async deleteCourse(courseId){
      return axios.delete(COURSE_API_BASE_URL + '/did' + '/' +courseId);
    }
  } 
export default new CourseService()