import axios from 'axios';

const BRANCH_API_BASE_URL = "http://localhost:8081/api/branch";

class BranchService {
    async getAllBranch() {
      return await axios.get(BRANCH_API_BASE_URL);
    }
    async createBranch(branch) {
        return await axios.post(BRANCH_API_BASE_URL, branch);
      }
    async getBranchById(branchId){
        return await axios.get(BRANCH_API_BASE_URL + '/id/' + branchId);
      }
    async updateBranch(branchId,branch){
        return axios.put(BRANCH_API_BASE_URL+ '/' +branchId, branch);
      }
    async deleteBranch(branchId){
        return axios.delete(BRANCH_API_BASE_URL + '/did/' + branchId);
      }
}
export default new BranchService()