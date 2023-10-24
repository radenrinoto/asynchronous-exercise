async function fetchApi() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/")

        const data = await response.json()

        const sliceData = data.slice(0, 10)

        const filterData = data.filter(el => el.userId === 1)

        console.log(filterData);

    } catch (error) {
        console.log(error);
    }
}

fetchApi()

async function postApi() {
    const data = {
        userId: 1,
        title: 'quis ut nam facilis et officia qui 2',
        completed: false
    }
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        console.log("Data sukses terbuat", result);

    } catch (error) {
        console.log(error);
    }
}

postApi()

async function patchApi() {
    const data = {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia',
        completed: true
    }
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        console.log(`Data dengan id: ${result.id}, sukses diubah`, result);


    } catch (error) {
        console.log(error);
    }
}

patchApi()

async function deleteApi() {
    const data = {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia',
        completed: true
    }
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json()
        
        console.log(`Data dengan id: ${data.id}, sukses di Hapus`);

    } catch (error) {
        console.log(error);
    }
}

deleteApi()