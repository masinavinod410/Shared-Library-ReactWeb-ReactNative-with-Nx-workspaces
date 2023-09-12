//import styles from './shared.module.css';

import axios from 'axios';

export async function Shared() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  return response.status === 200 ? response.data : response;
}

export default Shared;
