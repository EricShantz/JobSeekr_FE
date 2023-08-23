const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchUserApplications() {
  const response = await fetch(`${API_BASE_URL}/{user_id}/application`);
  return response.json();
}