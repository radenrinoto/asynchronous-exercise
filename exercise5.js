async function getApi () {
    try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts")

        let arr = []

        const data = await response.json()

        const filterData = data.filter(el => el.used === true)

        filterData.map(el => {
            const {text, type, deleted, used} = el
            const entry = {text, type, deleted, used}

            arr.push(entry)

        })

        console.log(arr);

    } catch (error) {
        console.log(error);
    }
}

getApi()