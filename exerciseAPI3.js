//  GET USER DATA
const API = 'https://reqres.in/api/users'
async function getUser() {
    const url = API;
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const display = await fetch(url, options);
        const result = await display.json();
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
}

// POST USER DATA
async function postUser({ userName, email }) {
    try {
        const display = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, email }),
        });
        const data = await display.json();
        console.log("Successfully POST data ", data);
    } catch (error) {
        console.log("Error POST data", error);
    }
}

// UPDATE USER DATA
async function putUser({ userName, email, id }) {
    try {
        const display = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, email }),
        });
        if (display.ok) {
            const data = await display.json();
            console.log("Successfully PUT data", data);
        } else {
            console.log("Error PUT data", + display.status);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

// DELETE USER DATA
async function deleteUser(id) {
    try {
        const display = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (display.ok) {
            console.log("User deleted successfully");
        } else {
            console.log("Failed to delete user");
        }
    } catch (error) {
        console.log("Error", error);
    }
}

getUser()
postUser({ userName: 'data', email: 'data"gmail.com' })
putUser({ userName: 'data', email: 'data"gmail.com' }, 3)
deleteUser(10)