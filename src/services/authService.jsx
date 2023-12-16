import axiosInstance from "../axios/axiosInstance";
import { jwtDecode }from "jwt-decode";

// How to set Token in Local Storage
const setToken = (token) => {
  localStorage.setItem("token", token);
};

// How to get Token in Local Storage
const getToken = () => {
    const token = localStorage.getItem('token');
    if(token) {
        return token;
    } else {
        return null;
    }
}

// Login API
const login = (userData) => {
    return axiosInstance.post('/login', userData);
}


// GET USER EMAIL
const getUserEmail = () => {
    const token = getToken();
    if(token) {
        const payload = jwtDecode(token);
        console.log('Payload --> ', payload);
        return payload?.email;
    } else {
        return null;
    }
}

const getUserRole = () => {
    const token = getToken();
    if(token) {
        const payload = jwtDecode(token);
        return payload?.role;
    } else {
        return null;
    }
}

const isLoggedIn = () => {
    const token = getToken();
    if(token) {
        const payload = jwtDecode(token);
        const isLogin = Date.now() < payload?.exp *1000;
        return isLogin;
    }
}

const LogOut = () => {
    localStorage.clear();
}

export const authService =  {
    setToken,
    getToken,
    getUserEmail,
    getUserRole,
    login,
    isLoggedIn,
    LogOut
}