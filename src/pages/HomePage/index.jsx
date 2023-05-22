import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <main>
      <h1>Top TV</h1>
      <em>All about the smaller silver screen</em>
      <ul>
        <li>
          <Link  style={{ color: '#1746A2' }} to="/shows" > Explore Shows </Link>
        </li>
        <li>
          <Link style={{ color: '#1746A2' }} to="/search" > Search your favourite shows </Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;