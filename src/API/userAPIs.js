

//================ Register User ==================
export async function registerUser(user_firstName, user_lastName, user_email, user_password){
  try{
      const response = await fetch(`http://localhost:3001/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: user_firstName,
          lastName: user_lastName,
          email: user_email,
          password: user_password
        })      
      })

    return response

  } catch (err){
    //will catch if theres a problem completing the fetch (unable to complete)
    console.error('An error occurred:', err);
  }
}


// ================ Fetch User Data ==================
export async function fetchUserData() {
  const response = await fetch(`http://localhost:3001/user`);
  return response.json();
}