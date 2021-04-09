
import React, { useEffect } from 'react';
import API from "../utils/API";

export default function Save() {

    useEffect(() => {
        API.getBooks()
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }, []);

    return (
        <>

        </>
    )
}
