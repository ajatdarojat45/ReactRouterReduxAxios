
import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to='/blog'>Blog</Link>
      &nbsp;
      <Link to='/podcast'>Podcast</Link>
      <br/>
      Dashboard
    </div>
  );
};

export default Dashboard;
