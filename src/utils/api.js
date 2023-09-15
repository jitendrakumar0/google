import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyBsYBBQMksYOl0x37s-ErtWDfzOrN5Hh2I',
    cx: '919496f8af437488c'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
