import {useState} from "react";
import {$axios} from "../api.js";

export const useGetName = () => {
    const [name, setName] = useState('')
    $axios.get('/users')


}