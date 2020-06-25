document.querySelector(".input-group__button").addEventListener("click", (e) => {
  e.preventDefault();
  return fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      body: {
          email:  document.querySelector("#email").value,
          password: document.querySelector("#password").value,
      },
      headers: {
          "x-auth-token": "your personal token"
      }
  })
})