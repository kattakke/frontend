import React from "react";
import { useParams } from "react-router-dom";

type ParamsType = {
    id: string
}

const Detail = () => {
    const urlParams = useParams<ParamsType>()
    return <div>
        <p>{urlParams.id}</p>
    </div>
}

export default Detail