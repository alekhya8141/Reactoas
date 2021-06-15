import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api";

class UserService{
    async getAllUsers(){
        return await axios.get(USER_API_BASE_URL+"/users");
    }
   async deleteUserByUserId(userid){
        return await axios.delete(USER_API_BASE_URL + "/users/" + userid);
    }
    async createUser(user){
    return await axios.post(USER_API_BASE_URL+"/users/add",user);
    }
    async updateUser(user,userid){
        return await axios.put(USER_API_BASE_URL+"/users/update/"+userid,user);
    }
    async viewUser(userid){
        return await axios.get(USER_API_BASE_URL+"/users/"+userid);
        }
    async login(loginentity){
        return await axios.post(USER_API_BASE_URL+"/login",loginentity);
   }  
   async logout(userid){
        return await axios.get(USER_API_BASE_URL+"/logout/"+userid);
   }          
        
}
export default new UserService();