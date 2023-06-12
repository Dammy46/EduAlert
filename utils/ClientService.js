import axios from "axios";

const BASE_URL = "https://edualert.skinx.skin";

class ClientService {
  staffAccount(data) {
    return axios.post(`${BASE_URL}/staff_register.php`, data);
  }

  studentAccount(data) {
    return axios.post(`${BASE_URL}/student_register.php`, data);
  }
}

export default new ClientService();
