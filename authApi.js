const BASE_URL = 'https://dummyjson.com'

const login = async ({ username, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
login({ username: 'atuny0', password: '9uQFF1Lh' })

const getAuthResorce = async token => {
  try {
    if (!token) return console.log({ message: 'token is required' })
    const response = await fetch(`${BASE_URL}/auth/RESOURCE`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 200) {
      const result = await response.json()
      console.log(result)
    } else {
      console.log('Error:', response.status, response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}

getAuthResorce(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5ODEzNjI4NSwiZXhwIjoxNjk4MTM5ODg1fQ.fWwahABCxZqSI9WKT6-Ow8vu_IdjxGYyvEBC4jy0NtI'
)
