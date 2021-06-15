import axios from "axios";
const PROGRAMSCH_API_BASE_URL="http://localhost:8082//programscheduled";

class ProgramSchService{
    async getAllProgramSchedule() {
        return await axios.get(PROGRAMSCH_API_BASE_URL);
      }
      async createProgramSch(programscheduled){
        return await axios.post(PROGRAMSCH_API_BASE_URL,programscheduled);
      }
  
      async getProgramByScheduleId(scheduleId){
        return await axios.get(PROGRAMSCH_API_BASE_URL + '/' +scheduleId);
      }
  
      async updateProgramSchedule(programscheduled,scheduleId){
        return await axios.put(PROGRAMSCH_API_BASE_URL + '/' + scheduleId,programscheduled);
      }
      async deleteProgramSchedule(scheduleId){
        return await axios.delete(PROGRAMSCH_API_BASE_URL + '/scheduleid/' + scheduleId)
      }
    }
export default new ProgramSchService();


