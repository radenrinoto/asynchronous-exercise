const API = 'https://restcountries.com/v3.1/region/europe'


async function getDataPhase2(){
    const response = await fetch(`${API}`)
    const data = await response.json();

    //potong data hingga hanya cuman 25 data
    const sliceData = data.slice(0, 25)
    
    //buat key regions berisi daftar subregion yang ingin diambil. Hanya data-data dengan subregion yang sesuai dengan nilai-nilai dalam array ini yang akan diproses.
    const KeyRegions = [
        'Central Europe',
        'Southeast Europe',
        'Northern Europe',
    ];
    
    //filter data data yang ingin diambil berdasarkan key regions
    const filteredData = sliceData.filter((country) => KeyRegions.includes(country.subregion))

    // console.log(filteredData)

    /**
     * berisi daftar subregion yang ingin diambil. Hanya data-data dengan subregion yang sesuai dengan nilai-nilai dalam array ini yang akan diproses.
     */
    const filteredData2 = filteredData.map(({ name, status, subregion, population, languages, capital}) => ({
        name,
        status,
        subregion,
        population,
        languages,
        capital,
    }))
    // console.log(filteredData2)
    const result = {};
    
    filteredData2.forEach((country) => {
        // console.log(country)
        //memeriksa apakah objek result memiliki properti dengan nama yang sesuai dengan subregion dari negara saat ini.
        if (!result[country.subregion]) {
            /**
             * Kode ini akan membuat properti baru dalam objek result dengan nama yang sesuai dengan subregion negara saat ini. Nilai dari properti tersebut akan diinisialisasi sebagai sebuah array kosong ([]). Dengan cara ini, kita sedang mempersiapkan tempat untuk menyimpan data negara yang memiliki subregion yang sama.
             */
            result[country.subregion] = [];
        }
        result[country.subregion].push(country);
    });
    console.log(result);
}






getDataPhase2()


  
