import { styled } from "styled-components"
import axios from 'axios'
import {useSearchParams} from 'react-router-dom'
import { useEffect } from "react";

const clientId='9edfeaf067c746c4b41774d953108e7a'
const clientSecret='dd49fd69c044419c849643419bcd9e34'
const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private playlist-modify-private playlist-modify-public user-read-playback-position user-top-read user-read-recently-played user-library-read';
const redirectUri= 'http://localhost:5173/login'

const Login = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams?.get("code")

    const body = new URLSearchParams(
        {
            grant_type:'authorization_code',
            code,
            redirect_uri: redirectUri,
            client_id: clientId,
            client_secret: clientSecret
        }
    )
    const getToken = async ()=>{
       const  response = await axios.post("https://accounts.spotify.com/api/token", body)
        console.log(response)
    }

    useEffect(()=>{
        if(code){
            getToken()
        }
    },[code])
    
    const handleRedirect = ()=> {
        
        const userAuthorization = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
        window.location.replace(userAuthorization)
    }

    return (
        <Container>
            <button onClick={handleRedirect}>Iniciar sesion</button>

        </Container>
    )
}

export default Login

const Container = styled.div`
    
`