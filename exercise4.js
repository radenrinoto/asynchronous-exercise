async function getApi() {
    try {
        const response = await fetch("https://api.dazelpro.com/mobile-legends/hero")

        let arr = []

        const data = await response.json()

        const filterData = data.hero.filter(hero => hero.hero_role === "Fighter")

        const sliceData = filterData.slice(0, 15)
        sliceData

        sliceData.map(el => {
            const {hero_name, hero_role} = el
    
            const entry = { hero_name, hero_role}
            arr.push(entry)
        })

        console.log(arr);

    } catch (error) {
        console.log(error);
    }

}

getApi()