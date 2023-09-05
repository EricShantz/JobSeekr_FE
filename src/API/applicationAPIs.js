const base_url = 'http://localhost:3001'
//since the user is logged in, make sure to include the JWT in the header

const token = localStorage.getItem('JWT');

export async function fetchUserApplications(user_email, user_password){
  try{
    if (!token) {
      //TODO: look into implementing refresh tokens if the user clicked (keep me signed in) etc etc
      //if token is missing, redirect to the login page
      window.location.href = '/';
      return;
    }
    
    const response = await fetch(`${base_url}/applications/fetchUserApplications`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //TODO: user_id will be applications table's foreign key
      })
    })
    
    //TODO: if response.status === 401 (token expired/missing on backend), log user out
    return response
  }catch(err){
    console.error("There was an error: ", err)
}
}

export async function createUserApplication(user){
  try{
    if(!token) {
      //TODO: look into implementing refresh tokens if the user clicked (keep me signed in) etc etc
      //if token is missing, redirect to the login page
      console.error("no token found")
      window.location.href = '/';
      return;
    }

    const {company_name,
    job_title, 
    compensation, 
    job_description, 
    link_to_job_posting, 
    date_applied, 
    interview_date, 
    is_favourite, 
    application_status, 
    user_id} = user
    const response = await fetch(`${base_url}/createUserApplication`, {
      method: "POST",
      headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_name,
        job_title, 
        compensation, 
        job_description, 
        link_to_job_posting, 
        date_applied, 
        interview_date, 
        is_favourite, 
        application_status, 
        user_id
      })
    })
    return response

  }catch(err){
    console.error("There was an error: ", err)
  }
}
