const BASE = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

async function getListData(){
    const response = await fetch(`${BASE}/todos`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDdjMzBjYmViNThlZGQwMzQ3ODAxZGZjNTQ1MzM1NCIsInN1YiI6IjYxOGFjODMyYjA3NmU1MDA0M2U2ZDcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pAvC60l4NmxxZVSi1bLaNoLOEMDE6mDQQ5AobUmtBms'
        }
    });
    const responseJson = await response.json()
    if(responseJson !== null){
        console.log({ error: false, data: responseJson.results })
    }else{
        console.log({ error: true, data: null })
    }
}

getListData()

