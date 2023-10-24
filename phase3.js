// exercise3

// GET USER
const BASE_URL = 'https://reqres.in/api'

async function getUser() {
  const url = `${BASE_URL}/users`;
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
}
// getUser()

// POST USER
async function postUser({ userName, email }) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email }),
    });
    const data = await response.json();
    console.log("Succes >>>>", data);
  } catch (error) {
    console.log("Error >>>>>", error);
  }

}
// postUser({userName: 'MUIZ', email: 'GOD@gmail.com'})

// EDIT USER
// async function putUser({ userName, email }) {
//   try {
//     const response = await fetch(`${BASE_URL}/users`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userName, email }),
//     });
//     const data = await response.json();
//     console.log("Succes >>>>", data);
//   } catch (error) {
//     console.log("Error >>>>>", error);
//   }
// }

async function putUser({ userName, email }) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Success >>>>", data);
    } else {
      console.log("Error >>>>>", + response.status);
    }
  } catch (error) {
    console.log("Error >>>>>", error);
  }
}
// putUser({ userName: 'MUIZ', email: 'GOD@gmail.com' })

// DELETE USER 
async function deleteUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("User deleted successfully");
    } else {
      console.log("Failed to delete user");
    }
  } catch (error) {
    console.log("Error Delete >>>>>", error);
  }
}
// deleteUser(10)


// API 2
// 10 PAPAN ATAS, ARTIS BERDASARKAN PENDENGAR BULANAN
async function musik() {
  const url = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '78bdb552d7msh21aeb8d7aa96ca3p16dcc2jsne3c25e8f5066',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const music = await response.json();
    const res = music.slice(0, 10);
    const result = res.map(
      ({ rank, artist, monthlyListeners }) => ({
        rank, artist, monthlyListeners
      })
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
// musik()

//API 3
// PERDIKSI BOLA BERDASARKAN COMPETION NAME => BUNDESLIGA

async function ballPrediction() {
  const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '78bdb552d7msh21aeb8d7aa96ca3p16dcc2jsne3c25e8f5066',
      'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const dataJson = await response.json();
    const obj = dataJson.data
    const filtered = obj.filter(
      (obj) => obj.competition_name === 'Bundesliga'
    );
    const result = filtered.map(
      ({ home_team, away_team, season, competition_name, federation }) => ({
        home_team, away_team, season, competition_name, federation
      })
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
ballPrediction()


