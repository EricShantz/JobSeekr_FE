const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//TODO:
//need to set user id to context so we can pas it to the backend to retrieve the data
export async function fetchUserApplications() {
  const response = await fetch(`${API_BASE_URL}/user_id/application`);
  return response.json();
}