import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
        const auth = useAuth();
        const navigate = useNavigate();

        useEffect(() => {
                axiosSecure.interceptors.request.use((config: any) => {
                        const token = localStorage.getItem('access-token');
                        if (token) {
                                config.headers.Authorization = `Bearer ${token}`;
                        }
                        return config;
                });

                axiosSecure.interceptors.response.use(
                        (response: any) => response,
                        async (error: any) => {
                                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                                        await auth?.logOut();
                                        navigate('/login');
                                }
                                return Promise.reject(error);
                        }
                );
        }, [auth?.logOut, navigate, axiosSecure]);

        return [axiosSecure];
};

export default useAxiosSecure;