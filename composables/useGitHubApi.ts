import axios from 'axios';

export async function searchUserRepositories(username: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user repositories');
  }
}