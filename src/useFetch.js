import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        const abortConst = new AbortController();

        fetch(url, { signal: abortConst.signal }).then(function(res) {
            if (!res.ok) throw Error("Couldn't fetch the data...");
            return res.json();
        }).then(function(data) {
            setData(data);
            setIsloading(false);
        }).catch(function(err) {
            if (err.name === "AbortError") {
                console.log("Fetch aborted");
            } else {
                setError(err.message);
                setIsloading(false);
            }
        });
        return function() { abortConst.abort(); }
    }, [url]);

    return {data, isloading, error};
}

export default useFetch;