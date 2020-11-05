import axios from 'axios'

const url = "http://localhost:5000/subscriptions";

class SubscriptionsService {
    static async getSubscriptions() {
        let res = await axios.get(url);
        return res.data;
    }
    static async insertSubscription(newSubscription) {
        return axios.post(url, newSubscription);
    }
}

export default SubscriptionsService;
