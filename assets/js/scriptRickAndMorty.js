//Fetch and Print

const URL_RNM = `https://rickandmortyapi.com/api/character/`;

const getData = (apiURL) => {
  console.log(apiURL)
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
        <div class="rnm-img">                    
            <img src="${c.image}" alt="${c.name}">
        </div>    
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

// Pagination Section

const printPagination = (info) => {
    let body = `<button onclick="getData('${info.prev}')">Previous</button>`
    body += `<button onclick="getData('${info.next}')"> Next</button>`

    document.getElementById('pagination').innerHTML = body;
}
getData(URL_RNM);

// Scroll Top Button

mybutton = document.getElementById("RNM-Btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 540 || document.documentElement.scrollTop > 540) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}