import axios from 'axios';
import BaseService from './BaseService';

class PublisherService {
    private PUBLISH_MSG_URL: string;

    constructor() {
        this.PUBLISH_MSG_URL = `${BaseService.getBaseUrl()}publish`;
    }

    publishMessage(): Promise<any> {
        const data = {
            message: 'Hello',
        };
        return axios.post(this.PUBLISH_MSG_URL, data);
    }
}

// Export the singleton instance of PublisherService
export default new PublisherService();
