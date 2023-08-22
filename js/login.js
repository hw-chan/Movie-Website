import { userRecords } from './users.js'

console.log('userRecords', userRecords)

const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const username = inputUsername.value
  const password = inputPassword.value
  const user = userRecords.find(user => user.name === username);

  console.log('user',user,userRecords)

  if (!user) {
    alert('User does not exist. Please create signup and create a new account!');
    window.location.href = './html/signup.html';
  } else {
    if (user.password === password) {
      alert('Logged in successfully!');

      console.log('current logged in user', user)

     
      localStorage.setItem('currentUser', JSON.stringify(user)) 

     
      window.location.href = '../main.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
})

