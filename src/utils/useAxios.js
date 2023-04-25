import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {

    const [campaigns, setCampaigns] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios(url)
            .then(response => {
                if (response.data.status) {
                    setCampaigns(response.data.data)
                    setError(null)
                    setIsLoading(false)
                }
            })
            .catch(error => {
                setIsLoading(false)
                setError(error.message);
            })
    })

    return { campaigns, isLoading, error }
}

export default useAxios;