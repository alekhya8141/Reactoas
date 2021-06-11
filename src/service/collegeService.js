import axios from "axios";
 const COLLEGE_API_BASE_URL ="http://localhost:8081/college";
   
 class CollegeService {
 async getAllCollege(){
         return await axios.get(COLLEGE_API_BASE_URL);
     }
async addCollege(college){
         return await axios.post(COLLEGE_API_BASE_URL,college);
}
 async deleteCollegeByCollegeRegId(collegeRegId){
    return await axios.delete(COLLEGE_API_BASE_URL+'/did'+'/'+collegeRegId);
 }
 async updateCollegeName(collegeRegId,college){
    return await axios.patch(COLLEGE_API_BASE_URL+ '/cid'+'/'+collegeRegId,college);
 }
async getCollegeByCollegeRegId(collegeRegId){
    return await axios.get(COLLEGE_API_BASE_URL+ '/id'+"/"+collegeRegId);
}
}
 export default new CollegeService();