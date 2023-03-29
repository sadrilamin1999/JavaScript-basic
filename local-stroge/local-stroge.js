// set data
const countries = [
  "Austrolia",
  "Bangladesh",
  "China",
  "Dankmark",
  "England",
  "France",
];
/* localStorage.setItem("countries", JSON.stringify(countries));
 */
// get data
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);
