import axios from "axios";
const PROGRAM_API_BASE_URL="http://localhost:8081/program";

class ProgramService{
    async getAllPrograms() {
        return await axios.get(PROGRAM_API_BASE_URL);
      }

    async createProgram(program){
      return await axios.post(PROGRAM_API_BASE_URL,program);
    }

    async getProgramById(programId){
      return await axios.get(PROGRAM_API_BASE_URL + '/' +programId);
    }

    async updateProgram(program,programId){
      return await axios.patch(PROGRAM_API_BASE_URL + '/update/' + programId,program);
    }
    async deleteProgram(programId){
      return await axios.delete(PROGRAM_API_BASE_URL + '/delete/' + programId)
    }
  }
export default new ProgramService();