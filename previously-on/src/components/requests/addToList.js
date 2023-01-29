import axios from "axios";
import { useCookies } from 'react-cookie';

async function AddToList(id) {
    let [cookies] = useCookies(['access_token']);

    console.log(id);
    let res = await axios.post(`https://api.betaseries.com/shows/favorite?id=${id}&access_token=${cookies['access_token']}&client_id=51cd30ed23bb`)
    console.log(res);
}

export default AddToList;