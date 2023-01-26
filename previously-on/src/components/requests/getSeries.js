import axios from "axios";

const GetSeries = async () => {
    let res = await axios.get("https://api.betaseries.com/shows/discover?client_id=51cd30ed23bb")
    return res;
}

export default GetSeries;