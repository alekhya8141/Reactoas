import axios from "axios";

const ADDRESS_API_BASE_URL = "http://localhost:8081/api/address";

class AddressService
{

async getAddress() {
    return await axios.get(ADDRESS_API_BASE_URL);
  }

  async deleteAddressById(addressId) {
    return await axios.delete(ADDRESS_API_BASE_URL + "/" + addressId);
  }
  async CreateAddress(address) {
    //return await axios.post(STUDENT_API_BASE_URL + "/add", student);
    return await axios.post(ADDRESS_API_BASE_URL, address);
  }
  async getAddressId(addressId){
    return await axios.get(ADDRESS_API_BASE_URL + "/" +addressId);
  }
  async updateAddress(addressId,address){
    return await axios.put(ADDRESS_API_BASE_URL + "/" + addressId,address);
  }
}

export default new AddressService()