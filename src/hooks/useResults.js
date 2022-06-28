import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // yelp.get is a asynchronys function so needs a .then or async added on
    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
                setResults(response.data.businesses)
        }
        catch(err){
            setErrorMessage("something went wrong");
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};