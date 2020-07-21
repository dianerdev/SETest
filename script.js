//Contact the API
fetch(' https://bpdts-test-app.herokuapp.com/');

//return json data
.then(response => response.json())

/*brings back data and filters it by city = London and London - fifty miles and then displays it on the console*/

.then(data =>) {
//filter on city
const city = data.filter(d=> d.city === 'London');

//London coordinates
const LondonLatitude1 = 51.5211;
const LondonLatitude2 = 0.1166;

//filter on coordinates -1 degree for 50 miles
const withinFiftyMilesOfLondon = data.filter(d=> d.coordinates((LondonLatitude1 -1), (LondonLatitude2-1));

//combine results
const LondonPlusFiftyMilesFromLondon = d => d.city === 'London' || d.coordinates((LondonLatitude1 -1), (LondonLatitude2-1));

//filters on the combined result and displays it on screen
const result = data.filter(LondonPlusFiftyMilesFromLondon);

let user = d.result.user;
$('user').append(user);
$('city').append(city);
});
.catch(error => console.error(error));