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
        <div class="rnm-cards">            
            <img src="${c.image}" alt="${c.name}">
            <div class= "rnm-card-text">
            <h3 class="${c.name}">${c.name}</h3>
            <div class="${c.species}">${c.species}</div>
            <div class="${c.status}">${c.status}</div>
            <div>${c.gender}</div>
            <p>Origin: ${c.origin.name}</p>            
            </div>                
        </div>`;
  });
  document.getElementById('fetch-rickandmorty').innerHTML = body
}

const printPagination = (info) => {
<<<<<<< HEAD
    let body = `<button onclick="getData('${info.prev}')">Previous</button>`
    body += `<button onclick="getData('${info.next}')"> Next</button>`
=======
    let body = `
      <li>
        <span onclick="getData('${info.prev}')">Previous</span>
      </li>`
    body += `
      <li>
        <span onclick="getData('${info.next}')">Next</span>
      </li>`
>>>>>>> e62b296cfda541b9782f926eddb2e26871eefdd7
    document.getElementById('pagination').innerHTML = body;
}
getData(URL_RNM);