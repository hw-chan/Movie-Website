
const defaultUser = {name:"guest",
                    password:"abc123",
                  }

let userRecords = [defaultUser,
    { name:"zaid", password:"bhasxf", 
      
    },
    { name:"chan",password:"abcdef"},
  ]


if (!localStorage.getItem('userRecords')) {

  localStorage.setItem('userRecords', JSON.stringify(userRecords));
} else{

  userRecords = JSON.parse(localStorage.getItem('userRecords'))
}

export {userRecords}