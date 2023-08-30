const base_url = 'http://localhost:3001'
//since the user is logged in, make sure to include the JWT in the header

export async function fetchUserApplications(user_email, user_password){
try{
  const token = localStorage.getItem('JWT');
  if (!token) {
    //TODO: look into implementing refresh tokens if the user clicked (keep me signed in) etc etc
    //if token is missing, redirect to the login page
    window.location.href = '/';
    return;
  }

  const response = await fetch(`${base_url}/user/fetchUserApplications`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      //user_id will be applications table's foreign key
    })
  })
  
  //TODO: if response.status === 401 (token expired/missing on backend), log user out
  return response
}catch(err){
  console.error("There was an error: ", err)
}
}
