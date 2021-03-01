import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(function() {
        fetch(url).then(function(res) {
            if (!res.ok) throw Error("Couldn't fetch the data...");
            return res.json();
        }).then(function(data) {
            setData(data);
            setIsloading(false);
        }).catch(function(err) {
            console.log(err);
        });
    }, [url]);

    return {data, isloading};
}

export default useFetch;