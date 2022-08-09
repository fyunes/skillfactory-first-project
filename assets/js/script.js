const urlBase = "https://jsonplaceholder.typicode.com/users";

fetch(urlBase)
  .then((response) => response.json())
  .then((data) => userData(data));

const userData = (data) => {
  let user = data;
  let body = ``;
  user.forEach(({ id, name, email, address, phone, website }) => {
    body += `
            <div>    
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                <link rel="icon" type="image/png" sizes="192x192" href=".../icons8-user-192.png">
                <h5 class="card-title">Nombre: <span>${name}</span> </h5>
                <p class="card-text">id: <span>${id}</span></p>
                <p class="card-text">Email: <span>${email}</span></p>
                <p class="card-text">Ciudad: <span>${address.city}</span></p>
                <p class="card-text">Teléfono: <span>${phone}</span></p>
                <p class="card-text">Web: <span>${website}</span></p>
                </div>
                </div>                      
            </div>`;
  });
  document.getElementById("api").innerHTML = body;
};
