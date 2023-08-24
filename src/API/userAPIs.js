const base_url = 'http://localhost:3001'

//================ Register User ==================
export async function registerUser(user_firstName, user_lastName, user_email, user_password){
  try{
      const response = await fetch(`${base_url}/register`, {
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

//=============== Login User ==========================
export async function loginUser(user_email, user_password){
  try{
    const response = await fetch(`${base_url}/loginUser`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user_email,
        password: user_password
      })
    })

    return response

  } catch (err){
    console.error("An error occurred", err)
  }
}
//=============== Forgot Password ==========================
export async function forgotPassword (email){
  try{
    const response = await fetch(`${base_url}/forgotPassword`,{
      //TODO: call backend to handle password token stuff
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
    return response
  } catch (err){
    console.error("An error occurred", err)
  }
}

//=============== Reset Password ===========================
export async function updatePasswordWithResetToken(reset_token, password, confirm_password){
  try{
    const response = await fetch(`${base_url}/resetPassword`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reset_token: reset_token,
        password: password,
        confirm_password: confirm_password
      })
    })

    return response

  } catch(err){
    console.error("An error occurred", err)
  }
}


// ================ Fetch User Data ==================
export async function fetchUserData() {
  const response = await fetch(`http://localhost:3001/user`);
  return response.json();
}