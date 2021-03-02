const baseEndpoint = 'https://swapi.dev/api/';
const array = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const peopleData = fetch(`${baseEndpoint}people/`)
peopleData.then((result) => result.json())
  .then((response) => {
    response.results.forEach(
      (el, i) => {
          array[i].name = el.name;
          array[i].hair = el.hair_color;
          array[i].height = el.height;
          array[i].planet = {};;
          const planet = fetch(el.homeworld)
            .then((el) => el.json())
            .then((a) => {
                array[i].planet.name = a.name;
                array[i].planet.population = a.population;
        });
      }
    );
    createTable();
    console.log(array)
})
.catch(err => console.log(err));

const createTable = () => {
  const headers = ['name','hair','height','planet name','planet population']
  const table = document.createElement('table')
  document.body.appendChild(table)
  const header = document.createElement("caption");
  header.innerHTML = 'Star Wars';
  table.appendChild(header)
  const tr = document.createElement('tr')
  table.appendChild(tr);
  headers.forEach((el) => {
    const th = document.createElement('th')
    th.innerHTML = el;
    tr.appendChild(th)
  });
  
  const keys = ['name','hair','height','name','population']
    for (let i = 0; i < array.length; i++) {
        const tr = document.createElement('tr')
        table.appendChild(tr)
        for (let j = 0; j < 5; j++) {
          if (j < 3) {
            const td = document.createElement('td')
            td.innerHTML = array[i][keys[j]]
            tr.appendChild(td)
          } else {
            const td = document.createElement('td')
            td.innerHTML = array[i].planet[keys]
            tr.appendChild(td)
          }
        }
    }
}