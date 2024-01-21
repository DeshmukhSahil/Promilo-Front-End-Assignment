import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/bgimage.jpg';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SHA256 } from 'crypto-js';

const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            // Email Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Invalid email format');
                return;
            }

            // Password Validation
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                setError('Password must be 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
                return;
            }

            // Converting password to sha256 format 
            const sha256Password = SHA256(password).toString();

            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', sha256Password);
            formData.append('grant_type', 'password');

            const response = await axios.post(
                'https://apiv2stg.promilo.com/user/oauth/token',
                formData,
                {
                    headers: {
                        'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=='
                    }
                }
            );

            console.log('Login successful', response.data);

            sessionStorage.setItem('accessToken', response.data.response.access_token);

            await handleProductList();
            navigation('/products');
        } catch (error) {
            console.error('Login error', error);
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleProductList = async () => {
        try {
            const response = await axios.get(
                'https://api.kalpav.com/api/v1/product/category/retail',
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                    },
                }
            );

            console.log('Product List:', response.data);
        } catch (error) {
            console.error('Error fetching product list', error);
            toast.error('Error fetching product list');
        }
    };

    return (
        <>
            <section className="login-section h-4/5 md:h-screen font-poppins relative flex flex-col justify-center items-center bg-purple-800 bg-opacity-50 overflow-scroll">
                <img src={bgimage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="z-10 relative max-w-2xl mx-auto p-4 md:p-8 lg:p-12 bg-transparent dark:bg-gray-800 rounded-lg shadow-xl backdrop-blur-lg">
                    <div className="flex flex-col items-center mb-6 md:flex-row md:items-center md:mb-10">
                        <img src={logo} alt="Logo" className="w-21 h-21 mb-4 md:mr-4 md:mb-0" />
                    </div>
                    <div className="text-dark text-center mb-6 font-poppins">
                        <p><strong>One shop for all your daily needs</strong></p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md dark:text-gray-400 dark:bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Password:
                            </label>
                            <div className="relative flex items-center mt-2">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full p-3 border border-gray-300 rounded-md dark:text-gray-400 dark:bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                        <button
                            type="submit"
                            className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'LOGIN'}
                        </button>
                    </form>
                </div>
            </section>
            <footer className="absolute bottom-10 right-7 font-poppins text-white">
                Created with 💓 by <strong>Sahil Deshmukh</strong>
            </footer>
        </>
    );
};

export default Login;
