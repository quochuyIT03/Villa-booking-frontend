import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import { getProvinces, getDistricts, getWards } from '../../dataLoader';
import './Register.css';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserService from '../../services/UserService';
import { message } from 'antd';
import InputForm from '../../Component/InputForm/InputForm';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState({ houseNumber: '', province: '', district: '', ward: '' });
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    );
    const { isSuccess, isError } = mutation;

    const handleNavigateSignIn = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (isSuccess) {
            message.success('Registration successful');
            handleNavigateSignIn();
        } else if (isError) {
            message.error('Registration failed');
        }
    }, [isSuccess, isError]);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        const userData = {
            username,
            fullname,
            email,
            dob,
            gender: sex,
            password,
            confirmPassword,
            phone,
            address: address.houseNumber,
            province: address.province,
            district: address.district,
            ward: address.ward
        };
        mutation.mutate(userData);
    };
    const handlePhoneChange = (value) => {
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    const handleUsernameChange = (value) => setUsername(value);
    const handlePasswordChange = (value) => setPassword(value);
    const handleOnChangeConfirmPassword = (value) => setConfirmPassword(value);
    const handleFullnameChange = (value) => setFullname(value);
    const handleEmailChange = (value) => setEmail(value);
    const handleDobChange = (value) => setDob(value);
    const handleSexChange = (e) => setSex(e.target.value);
    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setAddress({ ...address, province: selectedProvince, district: '', ward: '' });
    };
    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setAddress({ ...address, district: selectedDistrict, ward: '' });
    };
    const handleWardChange = (e) => setAddress({ ...address, ward: e.target.value });
    const handleHouseNumberChange = (value) => setAddress({ ...address, houseNumber: value });

    const provinces = getProvinces();
    const districts = address.province ? getDistricts(address.province) : [];
    const wards = address.district ? getWards(address.district) : [];

    return (
        <div className="register_container">
            <div className="overlay"> </div>
            <div className="form-container">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="columns">
                        <div className="column">
                            <div className="input_box">
                                <InputForm
                                    type="text"
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                                <UserOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="text"
                                    placeholder="Fullname"
                                    required
                                    value={fullname}
                                    onChange={handleFullnameChange}
                                />
                                <UserOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <MailOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="tel"
                                    placeholder="Phone"
                                    required
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                                <PhoneOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="date"
                                    placeholder="Date of Birth"
                                    required
                                    value={dob}
                                    onChange={handleDobChange}
                                />
                                <CalendarOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <select
                                    value={sex}
                                    onChange={handleSexChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <UserOutlined className="anticon" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="input_box">
                                <InputForm
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <LockOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                    value={confirmPassword}
                                    onChange={handleOnChangeConfirmPassword}
                                />
                                <LockOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <InputForm
                                    type="text"
                                    placeholder="House Number"
                                    required
                                    value={address.houseNumber}
                                    onChange={handleHouseNumberChange}
                                />
                                <HomeOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <select
                                    value={address.province}
                                    onChange={handleProvinceChange}
                                    required
                                >
                                    <option value="">Select Province</option>
                                    {provinces.map((province) => (
                                        <option key={province.code} value={province.code}>{province.name}</option>
                                    ))}
                                </select>
                                <HomeOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <select
                                    value={address.district}
                                    onChange={handleDistrictChange}
                                    required
                                    disabled={!address.province}
                                >
                                    <option value="">Select District</option>
                                    {districts.map((district) => (
                                        <option key={district.code} value={district.code}>{district.name}</option>
                                    ))}
                                </select>
                                <HomeOutlined className="anticon" />
                            </div>
                            <div className="input_box">
                                <select
                                    value={address.ward}
                                    onChange={handleWardChange}
                                    required
                                    disabled={!address.district}
                                >
                                    <option value="">Select Ward</option>
                                    {wards.map((ward) => (
                                        <option key={ward.code} value={ward.code}>{ward.name}</option>
                                    ))}
                                </select>
                                <HomeOutlined className="anticon" />
                            </div>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Register</button>
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
