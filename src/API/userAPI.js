const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchUserData() {
  const response = await fetch(`${API_BASE_URL}/user`);
  return response.json();
}