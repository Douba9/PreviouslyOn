import axios from "axios";

async function AddToList(id, token) {

    console.log(id);
    let res = await axios.post(`https://api.betaseries.com/shows/favorite?id=${id}&access_token=${token}&client_id=51cd30ed23bb`)
    console.log(res);
}

export default AddToList;