import axios from "axios";

const url= 'http://localhost:8080/api/users';

export const createuser=(user)=>axios.post(url,user);

export const listusers = () => axios.get(url);

export const getuser = (userId) => axios.get(url + '/' + userId);

const api='http://localhost:8080/api/reserve';

export const createreserve=(user)=>axios.post(api,user);