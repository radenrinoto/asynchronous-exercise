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
      languages: [Object],
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
      languages: [Object],
      capital: [ 'Prague' ]
    },
    {
      name: { common: 'Hungary', official: 'Hungary', nativeName: [Object] },
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 9749763,
      languages: [Object],
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
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 10698896,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Central Europe',
      population: 9749763,
      languages: [Object],
      capital: [Array]
    }
  ],
  southEast: [
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Southeast Europe',
      population: 2837743,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Southeast Europe',
      population: 6908224,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Southeast Europe',
      population: 2077132,
      languages: [Object],
      capital: [Array]
    }
  ],
  northernEurope: [
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 85032,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 5530719,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 1331057,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 48865,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 1901548,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 5831404,
      languages: [Object],
      capital: [Array]
    },
    {
      name: [Object],
      status: 'officially-assigned',
      subregion: 'Northern Europe',
      population: 4994724,
      languages: [Object],
      capital: [Array]
    }
  ]
}
```
