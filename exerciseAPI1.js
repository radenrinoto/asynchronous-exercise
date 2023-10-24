const urlAPI = 'https://random-data-api.com/api/v2/users?size=25&is_xml=true'

const dataMap = (data, gender) => {
    return data.filter(item => item.gender === gender).map(({first_name, last_name, username, email, gender, address}) => ({
        fullName: `${first_name} ${last_name}`,
        username,
        email,
        gender,
        address,
    }))
}

const AsynchronousDataAPI = async (pageSize) => {
    try {
        const API = await fetch(urlAPI)        
        const display = await API.json()

        if(display.length < pageSize) {
            console.log('Data Size Undefined');
        } else {
            const page = display.slice(0, pageSize)
            const results = dataMap(page, 'Female')

            return results
        }

    } catch (err) {
        console.log(err, 'Data Not Found');
        throw err
    }
}

AsynchronousDataAPI(25)
.then((results) => {
    console.log('Data yang dipanggil adalah', results);
})
.catch((err) => {
    console.log(err);
})
