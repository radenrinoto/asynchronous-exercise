async function getDataTimestamp(interval, symbol="AMRN", range="1d", region="US") {
  /* Get timestamp data of stocks with Yahoo Finance */

  // interval: 1m|2m|5m|15m|60m|1d
  // symbol: The value is returned in /auto-complete endpoint
  // range: One of the following is allowed 1d|5d|1mo|3mo|6mo|1y|2y|5y|10y|ytd|max
  // region: One of the following is allowed US|BR|AU|CA|FR|DE|HK|IN|IT|ES|GB|SG

  try {
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=${interval}&symbol=${symbol}&range=${range}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '12fef2bd6bmshb3e9b56af571749p132dcfjsnf7860a382484',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.chart.result[0].timestamp);
  } catch(error) {
    console.error(error);
  }
}

getDataTimestamp(interval="5m", symbol="AMRN", range="1d", region="US");
