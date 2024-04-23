// Add your code here

const submitData = (name, email) => {
    const url = 'http://localhost:3000/users';
    const data = { name, email };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        const newUser = data;
        document.body.innerHTML += `<p>New user added with id: ${newId}</p>`;
        document.body.innerHTML += `<p>Name: ${newUser.name}</p>`;
        document.body.innerHTML += `<p>Email: ${newUser.email}</p>`;
      })
      .catch(error => {
        const errorMessage = error.message;
        document.body.innerHTML += `<p>Error: ${errorMessage}</p>`;
      });
  }