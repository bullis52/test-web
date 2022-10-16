import axios from "axios";
import {baseUrl} from "../../constans/constans";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ=='
}

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