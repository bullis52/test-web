import axios from "axios";
import {baseUrl} from "../../constans/constans";

export const getUsers = (count:number) => {
    return axios.get(`${baseUrl}/users?count=${count}`)
}
export const getToken = () => {
    return axios.get(`${baseUrl}/token`)
}

export const postUser = (user:any, token: string) => {
    return axios.post(`${baseUrl}/users`,{
        data: user
    },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}`,
        },
    })
}