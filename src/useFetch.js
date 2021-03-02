import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch(url).then(function(res) {
            if (!res.ok) throw Error("Couldn't fetch the data...");
            return res.json();
        }).then(function(data) {
            setData(data);
            setIsloading(false);
        }).catch(function(err) {
            setError(err.message);
            setIsloading(false);
        });
    }, [url]);

    return {data, isloading, error};
}

export default useFetch;