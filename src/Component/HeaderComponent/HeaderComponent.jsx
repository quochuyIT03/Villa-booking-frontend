import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WrapperHeader,
  WrapperNavigation,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperTextHeader1,
  WrapperTextHeaderSmallActive,
  Divider,
  WrapperContentPopup,
} from './style';
import { Col, Popover, Select } from 'antd';
import {
  CaretDownOutlined,
  UserOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailFilled,
  HomeFilled
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useSelector } from 'react-redux';

const { Option } = Select;

const HeaderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("EN"); // Default to English
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const user = useSelector((state) => state.user);
  const [username, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  // Set username and avatar from the Redux state


  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const homeLabel = language === "VI" ? "Trang Chủ" : language === "ZH" ? "主页" : "Home";
  const propertiesLabel = language === "VI" ? "Bất Động Sản" : language === "ZH" ? "房地产" : "Properties";
  const contactLabel = language === "VI" ? "Liên Hệ" : language === "ZH" ? "联系我们" : "Contact";
  const accountLabel = language === "VI" ? "Đăng ký / Đăng nhập" : language === "ZH" ? "注册 / 登录" : "Register / Login";
  const profileLabel = language === "VI" ? "Hồ sơ" : language === "ZH" ? "简介" : "Profile";
  const newsLabel = language === "VI" ? "Tin tức" : language === "ZH" ? "消息" : "News";

  const addressLabel = language === "VI"
    ? "361 Đường Võ Thị Sáu, Phường Long Toàn, BRVT, Việt Nam"
    : language === "ZH"
      ? "越南 BRVT 省龙全镇武氏六街 361 号"
      : "361 Vo Thi Sau St, Long Toan Ward, BRVT, Vietnam";

  const emailLabel = language === "VI"
    ? "nguyenquochuy3102@gmail.com"
    : language === "ZH"
      ? "nguyenquochuy3102@gmail.com"
      : "nguyenquochuy3102@gmail.com";

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    setUserName(user?.username);
    setUserAvatar(user?.avatar);
  }, [user?.username, user?.avatar]);
  const handleLogout = async () => {
    // Handle logout logic here
  };

  const handleClickNextPage = (type) => {
    switch (type) {
      case 'profile':
        navigate('/profile-user');
        break;
      case 'admin':
        navigate('/system/admin');
        break;
      case 'change-password':
        navigate('/change-password');
        break;
      case 'myOrder':
        navigate('/myOrder', {
          state: {
            id: user?.id,
            token: user?.access_token
          }
        });
        break;
      default:
        handleLogout();
    }
    setIsOpenPopUp(false);
  };

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNextPage('profile')}> User Information </WrapperContentPopup>
      <WrapperContentPopup onClick={() => handleClickNextPage('myOrder')}>Booking history </WrapperContentPopup>
      <WrapperContentPopup onClick={() => handleClickNextPage()}>Logout</WrapperContentPopup>
      {
        user?.isAdmin && (
          <WrapperContentPopup onClick={() => handleClickNextPage('admin')}>System Management</WrapperContentPopup>
        )
      }
    </div>
  );

  // Debugging logs
  console.log("User:", user);
  console.log("Username:", username);
  console.log("User Avatar:", userAvatar);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WrapperHeader>
          <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
            <WrapperTextHeader1>
              <HomeFilled style={{ fontSize: '20px', color: 'rgb(243, 85, 37)', marginRight: '5px' }} />
              {addressLabel}
            </WrapperTextHeader1>
          </Col>
          <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
            <WrapperTextHeader1>
              <MailFilled style={{ fontSize: '20px', color: 'rgb(243, 85, 37)', marginRight: '5px' }} />
              {emailLabel}
            </WrapperTextHeader1>
          </Col>
          <Col span={12} style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: 'auto' }}>
            <ButtonInputSearch
              size="large"
              textButton={language === "VI" ? "Tìm kiếm" : language === "ZH" ? "搜索" : "Search"}
              placeholder={language === "VI" ? "Tìm kiếm ở đây" : language === "ZH" ? "在这里搜索" : "Search here"}
              enterButton
            />
            <div>
              <Select defaultValue="EN" style={{ width: 100, height: 40 }} onChange={handleLanguageChange}>
                <Option value="EN">English</Option>
                <Option value="VI">Việt Nam</Option>
                <Option value="ZH">中文</Option>
              </Select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}>
              <FacebookOutlined style={{ fontSize: '20px', color: '#3b5998' }} />
              <TwitterOutlined style={{ fontSize: '20px', color: '#00acee' }} />
              <InstagramOutlined style={{ fontSize: '20px', color: '#C13584' }} />
              <LinkedinOutlined style={{ fontSize: '20px', color: '#0072b1' }} />
            </div>
          </Col>
        </WrapperHeader>
      </div>
      <Divider />
      <WrapperNavigation id="myHeader">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WrapperHeader>
            <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
              <WrapperTextHeader onClick={() => navigate('/')} style={{ cursor: 'pointer', color: 'rgb(243, 85, 37)' }}>
                QuocHuyVilla
              </WrapperTextHeader>
            </Col>
            <Col span={12} style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: 'auto' }}>
              <div onClick={() => handleClick(0, '/')} style={{ cursor: 'pointer' }}>
                {activeIndex === 0 ? (
                  <WrapperTextHeaderSmallActive>{homeLabel}</WrapperTextHeaderSmallActive>
                ) : (
                  <WrapperTextHeaderSmall>{homeLabel}</WrapperTextHeaderSmall>
                )}
              </div>
              <div onClick={() => handleClick(1, '/properties')} style={{ cursor: 'pointer' }}>
                {activeIndex === 1 ? (
                  <WrapperTextHeaderSmallActive>{propertiesLabel}</WrapperTextHeaderSmallActive>
                ) : (
                  <WrapperTextHeaderSmall>{propertiesLabel}</WrapperTextHeaderSmall>
                )}
              </div>
              <div onClick={() => handleClick(2, '/news')} style={{ cursor: 'pointer' }}>
                {activeIndex === 2 ? (
                  <WrapperTextHeaderSmallActive>{newsLabel}</WrapperTextHeaderSmallActive>
                ) : (
                  <WrapperTextHeaderSmall>{newsLabel}</WrapperTextHeaderSmall>
                )}
              </div>
              <div onClick={() => handleClick(3, '/contact')} style={{ cursor: 'pointer' }}>
                {activeIndex === 3 ? (
                  <WrapperTextHeaderSmallActive>{contactLabel}</WrapperTextHeaderSmallActive>
                ) : (
                  <WrapperTextHeaderSmall>{contactLabel}</WrapperTextHeaderSmall>
                )}
              </div>
              <WrapperHeaderAccount>
                {userAvatar ? (
                  <img src={userAvatar} alt="avatar" style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} />
                ) : (
                  <UserOutlined style={{ fontSize: '30px' }} />
                )}
                {user?.access_token ? (
                  <>
                    <Popover content={content} trigger="click" open={isOpenPopUp} >
                      <div style={{ cursor: 'pointer' }} onClick={() => setIsOpenPopUp((prev) => !prev)} >
                        {username?.length ? username : user?.username}
                      </div>
                    </Popover>
                  </>
                ) : (
                  <>
                    <Popover trigger="click">
                      <div style={{ cursor: 'pointer' }}></div>
                    </Popover><div style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
                      <WrapperTextHeaderSmall>{accountLabel}</WrapperTextHeaderSmall>
                      <div>
                        <WrapperTextHeaderSmall>{profileLabel}</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                      </div>
                    </div>
                  </>
                )}
              </WrapperHeaderAccount>
            </Col>
          </WrapperHeader>
        </div>
      </WrapperNavigation>
    </div>
  );
};

export default HeaderComponent;
