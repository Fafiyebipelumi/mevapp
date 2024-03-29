import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import { baseURL } from "../interceptor/axios";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MEV from '../assets/Mevlogo.png';
// import { SiZoho } from "react-icons/si";

const Login = ({ setIsAuthenticated}) => {

    const LOGIN_URL = `${baseURL}/auth/login`;
    const navigate = useNavigate()

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [btnLoading, setBtnLoading] = useState('Login')

    const details = new FormData()
    details.append('username', username)
    details.append('password', password)

    const getAuth = {
        method: 'POST',
        url: LOGIN_URL,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: details
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(!username || !password) {
                toast.warning('Input all fields!');
            } else {
                setBtnLoading('Loading...')
                await axios(getAuth)
                .then((response) => {
                    console.log(response.data.messsage);
                    if (response.data.messsage === 'SUCCESS') {
                        toast.success('Login Successful')
                        const token = response.data.access_token
                        const email = response.data.email
                        const name = response.data.name
                        localStorage.setItem('token', token)
                        localStorage.setItem('email', email)
                        localStorage.setItem('name', name)
                        navigate('/campaign')
                        setBtnLoading('Login')
                        setIsAuthenticated(true)
                    } else {
                        toast.error(response.data.description)
                        setBtnLoading('Login')
                    }
                })
            
            }
        } catch (error) {
            if (!error?.response) {
                console.log(error.messsage);
                // setErrorMsg('No Server Response');
                toast.error('No Server Response')
                setBtnLoading('Login')
            }
        }
        
        // console.error(error);
        // } else if (error.response?.status === 400) {
        //     // setErrorMsg('Missing Username or Password');
        //     toast.error('Missing Username or Password')
        // } else if (error.response?.data?.msg === 'FAILED') {
        //     // setErrorMsg('Password or email address entered is incorrect.');
        //     toast.error(error.response?.description)
        // } else {
        //     // setErrorMsg('Login Failed');
        //     toast.error('Login Failed')
        // }
        // // errRef.current.focus();
        // setBtnLoading('Login')
    }

    return (
        <div className="login-page">
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <div className="form">
                <div className="login">
                    <div className="login-header">
                    <img src={MEV} alt='' width={50} height={50} />
                        {/* <h3>LOGIN</h3> */}
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>{btnLoading}</button>
                    {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
                </form>
                <div className='login-option'>
                    <span>Or Login With</span>
                    <div className='with-zoho'>
                        <span>Zoho</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
