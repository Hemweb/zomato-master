import React,{useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Redirect() {
        const history = useNavigate();
        const {id} = useParams();

        useEffect( () => {
            history(`/restaurant/${id}/overview`)
        },[])

    return (
        <div>
            
        </div>
    )
}

export default Redirect
