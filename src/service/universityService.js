import axios from "axios";
 const UNIVERSITY_API_BASE_URL ="http://localhost:8081/university";
   
 class UniversityService {
     async getAllUniversity(){
         return await axios.get(UNIVERSITY_API_BASE_URL);
     }
     async addUniversity(university){
         return await axios.post(UNIVERSITY_API_BASE_URL,university);
     }
     async deleteUniversityById(universityId){
        return await axios.delete(UNIVERSITY_API_BASE_URL+'/did'+'/'+universityId);
 }
 async updateUniversity(universityId,university){
    return await axios.patch(UNIVERSITY_API_BASE_URL+'/'+universityId,university);
}
async getUniversityById(universityId){
    return await axios.get(UNIVERSITY_API_BASE_URL + '/id' +"/"+universityId);
}
}
 export default new UniversityService()
 
