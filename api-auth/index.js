const BASE = 'https://calm-plum-jaguar-tutu.cyclic.app'

const myData = {
    "todoName": "belajar fullstack",
    "isComplete": false
}
const myUpdateData = {
    "isComplete": true
}
const myDataError = {
    "todoNameddd": "belajar fullstack",
    "isCompletedddd": false
}
const myUpdateDataError = {
    "isCompleted": true
}
async function getListData(){
    const response = await fetch(`${BASE}/todos`);
    const responseJson = await response.json()
    try {
        if (responseJson.code === 200) {
            console.log("Data berhasil diambil:", responseJson);
        } else {
          console.log("Gagal mengambil data. Status respons:", response.status);
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
}

// getListData()

async function postData({todoName, isComplete}){
    try{
        const response = await fetch(`${BASE}/todos`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({todoName, isComplete})
        })
        const responseData = await response.json();
        // console.log(responseData.code)
        if (responseData.code !== 200) {
            console.log({ error: true, message: responseData.message })
        }
        
        console.log({ error: false, data: responseData.data })
    }catch(error){
        console.log(error)
    }
}

// postData(myData)


async function updateData({isComplete}){
    const response = await fetch(`${BASE}/todos/653772d3e1717f1836ea7201 `, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isComplete})

        
    })
    const responseData = await response.json();
    // console.log(responseData.code)
    if (responseData.code !== 200) {
        console.log({ error: true, message: responseData.message })
    }
        
    console.log({ error: false, data: responseData.data })
}

// updateData(myUpdateData)

async function deleteData(id){
    const response = await fetch(`${BASE}/todos/${id}`, {
        method: 'DELETE',
    })
    const responseData = await response.json();
    // console.log(responseData.code)
    if (responseData.code !== 200) {
        console.log({ error: true, message: responseData.message })
    }
        
    console.log({ error: false, message: responseData.message })
}

// deleteData('123')


