import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Home from './Home';

const Logout = () => {

    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res ){
                window.alert("Please Logout Later");
            }else{
                navigate.push('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);
//check for <Home/>
    return (
        <div>
            
            <Home/>
        </div>
    );
}

export default Logout;