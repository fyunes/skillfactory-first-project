const URL_RNM = `https://rickandmortyapi.com/api/character/`;

const getData = (apiURL) => {
  return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            printData(json),
            printPagination(json.info)
          })
        .catch(error => {console.error('Error: ', error)})
}

const printData = (data) => {
  let body = ``;
  data.results.forEach(c => {
    body += `
        <div>            
            <img src="${c.image}" alt="${c.name}">
            <h3>${c.name}</h3>
            <div>${c.species}</div>
            <div>${c.status}</div>
            <div>${c.gender}</div>
            <p>${c.origin.name}</p>
            <p>${c.location.name}</p>                
        </div>`;
  });
  document.getElementById('fetch-rickandmorty').innerHTML = body
}

const printPagination = (info) => {
    let body = `
      <li>
        <span onclick="getData('${info.prev}')">Previous</span>
      </li>`
    body += `
      <li>
        <span onclick="getData('${info.next}')">Next</span>
      </li>`
    document.getElementById('pagination').innerHTML = body;
}
getData(URL_RNM);