import axios from 'axios'

const url = "http://localhost:5000/newspapers";

class NewspapersService {
    static async getNewspapers() {
        let res = await axios.get(url);
        return res.data;
    }
}

export default NewspapersService;
