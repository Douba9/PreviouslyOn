import { useState } from 'react';
import { useCookies } from 'react-cookie'
import oauth from './requests/oauth.js';

export default function GetToken() {

    const [token, setToken] = useState('');
    const [cookies, setCookie] = useCookies(['access_token']);

    const myOAuth = new oauth();
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const res = myOAuth.getAccessToken(code);

    res.then(data => setToken(data.access_token))
        .catch(err => console.log(err));

    if (!cookies['access_token']) {
        let expires = new Date()
        expires.setTime(expires.getTime() + (60 * 1000));
        setCookie('access_token', token, { path: '/', expires })
    }

    if (cookies['access_token'].length > 0) {
        window.location = "http://vps-9741b19a.vps.ovh.net:3000/Home";
    } else {
        return <p>An error has occurred</p>;
    }

    return (
        <div>
            <p>Authentification...</p>
        </div>
    );
}