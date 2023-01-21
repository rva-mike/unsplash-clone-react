import axios from "axios";
import { useState } from "react";

const useAxios = () => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url)
            setResponse(res.data.results)
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        response,
        isLoading,
        error
    }

}

export default useAxios

