const API = 'https://story-api.dicoding.dev/v1/';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLUozbWEzQmRENi1wemN4SkkiLCJpYXQiOjE2OTgxMzkyMzd9.Z1Ns_ZjKd1Tomw0gVpZe8PePGhtAD45nECemE6X8JEs'

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

// login(dataLogin)

async function getListStoris(){
    const response = await fetch(`${API}/stories`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    const responseJson = await response.json()
    if (responseJson.error === true) {
        console.log({ error: true , message: responseJson.message})
    }else{
        console.log({ error: false, message: responseJson.loginResult, listStory: responseJson.listStory  })
    }
}

getListStoris()




