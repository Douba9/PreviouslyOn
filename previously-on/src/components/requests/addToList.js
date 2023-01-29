import axios from "axios";

async function addToList(id) {
    console.log(id);
    let res = await axios.post(`https://api.betaseries.com/shows/favorite?id=${id}&access_token=a6d0163f3913&client_id=51cd30ed23bb`)
    console.log(res);
}

export default addToList;