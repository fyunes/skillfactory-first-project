//FETCH AND PRINT

const URL_RNM = `https://rickandmortyapi.com/api/character/`

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
             <div class="rnm-text-area">
              <div>Species: ${c.species}</div>
              <div class="${c.status}">${c.status}</div>
              <div>Gender: ${c.gender}</div>
              <p>Origin: ${c.origin.name}</p>
             </div>            
            </div>                
        </div>`;
  });
  document.getElementById('fetch-rickandmorty').innerHTML = body
}

// PAGINATION SECTION

const printPagination = (info) => {
    let body =`<div class="btn-container"><button onclick="getData('${info.prev}'); topFunction(); onClickedPrev()" class =${info.next == "https://rickandmortyapi.com/api/character/?page=2" && "noprev"}>Previous</button></div>`
    body += `<div class="btn-container"><button onclick="getData('${info.next}');  topFunction();  onClickedNext()"  class =${info.prev == "https://rickandmortyapi.com/api/character/?page=41" && "noprev"}> Next</button></div>`
    
    document.getElementById('pagination').innerHTML = body;
    document.getElementById('paginationBottom').innerHTML = body;
}
getData(URL_RNM);

// SCROLL TOP BUTTON

mybutton = document.getElementById("RNM-Btn")
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 540 || document.documentElement.scrollTop > 540) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {  
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

//PAGE COUNTER

let count = 1;
let disp = document.getElementById("display")
const onClickedNext = () => {
  count++;
  disp.innerHTML = count;
}
const onClickedPrev = () => {
  count--;
  disp.innerHTML = count;
}