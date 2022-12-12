import request from './request';

const getList = async () => {
    const data = await request.get('/service');
    return data;
};
const AddNew = async (obj) => {
    const data = await request.post('/service',obj);
    return data;
};

const deleteService = async (obj) => {
    const data = await request.deleteId('/service',obj);
    return data;
};
export default {
    getList,
    deleteService,
    AddNew
};
