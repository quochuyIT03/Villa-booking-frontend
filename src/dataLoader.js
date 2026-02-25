// dataLoader.js
import tinh_tp from './data/tinh_tp.json';
import quan_huyen from './data/quan_huyen.json';
import xa_phuong from './data/xa_phuong.json';

export const getProvinces = () => {
    return Object.values(tinh_tp);
};

export const getDistricts = (provinceId) => {
    return Object.values(quan_huyen).filter(district => district.parent_code === provinceId);
};

export const getWards = (districtId) => {
    return Object.values(xa_phuong).filter(ward => ward.parent_code === districtId);
};
