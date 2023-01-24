import React from 'react';

function Welcome() {
    const clientID = "51cd30ed23bb";
    const redirectUri = "http://vps-9741b19a.vps.ovh.net:3000/auth/get_token";

    const url = `https://www.betaseries.com/authorize?client_id=${clientID}&redirect_uri=${redirectUri}`;
    console.log(url);

    return (
        <div>
            <a name="auth" type="button" href={url} >AUTH</a>
        </div>
    );
}

export default Welcome;