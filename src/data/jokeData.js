import axios from 'axios';

const url = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const joke = await axios.get(url);
  return joke.data;
};

export default getJoke;
