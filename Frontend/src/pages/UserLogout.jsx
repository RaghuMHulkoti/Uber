import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/logout`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Logout failed:', error.message);
                // Optional: Show an error message to the user or navigate to an error page.
            }
        };

        logoutUser();
    }, [token, navigate]);

    return (
        <div>Logging out...</div> // Optional: Replace with a spinner or a redirect logic.
    );
};

export default UserLogout;
