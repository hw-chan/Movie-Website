
import {userRecords} from './users.js'

console.log('userRecords from user.js',userRecords)

const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const signupForm = document.querySelector('#signup-form')


signupForm.addEventListener('submit',(event)=>{
    event.preventDefault() 
    
   
    const username = inputUsername.value
    const password = inputPassword.value

 
    const user = { 
        name:username, 
        password:password, 
    }

    
    console.log('userRecords',userRecords)
    const userExists = checkIfUserExists(username)
   

 
    if(!userExists){ 
        
        userRecords.push(user)
        console.log('updated UserRecords',userRecords)

        localStorage.setItem('userRecords', JSON.stringify(userRecords))

  
        const userRecordsFromLocalStorage = JSON.parse(localStorage.getItem('userRecords'));
        console.log(userRecordsFromLocalStorage)

        signupForm.reset()
        window.location.href = '../index.html';
    }
})


function checkIfUserExists(username){

    const isExists = userRecords.some(user => user.name === username)  
    
    isExists? alert(`User ${username} already exists`): alert(`New user ${username} has been added successfully! Please login`)


    return isExists
}





