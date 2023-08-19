
export async function registerUser(user_password){
  console.log(user_password)
  try{
      const response = await fetch(`http://localhost:3001/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          //TODO: include the rest of the signup info
          password: user_password
        })      
      })
    if(response.ok){
      console.log("User successfully registered!")
    } else {
      console.log("An error occured registering the user")
    }
  } catch (err){
      console.error('An error occurred:', err);
  }
}

export async function fetchUserData() {
  const response = await fetch(`http://localhost:3001/user`);
  return response.json();
}