document.querySelector(".input-group__button").addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    email:  document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    name: document.querySelector("#name").value
  }
  return fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "x-auth-token": "your personal token"
      }
  }).then( async response => {
    if(response.ok){
      alert("You can sign in!")
      window.location = "/"
      response.json()
    }
    else{
      if(data.password.length < 8){
        alert("New password must include 8 symbols")
      }
      if(!data.confirmationPassword || !data.email || !data.password){
        alert("Input fileds must be filled")
      }
      else{
        alert("Unhendled error: " + response.status)
      }
    }
  })
    .catch(error => console.log(error))
})