import { useEffect, useState } from "react";

export const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
export const main_url = "https://api.themoviedb.org/3";
export const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
export const img_url = "https://image.tmdb.org/t/p/w500";
export const searchUrl = main_url + "/search/movie?" + api_key;

function useFetch(url_fetch, method_fetch) {
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetching(url, method) {
            try {
                const response = await fetch(url, { method });
                const json = await response.json();
                setData(json)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        fetching(url_fetch, method_fetch)
    },[url_fetch, method_fetch])
    return data
}

export default useFetch