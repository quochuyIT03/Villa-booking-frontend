import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import './Login.css';
import InputForm from '../../Component/InputForm/InputForm'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserService from '../../services/UserService';


const Login = () => {
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const mutation = useMutationHooks(data => UserService.loginUser(data));
    const { data, isSuccess, isError, error: mutationError } = mutation;

    const handleOnChangeUsername = (value) => {
        setUsername(value);
    };

    const handleOnChangePassword = (value) => {
        setPassword(value);
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        setError('');
        mutation.mutate({
            username, password
        });
    };

    const handleFacebookLogin = () => {
        // Thực hiện logic đăng nhập bằng Facebook
        alert('Login with Facebook clicked');
    };

    const handleGoogleLogin = () => {
        // Thực hiện logic đăng nhập bằng Google
        alert('Login with Google clicked');
    };

    useEffect(() => {
        if (isSuccess) {
            if (location?.state) {
                navigate(location.state);
            } else {
                navigate('/');
            }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token));
        } else if (isError) {
            setError(mutationError?.message || 'Login failed. Please check your username and password.');
        }
    }, [isSuccess, isError, mutationError, navigate, location, data]);

    return (
        <div className="login_container">
            <div className="overlay"> </div>
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    {error && <p className="error-message">{error}</p>}
                    <InputForm style={{ marginBottom: '10px' }} placeholder="username" value={username} onChange={handleOnChangeUsername} />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>

                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnChangePassword} />

                    </div>
                    <div className="form_options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="/ForgotPassword">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <hr color="purple" width="400px" size="3px" align="center" />
                    <div className="social-login-buttons">
                        <button style={{ background: '#09299f' }} type="button" className="facebook-login" onClick={handleFacebookLogin}>
                            <FaFacebookF className="social-icon" /> Login with Facebook
                        </button>
                        <button style={{ background: '#bc0b0b' }} type="button" className="google-login" onClick={handleGoogleLogin}>
                            <FaGoogle className="social-icon" /> Login with Google
                        </button>
                    </div>
                    <p>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
