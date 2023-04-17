import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
const [state, setState] = useState();
const [hasError, setHasError] = useState(false)

useEffect(() => {
    axios.get(url)
    .then(res => {
        setState(res.data)
        setHasError(false)
    })
    .catch(err =>{ 
        console.log(err)
        setHasError(true)
    });
}, [{url}]);

return [state, hasError];
};
export default useFetch;
