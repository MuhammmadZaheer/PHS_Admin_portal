import { useState, useEffect } from 'react';
import axios from 'axios';

const UserApiData = (url) => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log('response', res);
                setResponse(res.data.users); // Extracting data from the response
            })
            .catch(error => {
                console.log('error', error);
            })
    }, [url]); // Make sure to include url in the dependency array to prevent infinite loop

    return response;
}

export default UserApiData;
