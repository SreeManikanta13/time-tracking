import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import UserProfile from './Components/UserProfile';
import Activity from './Components/Activity';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true); //state for loader
  const [trackData, setTrackData] = useState([]);//data fetched from API
  const [status, setStatus] = useState('dailyActive');//status

  //Fetch time tracking data from API
  useEffect(() => {
    setLoading(true)
    const fetchTrackData = async () => {
      const response = await fetch('https://wookie.codesubmit.io/time-tracking', {
            headers: {
              'Content-Type': 'application/json'
            },   
      });
      const data = await response.json();
      setLoading(false)
      setTrackData(data);
    }
    fetchTrackData();
  },[])

  const statusHandler = (value) => {
    setStatus(value);
  }

  //Loader
  if (loading) {
    return (
      <Loading/>
    )
  }  

  return (
    <div className="container">
      <UserProfile statusHandler={statusHandler} status = {status} />
      <Activity trackData={trackData} status = {status}  />
    </div>
  );
}

export default App;
