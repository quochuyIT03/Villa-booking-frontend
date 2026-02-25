import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import './ForgotPassword.css'; // Import tệp CSS

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Gửi yêu cầu thiết lập lại mật khẩu đến email đã cung cấp
        navigate('/login'); // Chuyển hướng đến trang đăng nhập sau khi gửi yêu cầu thành công
    };

    return (
        <div className="forgot_password_container">
            <div className="overlay"> </div>
            <div className="form-container">
                <form onSubmit={handleForgotPassword}>
                    <h1>Forgot Password</h1>
                    <div className="input_box">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MailOutlined className="anticon" />
                    </div>
                    <button type="submit">Reset Password</button>
                    <p>
                        Remember your password? <a href="/login">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
