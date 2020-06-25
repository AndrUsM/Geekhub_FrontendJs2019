document.querySelector(".input-group__button").addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
        email:  document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        confirmationPassword: document.querySelector("#confirm_password").value
    }
    return fetch('http://localhost:3000/api/users/reset_password', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          "x-auth-token": "your personal token"
        }
    }).then( async response => {
      if(response.ok){
        response.json()
        alert("You can log in!");
        location.href = '/dist/index.html'
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