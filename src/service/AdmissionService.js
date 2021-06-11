import axios from "axios";

const ADMISSION_API_BASE_URL = "http://localhost:8081/api/admission";

class AdmissionService
{

async ViewAdmission() {
    return await axios.get(ADMISSION_API_BASE_URL);
  }
  async CreateAdmission(admission) {
    return await axios.post(ADMISSION_API_BASE_URL, admission);
  }
  async deleteAdmissionById(admissionId) {
    return await axios.delete(ADMISSION_API_BASE_URL + "/" + admissionId);
  }
  async updateAdmission(admissionId,admission){
    return await axios.put(ADMISSION_API_BASE_URL + "/" + admissionId,admission);
  }
  async getAdmissionId(admissionId){
    return await axios.get(ADMISSION_API_BASE_URL + "/" +admissionId);
  }
}

export default new AdmissionService()