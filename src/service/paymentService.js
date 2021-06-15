import axios from "axios";

const PAYMENT_API_BASE_URL = "http://localhost:8081/payment";

class PaymentService {
  async getAllPayment() {
    //return await axios.get(Application_API_BASE_URL + "/all");
    return await axios.get(PAYMENT_API_BASE_URL);
  }
  async createPayment(payment){
    return await axios.post(PAYMENT_API_BASE_URL,payment);
  }
  async getPaymentById(paymentId) {
    return await axios.get(PAYMENT_API_BASE_URL + "/id/" + paymentId);
  }
  async updatePayment(payment,paymentId){
    return await axios.put(PAYMENT_API_BASE_URL + "/" + paymentId,payment);
  }
  async deletePayment(paymentId) {
    return await axios.delete(PAYMENT_API_BASE_URL + "/" + paymentId);
  }
}
export default new PaymentService();
