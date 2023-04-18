import React, {useEffect, useState } from "react";

export const DataMaker = ({ url, renderDataUrl }) => {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setData(json)
        })
    }, [url])
    return <>{renderDataUrl(data)}</>
}


