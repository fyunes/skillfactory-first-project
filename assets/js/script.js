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
                <div class="card" style="width: 30rem;">
                    <div class="card-body">
                        <div class="col--left">
                        <img src="../assets/icons/user.png">
                        </div>
                        <div class="col--right">
                            <p class="card__title">${name}</p>
                            <p class="card__text">ID: <span>${id}</span></p>
                            <p class="card__text">Email: <span>${email}</span></p>
                            <p class="card__text">Ciudad: <span>${address.city}</span></p>
                            <p class="card__text">Teléfono: <span>${phone}</span></p>
                            <p class="card__text">Web: <span>${website}</span></p>
                        </div>
                    </div>
                    <div class="card-footer"><h3>Ficha Técnica</h3></div>
                </div>           
            </div>`;
  });
  document.getElementById("api").innerHTML = body;
};

 /* Versión Tabla */

 fetch(urlBase)
  .then((response) => response.json())
  .then((data) => userDataTable(data));

  const userDataTable = (data) => {
    let user = data;
    let body = ``;
    user.forEach(({ id, name, email, address, phone, website }) => {
      body += `
        <tr>
          <td class="col">${id}</td>
          <td class="col">${name}</td>
          <td class="col">${email}</td>
          <td class="col">${address.city}</td>
          <td class="col">${phone}</td>
          <td class="col">${website}</td>
        </tr>
               `;
    });
    document.getElementById("tableDatos").innerHTML = body;
  };