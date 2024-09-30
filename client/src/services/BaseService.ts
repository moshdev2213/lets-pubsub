import axios, { AxiosInstance } from 'axios';

class BaseService {
    private baseURL: string;
    private axiosInstance: AxiosInstance;

    constructor() {
        this.baseURL = import.meta.env.VITE_API_BASE_URL;
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
        });
    }

    // Method to get the base URL
    getBaseUrl(): string {
        return this.baseURL;
    }

    // Optional: If you want to expose the axios instance
    getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }
}

// Export the singleton instance of BaseService
export default new BaseService();
