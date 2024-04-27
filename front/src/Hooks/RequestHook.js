import {useState} from "react";


export const useRequest = ()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const emptyError = () => setError(null);

    const startLoading = () => setLoading(true);

    const stopLoading = () => setLoading(false);

    const addError = (e) => setError({...error, ...e});

    return {loading, setLoading, error, setError, emptyError, startLoading, stopLoading, addError}
}
