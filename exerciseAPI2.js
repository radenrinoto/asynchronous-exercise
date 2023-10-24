const urlAPI = 'https://calm-plum-jaguar-tutu.cyclic.app/todos'

const AsynchronousDataAPI = async (pageSize) => {
    try {
        const API = await fetch(urlAPI)        
        const display = await API.json()
        const result = display.data

        if (result.length < pageSize) {
            console.log('Data Size Undefined');
        } else {
            const page = result.slice(0, pageSize)

            return page
        }

        // return result
    } catch (err) {
        console.log(err, 'Data Not Found');
        throw err
    }
}

AsynchronousDataAPI(2)
.then((page) => {
    console.log('Data yang dipanggil adalah', page);
})
.catch((err) => {
    console.log(err);
})
