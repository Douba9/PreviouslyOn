import axios from 'axios';
import 'dotenv';

class oauth {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    async getAccessToken(code) {
        const data = {
            client_id: process.env.clientId,
            code: code,
            grant_type: 'authorization_code',
        };

        try {
            const response = await axios.post('https://api.betaseries.com/oauth/access_token', data);
            return response.data.access_token;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default oauth;
