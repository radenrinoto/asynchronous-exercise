# asynchronous-exercise
API URL = 'https://restcountries.com/v3.1/region/europe'
```
example Response

  [
    {
      name: {
        common: 'Austria',
        official: 'Republic of Austria',
        nativeName: [Object]
      },
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 8917205,
      language: undefined,
      capital: [ 'Vienna' ]
    },
    {
      name: {
        common: 'Czechia',
        official: 'Czech Republic',
        nativeName: [Object]
      },
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 10698896,
      language: undefined,
      capital: [ 'Prague' ]
    },
    {
      name: { common: 'Hungary', official: 'Hungary', nativeName: [Object] },
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 9749763,
      language: undefined,
      capital: [ 'Budapest' ]
    }
  ]
```

```
response phase 2

{
  centralEurope: [
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 8917205,
      language: undefined,
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 10698896,
      language: undefined,
      capital: [Array]
    }
  ],
  southEast: [
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Southeast Europe',
      population: 2837743,
      language: undefined,
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Southeast Europe',
      population: 6908224,
      language: undefined,
      capital: [Array]
    }
  ],
  northernEurope: [
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 85032,
      language: undefined,
      capital: [Array]
    }
  ]
}
```
