

import { Routes, Route, useParams } from "react-router-dom";


export default function Job() {
    let {jobId} = useParams();
    return (
        < h1 > This is a job {jobId}</h1 >
    )
}