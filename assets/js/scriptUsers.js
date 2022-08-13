const urlBase = "https://jsonplaceholder.typicode.com/users";

fetch(urlBase)
  .then((response) => response.json())
  .then((data) => userDataTable(data));

const userDataTable = (data) => {
  let user = data;
  let body = ``;
  user.forEach(({ id, name, email, address, phone, website }) => {
    body += `
        <tr class="user-row">
          <td class="col">${id}</td>
          <td class="col">${name}</td>
          <td class="col">${email}</td>
          <td class="col">${address.city}</td>
          <td class="col">${phone}</td>
          <td class="col">${website}</td>
        </tr>`;
  });
  document.getElementById("usersTable").innerHTML = body;
};

const userData = async () => {
  let body = ``;
  try {
    const dataUsers = await axios(urlBase);
    dataUsers.data.forEach(({ id, name, email, address, phone, website }) => {
      body += `
  <div>
    <div class="user-card">
      <div class="user-content">
        <div class="col-left">
          <img src="../assets/icons/users.png" width="100px">
        </div>
        <div class="col-right">
          <p class="user-title">${name}</p>
          <p class="user-text">ID: 
            <span class="user-data">${id}</span>
          </p>
          <p class="user-text">Email: 
            <span class="user-data">${email}</span>
          </p>
          <p class="user-text">City: 
            <span class="user-data">${address.city}</span>
          </p>
          <p class="user-text">Phone number: 
            <span class="user-data">${phone}</span>
          </p>
          <p class="user-text">Website: 
            <span class="user-data">${website}</span>
          </p>
        </div>
      </div>
      <div class="user-effect">
        <h3>Info</h3>
      </div>
    </div>           
  </div>`;
    });
    document.getElementById("usersInfo").innerHTML = body;
  } catch (error) {
    console.log(error);
  }
};

userData();