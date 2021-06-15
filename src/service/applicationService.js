import axios from "axios";

const APPLICATION_API_BASE_URL = "http://localhost:8082/application";

class ApplicationService {

  async getAllApplication() {
    //return await axios.get(Application_API_BASE_URL + "/all");
    return await axios.get(APPLICATION_API_BASE_URL);
  }
  async createApplication(application){
    return await axios.post(APPLICATION_API_BASE_URL,application);
  }
  async getApplicationById(applicationId) {
    return await axios.get(APPLICATION_API_BASE_URL + "/id/" + applicationId);
  }
  async updateApplication(application,applicationId){
    return await axios.patch(APPLICATION_API_BASE_URL + "/" + applicationId,application);
  }
  async deleteApplication(applicationId) {
    return await axios.delete(APPLICATION_API_BASE_URL + "/" + applicationId);
  }
  async getApplicationByApplicantFullName(applicantFullName){
    return await axios.get(APPLICATION_API_BASE_URL + "/" + applicantFullName );
  }
}
export default new ApplicationService();
