const dataAPI = 'https://restcountries.com/v3.1/region/europe'

const asynchronousExercise = async (pageSize, subRegion) => {
    try {
        const API = await fetch(dataAPI)
        const result = await API.json()

        if (result.length < pageSize) {
            console.log(result);
        } else {
            const results = result.slice(0, pageSize)
            const filterData = results.filter(item => subRegion.includes(item.subregion))
            const dataFix = filterData.map((data) => ({
                name: data.name,
                staus: data.status,
                subregion: data.subregion,
                population: data.population,
                languange: data.languange,
                capital: data.capital,
            }))
            console.log(dataFix);
        }

    } catch (err) {
        console.log(err, 'Data tidak ditemukan');
    }
}

asynchronousExercise(25, 'Central Europe')