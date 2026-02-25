
import AdminPage from "../Pages/AdminPage/AdminPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import homePage from "../Pages/HomePage/homePage";
import Login from "../Pages/Login/Login";
import NewsPage from "../Pages/NewsPage/newsPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Payment from "../Pages/Payment/Payment";
import PropertiesDetail from "../Pages/PropertiesDetail/PropertiesDetail";
import PropertiesPage from "../Pages/PropertiesPage/PropertiesPage";
import Register from "../Pages/Register/Register";


export const routes = [
    {
        path: '/',
        page: homePage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/login',
        page: Login,

    },
    {
        path: '/register',
        page: Register,
    },
    {
        path: '/forgotpassword',
        page: ForgotPassword,
    },
    {
        path: '/properties',
        page: PropertiesPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/properties_detail',
        page: PropertiesDetail,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '/payment',
        page: Payment,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/news',
        page: NewsPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: true
    },

]