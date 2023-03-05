function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    for(i=0; i <submittedUsers.length; i++){
      check  = false
      for(j=0; j<goodUsers.length; j++){
        if(goodUsers[j].id == submittedUsers[i].id){
          check = true
          break;
        }
      }
      if(check == false){
        return false
      }
    }
    return true;
  };
}

function user(id){
  this.id = id;
}

u0 = new user(0)
u1 = new user(1)
u2 = new user(2)
u3 = new user(3)
u4 = new user(4)

a = [u0, u1, u2 ,u3]

a1 = [u2,u3]
a2 = [u3,u4]

var b = checkUsersValid(a)

console.log(b)