import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../Components/spiner/Spiner';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
const validateForm = () => {
    const {username,password} = formData;
    if(!username || !password){
        Swal.fire({
            icon: "warning",
            title : "all fields are required",
            text : "plese fill all field"
        })
         return false;
    }
   if(username.length<3){
     Swal.fire({
        icon: 'warning',
        title: 'Invalid Username',
        text: 'Username must be at least 3 characters long'
      });
      return false
   }
     if (password.length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters long'
      });
      return false;
    }
    return true;
}

    const handleSubmit = (e) => {
        e.preventDefault();

         if (!validateForm()) return;
        setLoading(true)
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                expiresInMins: 90
            })
        })
            .then((response) => {
                if (!response.ok) {
                    setLoading(false)
                    throw new Error('Login failed');

                }
                return response.json();
            })
            .then((result) => {
                if (result && result.accessToken) {
                    localStorage.setItem('loginToken', result.accessToken);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: result.message || "Welcome to Home",
                        confirmButtonText: "Go to Home",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log("Navigating to home...");
                    navigate('/');
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Incorrect username or password.'
                });
                console.error('Login error:', error);
                setLoading(false)
            });
    };
    if (loading) return <Spinner />;
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group email">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="Enter Your Username"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter Your Password"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group reset-password">
                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <p className="forgot-password">Forgot Password?</p>
                </div>

                <button type="submit">Login</button>

                <p className="register">
                    Don't have an account? <span>Register</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
