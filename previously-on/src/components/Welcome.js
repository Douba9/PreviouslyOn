import React from 'react';
import axios from 'axios';
// import 'dotenv';
// import oauth from './requests/oauth.js';

function Welcome() {
    // const myOAuth = new oauth();
    // const token = myOAuth.getAccessToken("yourCode")
    // console.log(token);
    authorize();
    return (
        <div>
            {/* {token ? <p>Access token: {token}</p> : <p>Error getting access token</p>} */}
        </div>
    );
}

function authorize() {

    let data = {
        client_id: process.env.clientId,
        redirect_uri: "http://vps-9741b19a.vps.ovh.net:3000/auth/get_token"
    }

    axios.post("https://www.betaseries.com/authorize", data)
    .then(response => console.log(response))
    .catch(err => console.log(err));

}

export default Welcome;