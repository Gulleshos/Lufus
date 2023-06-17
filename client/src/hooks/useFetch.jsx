import { useState, useEffect } from "react";
import { BASE_API_URL } from "../const";
import axios from "axios";

const useFetch = (url) => {
    const [data, setDate] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${BASE_API_URL}${url}`);
                setDate(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, isLoading };
};

export default useFetch;
