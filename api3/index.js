const API = 'https://story-api.dicoding.dev/v1/';

const token = ''

function getAccessToken(){
    return token;
}

function putAccessToken(tokenFromApi){
    return token = tokenFromApi
}

async function fetchWithToken(url, options = {}){
    return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

const dataRegister = {
    "name": "a",
    "email": "a13@gmail.com",
    "password": "12345678"
}

async function register({name, email, password}){
    const response = await fetch(`${API}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })

    const responseJson = await response.json();

    // console.log(responseJson.error)

    if (responseJson.error === true) {
        console.log({ error: true , message: responseJson.message})
    }else{
        console.log({ error: false, message: responseJson.message })
    }
}

// register(dataRegister)

const dataLogin = {
    "email": "a13@gmail.com",
    "password": "12345678"
}

async function login({email, password}){
    const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    })

    const responseJson = await response.json();

    if (responseJson.error === true) {
        console.log({ error: true , message: responseJson.message})
    }else{
        console.log({ error: false, message: responseJson.loginResult })
    }
}
