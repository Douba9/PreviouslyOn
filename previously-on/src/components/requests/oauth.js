import axios from 'axios';

class oauth {
    constructor() {
        this.clientId = "51cd30ed23bb";
        this.clientSecret = "6cf2aca084a34d12b81d1d1a670b97df";
        this.redirect_uri = "http://vps-9741b19a.vps.ovh.net:3000/auth/get_token";
    }

    async getAccessToken(code) {
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirect_uri,
            code: code
        };

        try {
            let response = axios.post('https://api.betaseries.com/oauth/access_token', data)
            return (await response).data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default oauth;