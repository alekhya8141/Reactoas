import axios from "axios";
 const UNIVERSITY_API_BASE_URL ="http://localhost:8081/university";
   
 class UniversityService {
     async getAllUniversities(){
         return await axios.get(UNIVERSITY_API_BASE_URL);
     }
     async createUniversity(university){
         return await axios.post(UNIVERSITY_API_BASE_URL,university);
     }
     async deleteUniversityById(universityid){
        return await axios.delete(UNIVERSITY_API_BASE_URL+'/did'+'/'+universityid);
 }
 async updateUniversity(universityId,university){
    return await axios.patch(UNIVERSITY_API_BASE_URL+'/'+universityId,university);
}
async getUniversityById(universityId){
    return await axios.post(UNIVERSITY_API_BASE_URL+"/"+universityId);
}
}
 export default new UniversityService();