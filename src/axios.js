import axios from "axios";
import {BaseUrl} from "./constents/constans.js"

const instance = axios.create({
    baseURL : BaseUrl,
})

export default instance