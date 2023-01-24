import { useState } from 'react';
import oauth from './requests/oauth.js';

export default function GetToken() {

    const [token, setToken] = useState('');

    const myOAuth = new oauth();
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const res = myOAuth.getAccessToken(code);

    res.then(data => setToken(data.access_token));

    return (
        <div>
            {token ? <p>Access token: {token}</p> : <p>Error getting access token</p>}
        </div>
    );
}