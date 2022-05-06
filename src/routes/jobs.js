import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router";


import Button from '@mui/material/Button';
import React from "react";
const jobso = [
    {
        id: 1
    },
    {
        id: 2
    }, {
        id: 3
    }, {
        id: 4
    }, {
        id: 5
    },
]

function Jobs() {
    let navigate = useNavigate();

    return (
        <>
            {jobso.map(job => {


                return (
                    <div key={job.id} style={{marginTop: 20, marginBottom: 20}}>
                        <Button

                            onClick={() => { navigate(`/jobs/${job.id}`) }}
                            
                            variant="outlined" color="inherit" sx={{ borderRadius: 28, marginLeft: 10 }}> hello world {job.id}</Button>
                    </div>
                )
            })}
            {/* < Outlet /> */}
        </>

    )

}
export default Jobs