import request from './request';
import axios from 'axios';

const getList = async () => {

    // http://47.242.250.114:8082/service
    const data = await request.get('/service');
    return data;
};
const AddNew = async (obj) => {
    const data = await request.post('/service',obj);
    return data;
};
export default {
    getList,
    AddNew
};
