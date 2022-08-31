// import React, { useState, useEffect } from 'react';
// import Loading from './Components/Loading';
// import UserProfile from './Components/UserProfile';
// import Activity from './Components/Activity';
// import './App.css';

// function App() {

//   const [loading, setLoading] = useState(true); //state for loader
//   const [dailyShowHide, setdailyShowHide] = useState(true)//state to show/hide daily activity
//   const [monthlyShowHide, setmonthlyShowHide] = useState(false)//state to show/hide monthly activity
//   const [weeklyShowHide, setweeklyShowHide] = useState(false)//state to show/hide weekly activity
//   const [trackData, setTrackData] = useState([]);//data fetched from API
//   const [status, setStatus] = useState('');

//   //Fetch time tracking data from API
//   useEffect(() => {
//     setLoading(true)
//     const fetchTrackData = async () => {
//       const response = await fetch('https://wookie.codesubmit.io/time-tracking', {
//             headers: {
//               'Content-Type': 'application/json'
//             },   
//       });
//       const data = await response.json();
//       setLoading(false)
//       setTrackData(data);
//     }
//     fetchTrackData();
//   },[])

//   //Loader
//   if (loading) {
//     return (
//       <Loading/>
//     )
//   }  

//   return (
//     <div className="container">
//       <div className="userProfile">{/* user profile */}
//         <UserProfile />
//         <div className="userActivity"> {/* user activity */}
//           <button className={dailyShowHide ? 'dailyActive' : ''}
//            onClick={()=> {setdailyShowHide(true);setmonthlyShowHide(false);setweeklyShowHide(false)}}>Daily</button>
//           <button className={monthlyShowHide ? 'monthlylyActive' : ''}
//           onClick={()=> {setdailyShowHide(false);setmonthlyShowHide(true);setweeklyShowHide(false)}}>Monthly</button>
//           <button className={weeklyShowHide ? 'weeklyActive' : ''} 
//           onClick={()=> {setdailyShowHide(false);setmonthlyShowHide(false);setweeklyShowHide(true)}}>Weekly</button>
//         </div>
//       </div>
//       <Activity trackData={trackData} 
//       dailyShowHide={dailyShowHide} 
//       monthlyShowHide={monthlyShowHide}
//       weeklyShowHide={weeklyShowHide} />
//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import Ellipsis from '../images/icon-ellipsis.svg'

// const Activity = ({trackData, dailyShowHide, monthlyShowHide, weeklyShowHide}) => {
//     return ( 
//         <>
//             {/* Activities info */}
//             {trackData.map((track) =>{
//               return <div className= {` activityWrapper ${track.title}`} key={track.title}>
//                         <div className='activityImageWrapper'>
//                           <div className="bgImage"></div>
//                         </div>
//                         <div className="activityInfo">
//                           <img className="ellipsisImage" src={Ellipsis} alt={Ellipsis} />
//                           <h4>{track.title}</h4>
//                           <div className={dailyShowHide ? 'show activityCard' : 'hide activityCard'}>
//                             <h2>{track.timeframes.daily.current} hrs</h2>
//                             <p >{dailyShowHide ? 'Yesterday - ' : weeklyShowHide ? 'Last Week - ' : 
//                             monthlyShowHide ? 'Last month - ' : ''}{track.timeframes.daily.previous} hrs</p>
//                           </div>
//                           <div className={monthlyShowHide ? 'show activityCard' : 'hide activityCard'}>
//                             <h2>{track.timeframes.monthly.current} hrs</h2>
//                             <p>{dailyShowHide ? 'Yesterday - ' : weeklyShowHide ? 'Last Week - ' : 
//                             monthlyShowHide ? 'Last month - ' : ''}{track.timeframes.monthly.previous} hrs</p>
//                           </div>
//                           <div className={weeklyShowHide ? 'show activityCard' : 'hide activityCard'}>
//                             <h2>{track.timeframes.weekly.current} hrs</h2>
//                             <p >{dailyShowHide ? 'Yesterday - ' : weeklyShowHide ? 'Last Week - ' : 
//                             monthlyShowHide ? 'Last month - ' : ''}{track.timeframes.weekly.previous} hrs</p>
//                           </div>
//                         </div>
//                       </div>
//             })}
//         </>
//      );
// }
 
// export default Activity;