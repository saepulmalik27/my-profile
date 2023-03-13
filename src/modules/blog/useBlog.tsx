import useSwr from "swr";
import { TMediumResponse } from "./core/model";



const useBlog = () => {
    const fetcher = (url : string) => fetch(url).then(res => res.json())
    const { data, error } = useSwr('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saepulalmalik', fetcher);
    
    return {
        data: data as TMediumResponse,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useBlog