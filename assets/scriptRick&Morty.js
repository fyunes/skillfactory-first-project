let array = [];
  for (let i = 0; i < 80; i++) {
    array.push(i);
}
const URL_RYM = `https://rickandmortyapi.com/api/character/${array}`;

fetch(URL_RYM)
  .then((response) => response.json())  
  .then((data) => chars(data));
  
const chars = (data) => {    
  let characters = data;
  console.log(data)
  let body = ``;
  characters.forEach(({ image, species, name, gender, status, origin, location}) => {
    body += `
        <div>            
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <div>${species}</div>
            <div>${status}</div>
            <div>${gender}</div>
            <p>${origin.name}</p>
            <p>${location.name}</p>                
        </div>`;
  });
  document.getElementById("fetch-rickandmorty").innerHTML = body;
};